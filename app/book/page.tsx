"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_NUMBER } from "@/lib/site";
import {
  getLocalPrice,
  SVC_LABELS,
  type DateAvailability,
  type ServiceCode,
  type Slot,
  type SlotsResponse,
} from "@/lib/booking";

const OPENCLAW_URL = process.env.NEXT_PUBLIC_OPENCLAW_URL;

type Step = 1 | 2 | 3;

type FormErrors = Partial<Record<"name" | "phone" | "address" | "postal" | "service", string>>;

function formatDisplayDate(dateStr: string) {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function BookPage() {
  const [step, setStep] = useState<Step>(1);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [service, setService] = useState<ServiceCode | "">("");
  const [units, setUnits] = useState(2);
  const [errors, setErrors] = useState<FormErrors>({});

  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [datesData, setDatesData] = useState<Record<string, DateAvailability> | null>(null);
  const [remotePrice, setRemotePrice] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);

  const price = remotePrice ?? getLocalPrice(service, units);
  const phoneDigits = phone.replace(/\D/g, "");
  const waPhoneDisplay = phoneDigits.startsWith("65") ? phoneDigits : `65${phoneDigits}`;

  function validateStep1(): boolean {
    const next: FormErrors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    const digits = phone.replace(/\D/g, "");
    if (!digits || digits.length < 8) next.phone = "Please enter a valid Singapore number.";
    if (!address.trim()) next.address = "Please enter your address.";
    if (!/^\d{6}$/.test(postal.trim())) next.postal = "Please enter a 6-digit postal code.";
    if (!service) next.service = "Please select a service.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function goToStep2() {
    if (!validateStep1()) return;
    setStep(2);
    setDatesData(null);
    setSelectedDate(null);
    setSelectedSlot(null);
    setSlotsError(null);
    setLoadingSlots(true);

    if (!OPENCLAW_URL) {
      setLoadingSlots(false);
      setSlotsError("Booking availability isn't connected yet. Please message us directly.");
      return;
    }

    try {
      const params = new URLSearchParams({
        postal: postal.trim(),
        service,
        units: String(units),
        phone: phone.replace(/\D/g, ""),
      });
      const res = await fetch(`${OPENCLAW_URL}/booking/slots?${params}`, {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
        },
      });
      const data: SlotsResponse = await res.json();

      if (data.error || data.noZone) {
        setSlotsError(
          data.noZone
            ? "We couldn't find coverage for that postal code. Please message us directly."
            : data.error || "Something went wrong. Please try again."
        );
        return;
      }

      setDatesData(data.dates ?? {});
      setRemotePrice(data.price ?? null);
    } catch {
      setSlotsError("Could not load slots. Please check your connection and try again.");
    } finally {
      setLoadingSlots(false);
    }
  }

  function selectDate(dateStr: string) {
    const info = datesData?.[dateStr];
    if (!info || !info.available) return;
    setSelectedDate(dateStr);
    setSelectedDay(info.day);
    setSelectedSlot(null);
  }

  function goToStep3() {
    if (!selectedSlot) return;
    setStep(3);
  }

  function sendViaWhatsApp() {
    if (!selectedSlot || !selectedDate) return;
    const svcLabel = service ? SVC_LABELS[service] : "";
    const slotStr = `${selectedDay} ${formatDisplayDate(selectedDate)}, ${selectedSlot.start}–${selectedSlot.end}`;

    const message = [
      "Hi KoolAircon! I'd like to book an aircon service.",
      "",
      `Name: ${name.trim()}`,
      `Service: ${svcLabel} × ${units} unit(s)`,
      `Requested slot: ${slotStr}`,
      `Address: ${address.trim()}`,
      `Postal code: ${postal.trim()}`,
      "",
      "Please confirm my booking. Thank you!",
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setSuccess(true);
    setTimeout(() => window.open(waUrl, "_blank"), 400);
  }

  function openMoreAvailability() {
    const svcLabel = service ? SVC_LABELS[service] : "aircon";
    const message = [
      "Hi KoolAircon! I couldn't find a suitable slot online.",
      "",
      `Service: ${svcLabel} × ${units} unit(s)`,
      `Postal code: ${postal.trim()}`,
      "",
      "Can you help me find availability? Thank you!",
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  }

  function startOver() {
    setStep(1);
    setSuccess(false);
    setName("");
    setPhone("");
    setAddress("");
    setPostal("");
    setService("");
    setUnits(2);
    setErrors({});
    setDatesData(null);
    setSlotsError(null);
    setSelectedDate(null);
    setSelectedSlot(null);
    setRemotePrice(null);
  }

  if (success) {
    return (
      <main className="max-w-[480px] mx-auto px-5 py-16 text-center">
        <div className="w-[72px] h-[72px] rounded-full bg-teal-bg flex items-center justify-center mx-auto mb-5">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#5BAD92" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="18" r="15" />
            <polyline points="11,18 16,23 25,13" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold tracking-[-0.5px] mb-2">Request sent!</h2>
        <p className="text-[15px] text-grey leading-[1.6] mb-7">
          We&apos;ll confirm your booking via WhatsApp at
          <br />
          <span className="font-bold text-blue">+{waPhoneDisplay}</span>
          <br />
          <br />
          You should hear from us within a few hours.
        </p>
        <button
          onClick={startOver}
          className="max-w-[280px] mx-auto w-full py-4 rounded-xl font-bold border-[1.5px] border-blue text-blue bg-white"
        >
          Book another service
        </button>
      </main>
    );
  }

  return (
    <main>
      <div className="h-[3px] bg-border relative">
        <div
          className="h-full bg-blue transition-[width] duration-[400ms]"
          style={{ width: `${step * 33.33}%` }}
        />
      </div>

      {step === 1 && (
        <div className="max-w-[480px] mx-auto px-5 py-6">
          <p className="text-[11px] font-semibold text-blue tracking-[1.2px] uppercase mb-1.5">Step 1 of 3</p>
          <h1 className="text-[22px] font-bold leading-[1.25] mb-1 tracking-[-0.4px]">What do you need?</h1>
          <p className="text-sm text-grey mb-6">Tell us about your aircon and we&apos;ll find available slots near you.</p>

          <Field label="Your name" error={errors.name}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sarah Tan"
              autoComplete="name"
              className={inputClass(!!errors.name)}
            />
          </Field>

          <Field label="WhatsApp number" error={errors.phone} hint="We'll send your confirmation here.">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 91234567"
              autoComplete="tel"
              inputMode="tel"
              className={inputClass(!!errors.phone)}
            />
          </Field>

          <Field label="Address" error={errors.address}>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Blk 123 Tampines St 45 #05-67"
              autoComplete="street-address"
              className={inputClass(!!errors.address)}
            />
          </Field>

          <Field label="Postal code" error={errors.postal}>
            <input
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
              placeholder="e.g. 520123"
              inputMode="numeric"
              maxLength={6}
              className={inputClass(!!errors.postal)}
            />
          </Field>

          <Field label="Service type" error={errors.service}>
            <select
              value={service}
              onChange={(e) => setService(e.target.value as ServiceCode | "")}
              className={inputClass(!!errors.service)}
            >
              <option value="">Select a service</option>
              <option value="GC">General Clean</option>
              <option value="CW">Chemical Wash</option>
              <option value="CO">Chemical Overhaul</option>
              <option value="KJ">KoolJet — Hydro Jet Wash</option>
              <option value="AS">Annual Service Contract (4×/year)</option>
            </select>
          </Field>

          <div className="mb-4">
            <label className="block text-[13px] font-semibold mb-1.5">Number of units</label>
            <div className="flex items-center border-[1.5px] border-border rounded-lg overflow-hidden bg-white w-fit">
              <button
                type="button"
                onClick={() => setUnits((u) => Math.max(1, u - 1))}
                aria-label="Decrease units"
                className="w-12 h-12 text-xl text-blue"
              >
                −
              </button>
              <span className="w-14 text-center text-[17px] font-semibold">{units}</span>
              <button
                type="button"
                onClick={() => setUnits((u) => Math.min(10, u + 1))}
                aria-label="Increase units"
                className="w-12 h-12 text-xl text-blue"
              >
                +
              </button>
            </div>
          </div>

          <div
            className={`inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm font-semibold mt-2 ${
              service ? "bg-teal-bg text-teal" : "text-muted"
            }`}
          >
            {service && price !== null
              ? `Estimated price: $${price % 1 === 0 ? price : price.toFixed(2)} SGD`
              : "Select service and units to see price"}
          </div>

          <div className="mt-6">
            <button onClick={goToStep2} className="w-full py-4 rounded-xl font-bold text-white bg-blue">
              See available slots →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-[480px] mx-auto px-5 py-6">
          <p className="text-[11px] font-semibold text-blue tracking-[1.2px] uppercase mb-1.5">Step 2 of 3</p>
          <h1 className="text-[22px] font-bold leading-[1.25] mb-1 tracking-[-0.4px]">Pick a slot</h1>
          <p className="text-sm text-grey mb-6">Select a date, then choose a time that works for you.</p>

          {slotsError && (
            <div className="bg-[#FFF0EE] border border-[#FFCCC7] rounded-lg px-3.5 py-3 text-[13px] text-red-700 mb-4">
              {slotsError}
            </div>
          )}

          {loadingSlots && (
            <div className="text-center py-10 text-grey text-sm">
              <div className="w-7 h-7 border-[3px] border-border border-t-blue rounded-full animate-spin mx-auto mb-3" />
              Finding available slots near you...
            </div>
          )}

          {!loadingSlots && datesData && <Calendar dates={datesData} selectedDate={selectedDate} onSelect={selectDate} />}

          {!loadingSlots && datesData && selectedDate && (
            <SlotGrid
              dateStr={selectedDate}
              slots={datesData[selectedDate]?.slots ?? []}
              selectedSlot={selectedSlot}
              onSelect={setSelectedSlot}
            />
          )}

          {!loadingSlots && (datesData || slotsError) && (
            <div className="mt-6 p-4 bg-white border-[1.5px] border-dashed border-border rounded-xl text-center">
              <p className="text-[13px] text-grey leading-[1.5] mb-2.5">
                Can&apos;t find a time that works?
                <br />
                We may be able to squeeze you in.
              </p>
              <button
                onClick={openMoreAvailability}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-white bg-wa"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
                Chat with us on WhatsApp
              </button>
            </div>
          )}

          <div className="flex flex-col gap-0 mt-6">
            <button
              onClick={goToStep3}
              disabled={!selectedSlot}
              className="w-full py-4 rounded-xl font-bold text-white bg-blue disabled:bg-border disabled:text-muted"
            >
              Confirm slot →
            </button>
            <button onClick={() => setStep(1)} className="w-full py-2.5 mt-1.5 text-sm text-grey font-medium">
              ← Back
            </button>
          </div>
        </div>
      )}

      {step === 3 && selectedSlot && selectedDate && (
        <div className="max-w-[480px] mx-auto px-5 py-6">
          <p className="text-[11px] font-semibold text-blue tracking-[1.2px] uppercase mb-1.5">Step 3 of 3</p>
          <h1 className="text-[22px] font-bold leading-[1.25] mb-1 tracking-[-0.4px]">Confirm your booking</h1>
          <p className="text-sm text-grey mb-6">Check the details below, then tap to send your request via WhatsApp.</p>

          <div className="bg-white border-[1.5px] border-border rounded-xl p-[18px] mb-5">
            <SummaryRow label="Name" value={name} />
            <SummaryRow label="WhatsApp" value={`+65 ${phone.replace(/\D/g, "").replace(/^65/, "")}`} />
            <SummaryRow label="Address" value={`${address}, ${postal}`} />
            <SummaryRow label="Service" value={`${service ? SVC_LABELS[service] : ""} × ${units} unit(s)`} />
            <SummaryRow
              label="Slot"
              value={`${selectedDay}, ${formatDisplayDate(selectedDate)}, ${selectedSlot.start}–${selectedSlot.end}`}
              highlight
              last={!price}
            />
            {price !== null && (
              <SummaryRow label="Estimated price" value={`$${price % 1 === 0 ? price : price.toFixed(2)} SGD`} last />
            )}
          </div>

          <div className="flex gap-2.5 items-start bg-teal-bg rounded-lg p-3.5 text-[13px] text-teal leading-[1.5] mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>
              Tapping the button below will open WhatsApp with your booking details pre-filled. Just hit send —
              we&apos;ll confirm your slot within a few hours.
            </span>
          </div>

          <div className="flex flex-col gap-0">
            <button
              onClick={sendViaWhatsApp}
              className="w-full py-4 rounded-xl font-bold text-white bg-wa flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Send booking request via WhatsApp
            </button>
            <button onClick={() => setStep(2)} className="w-full py-2.5 mt-1.5 text-sm text-grey font-medium">
              ← Change slot
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-3.5 py-3.5 border-[1.5px] rounded-lg text-[15px] bg-white outline-none ${
    hasError ? "border-red-400" : "border-border focus:border-blue"
  }`;
}

function Field({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <label className="block text-[13px] font-semibold mb-1.5">{label}</label>
      {children}
      {hint && !error && <div className="text-xs text-grey mt-1.5">{hint}</div>}
      {error && <div className="text-xs text-red-600 mt-1.5">{error}</div>}
    </div>
  );
}

function SummaryRow({
  label,
  value,
  highlight,
  last,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  last?: boolean;
}) {
  return (
    <div className={`flex justify-between items-start gap-3 py-2.5 ${last ? "" : "border-b border-border"}`}>
      <span className="text-[13px] text-grey shrink-0">{label}</span>
      <span className={`text-sm font-semibold text-right ${highlight ? "text-blue text-base" : ""}`}>{value}</span>
    </div>
  );
}

function Calendar({
  dates,
  selectedDate,
  onSelect,
}: {
  dates: Record<string, DateAvailability>;
  selectedDate: string | null;
  onSelect: (dateStr: string) => void;
}) {
  const dateKeys = Object.keys(dates).sort();
  if (dateKeys.length === 0) {
    return (
      <div className="bg-white border-[1.5px] border-border rounded-lg p-4 text-sm text-grey text-center">
        No available slots in the next 14 days. Please contact us directly.
      </div>
    );
  }

  const byMonth: Record<string, { dateStr: string; d: Date; info: DateAvailability }[]> = {};
  for (const dateStr of dateKeys) {
    const d = new Date(`${dateStr}T00:00:00`);
    const monthKey = d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    (byMonth[monthKey] ??= []).push({ dateStr, d, info: dates[dateStr] });
  }

  return (
    <div>
      {Object.entries(byMonth).map(([month, days]) => (
        <div key={month}>
          <div className="text-[13px] font-bold mt-4 mb-2 tracking-[-0.2px]">{month}</div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="text-center text-[11px] font-semibold text-grey uppercase tracking-wide py-1.5">
                {d}
              </div>
            ))}
            {Array.from({ length: days[0].d.getDay() }).map((_, i) => (
              <div key={`pad-${i}`} className="aspect-square" />
            ))}
            {days.map(({ dateStr, d, info }) => {
              const isSelected = selectedDate === dateStr;
              return (
                <button
                  key={dateStr}
                  onClick={() => onSelect(dateStr)}
                  disabled={!info.available}
                  className={`aspect-square rounded-lg text-sm font-medium relative border-[1.5px] ${
                    isSelected
                      ? "bg-blue text-white border-blue"
                      : info.available
                        ? "bg-teal-bg text-teal border-border"
                        : "bg-bg text-muted border-transparent cursor-not-allowed"
                  }`}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function SlotGrid({
  dateStr,
  slots,
  selectedSlot,
  onSelect,
}: {
  dateStr: string;
  slots: Slot[];
  selectedSlot: Slot | null;
  onSelect: (slot: Slot) => void;
}) {
  const d = new Date(`${dateStr}T00:00:00`);
  const dateLabel = d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

  return (
    <div className="mt-5">
      <div className="text-[13px] font-semibold text-grey uppercase tracking-wide mb-2.5">{dateLabel}</div>
      {slots.length === 0 ? (
        <div className="bg-white border-[1.5px] border-border rounded-lg p-4 text-sm text-grey text-center">
          No slots available on this date.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {slots.map((slot, i) => {
            const isSelected = selectedSlot?.start === slot.start && selectedSlot?.end === slot.end;
            return (
              <button
                key={i}
                onClick={() => onSelect(slot)}
                className={`px-2.5 py-3.5 border-[1.5px] rounded-lg text-center leading-[1.3] ${
                  isSelected ? "bg-blue border-blue text-white" : "bg-white border-border text-blue"
                }`}
              >
                <span className="text-base font-semibold block">
                  {slot.start} – {slot.end}
                </span>
                {slot.block && (
                  <span className={`text-[11px] font-normal ${isSelected ? "text-white/80" : "text-grey"}`}>
                    {slot.block}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

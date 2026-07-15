export type ServiceCode = "GC" | "CW" | "CO" | "KJ" | "AS";

export const SVC_LABELS: Record<ServiceCode, string> = {
  GC: "General Clean",
  CW: "Chemical Wash",
  CO: "Chemical Overhaul",
  KJ: "KoolJet — Hydro Jet Wash",
  AS: "Annual Service (4×/year)",
};

// Mirrors the pricing table in the CRM (10_Pricing Table) — kept in sync with 06-booking.html.
type PriceTable = Partial<Record<number, number>> & { extra?: number; per_unit?: number };

const PRICING: Record<ServiceCode, PriceTable> = {
  GC: { 1: 65, 2: 75, 3: 85, 4: 95, 5: 110, extra: 19.5 },
  CW: { 1: 92.65, 2: 250.7, 3: 316.5, 4: 381.5, 5: 452.35, extra: 70.85 },
  CO: { 1: 160, 2: 300, 3: 420, 4: 520, extra: 80 },
  AS: { 2: 240, 3: 280, 4: 320, 5: 360, extra: 72 },
  KJ: { per_unit: 60 },
};

export function getLocalPrice(service: ServiceCode | "", units: number): number | null {
  if (!service) return null;
  const p = PRICING[service];
  if (p.per_unit) return p.per_unit * units;
  if (p[units] !== undefined) return p[units];

  const numericKeys = Object.keys(p)
    .filter((k) => k !== "extra" && k !== "per_unit")
    .map(Number);
  const maxUnit = Math.max(...numericKeys);
  const base = p[maxUnit] ?? 0;
  const extra = p.extra ?? 0;
  return base + (units - maxUnit) * extra;
}

export type Slot = { start: string; end: string; block?: string };
export type DateAvailability = { available: boolean; day: string; slots: Slot[] };
export type SlotsResponse = {
  error?: string;
  noZone?: boolean;
  dates?: Record<string, DateAvailability>;
  durationMins?: number;
  price?: number;
  isReturningCustomer?: boolean;
};

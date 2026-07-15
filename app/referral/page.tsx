import { WhatsAppButton } from "@/components/WhatsAppButton";
import { NumberedSteps } from "@/components/NumberedStep";

const STEPS = [
  {
    h: "WhatsApp us with your friend's name",
    body: "Just send us a message with your name and your friend's name.",
  },
  {
    h: "Your friend books and completes a service",
    body: "They mention your name when they WhatsApp us. They get $10 off their first booking.",
  },
  {
    h: "You receive $20 credit",
    body: "$20 credited to your account after their service is completed. Use it on any future booking.",
  },
];

export default function ReferralPage() {
  return (
    <main>
      <section className="border-b border-border px-[18px] py-10 text-center">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <div className="text-4xl mb-3">🎁</div>
          <h1 className="text-[26px] font-extrabold text-black mb-2.5 tracking-[-0.4px]">
            Refer a friend, earn $20.
          </h1>
          <p className="text-sm text-grey leading-[1.7] max-w-[480px] mx-auto mb-5">
            Know someone whose aircon needs attention? Refer them to Kool and earn $20 credit when they book. Your
            friend gets $10 off their first service.
          </p>
          <div className="flex justify-center">
            <WhatsAppButton>WhatsApp to refer a friend</WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg px-[18px] py-7">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <h2 className="text-lg font-extrabold text-black mb-5 tracking-[-0.2px]">How it works</h2>
          <NumberedSteps steps={STEPS} />
        </div>
      </section>

      <section className="px-[18px] py-5">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <h2 className="text-sm font-bold text-black mb-1.5">Terms</h2>
          <p className="text-xs text-muted leading-[1.7]">
            No limit on referrals. Credit valid for 12 months. Applicable to residential services only. One
            referral credit per new customer.
          </p>
        </div>
      </section>
    </main>
  );
}

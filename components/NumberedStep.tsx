export type Step = { h: string; body: string };

export function NumberedSteps({ steps, className = "" }: { steps: Step[]; className?: string }) {
  return (
    <div className={`flex flex-col md:flex-row gap-3 md:gap-4 ${className}`}>
      {steps.map((step, i) => (
        <div key={step.h} className="flex md:flex-1 md:flex-col gap-3 items-start">
          <div className="shrink-0 w-8 h-8 rounded-full bg-teal text-white font-bold text-sm flex items-center justify-center">
            {i + 1}
          </div>
          <div>
            <div className="text-[13px] font-bold text-black mb-1">{step.h}</div>
            <p className="text-xs text-grey leading-[1.55]">{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

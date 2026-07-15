type ImagePlaceholderProps = {
  label?: string;
  height?: string;
  className?: string;
};

export function ImagePlaceholder({ label = "Image", height = "180px", className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-[#EBEBEB] border border-dashed border-[#CCC] rounded-lg flex flex-col items-center justify-center gap-1.5 text-[#AAA] text-[11px] text-center p-3 ${className}`}
      style={{ height }}
    >
      <span className="text-[22px]">📷</span>
      <span className="font-semibold">{label}</span>
      <span>Replace with real image URL in content sheet</span>
    </div>
  );
}

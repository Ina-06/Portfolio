export function PanelTag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute bg-ink px-[7px] py-[5px] font-press text-[9px] text-cream ${className}`}
    >
      {children}
    </div>
  );
}

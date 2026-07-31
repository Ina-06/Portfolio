export function PageBack() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-[1] border-4 border-ink bg-tan-dark [backface-visibility:hidden] [transform:rotateY(180deg)]"
    >
      <div
        className="absolute inset-0 opacity-[0.12] [transform:scaleX(-1)]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, #141414 0 2px, transparent 2px 22px), radial-gradient(#141414 1px, transparent 1.4px)",
          backgroundSize: "auto, 5px 5px",
        }}
      />
    </div>
  );
}

export function DotOverlay({ color = "#141414", size = 5 }: { color?: string; size?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-5"
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1.4px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

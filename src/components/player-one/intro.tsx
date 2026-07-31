import type { RefObject } from "react";
import { Sprite } from "./sprite";

export function Intro({
  pow,
  barRef,
  onSkip,
}: {
  pow: boolean;
  barRef: RefObject<HTMLDivElement | null>;
  onSkip: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-label="Loading sequence"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 overflow-hidden bg-[#050510]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 h-[90px] animate-[po-sweep_1.1s_linear_1_forwards]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(43,179,192,0.5), transparent)",
        }}
      />
      <div className="animate-[po-blink_0.7s_steps(1)_infinite] font-press text-[22px] text-yellow">
        INSERT COIN
      </div>
      <div
        aria-hidden="true"
        className="h-[116px] w-[116px] animate-[po-walk_1.1s_steps(4)_0.5s_1_both] border-4 border-cream bg-void overflow-hidden"
      >
        <Sprite frame={1} label="Pixel-art portrait of Ibrahim Araji walking in" />
      </div>
      <div className="w-[min(560px,76vw)]">
        <div className="mb-2.5 font-press text-[11px] text-teal">LOADING MEMORIES...</div>
        <div className="relative h-[30px] overflow-hidden border-4 border-cream bg-void-2">
          <div
            ref={barRef}
            className="absolute inset-0 origin-[0%_50%] scale-x-0 bg-red transition-transform duration-[180ms] ease-[steps(1)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, transparent 0 26px, #0B0A1C 26px 32px)",
            }}
          />
        </div>
      </div>
      {pow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            className="animate-[po-pow_0.55s_steps(6)_1_forwards] font-bangers text-[120px] text-yellow"
            style={{ textShadow: "8px 8px 0 #E8453C" }}
          >
            POW!
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={onSkip}
        className="absolute bottom-6 right-6 border-4 border-ink bg-teal px-3.5 py-3 font-press text-[11px] text-ink shadow-[5px_5px_0_#141414] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#141414]"
      >
        SKIP ▶
      </button>
    </div>
  );
}

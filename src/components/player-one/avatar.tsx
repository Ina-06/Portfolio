import type { RefObject } from "react";
import { Sprite } from "./sprite";

export function Avatar({
  avatarRef,
  frame,
  wave,
  onEnter,
  onLeave,
  onClick,
}: {
  avatarRef: RefObject<HTMLDivElement | null>;
  frame: number;
  wave: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  return (
    <div
      ref={avatarRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="absolute left-[26px] top-[22px] z-50 flex items-start gap-2.5"
    >
      <div className="relative w-[126px] border-4 border-ink bg-void p-1.5 shadow-[6px_6px_0_#141414]">
        <div className="aspect-square overflow-hidden border-[3px] border-teal bg-void">
          <Sprite frame={frame} />
        </div>
        <div className="py-0.5 pt-1.5 text-center font-press text-[8px] text-cream">
          PLAYER ONE
        </div>
        <div className="flex justify-center gap-[3px] pb-[3px]">
          <span aria-hidden="true" className="h-2.5 w-[7px] bg-red" />
          <span aria-hidden="true" className="h-2.5 w-[7px] bg-red" />
          <span aria-hidden="true" className="h-2.5 w-[7px] bg-red" />
        </div>
      </div>
      {wave && (
        <div
          className="relative mt-6 animate-[po-bubble_0.22s_steps(3)] border-4 border-ink bg-cream px-3.5 pb-0.5 pt-1 font-bangers text-[30px] text-red shadow-[5px_5px_0_#141414]"
        >
          Hi!
          <span
            aria-hidden="true"
            className="absolute left-[-16px] top-3.5 h-0 w-0 border-y-8 border-r-[16px] border-y-transparent border-r-ink"
          />
        </div>
      )}
    </div>
  );
}

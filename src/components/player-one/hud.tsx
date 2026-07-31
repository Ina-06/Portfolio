import type { RefObject } from "react";

export function Hud({
  hudRef,
  hudLabelRef,
  dot0Ref,
  dot1Ref,
  dot2Ref,
  onGoto0,
  onGoto1,
  onGoto2,
  onGoto3,
}: {
  hudRef: RefObject<HTMLElement | null>;
  hudLabelRef: RefObject<HTMLSpanElement | null>;
  dot0Ref: RefObject<HTMLButtonElement | null>;
  dot1Ref: RefObject<HTMLButtonElement | null>;
  dot2Ref: RefObject<HTMLButtonElement | null>;
  onGoto0: () => void;
  onGoto1: () => void;
  onGoto2: () => void;
  onGoto3: () => void;
}) {
  return (
    <nav
      ref={hudRef}
      aria-label="Page navigation"
      className="absolute right-[26px] top-[26px] z-50 flex items-center gap-3.5 border-4 border-teal bg-void px-3.5 py-2.5 shadow-[6px_6px_0_#141414]"
    >
      <span ref={hudLabelRef} className="font-press text-[11px] text-teal">
        PAGE 01 / 03
      </span>
      <button
        type="button"
        onClick={onGoto0}
        aria-label="Go to page 1"
        ref={dot0Ref}
        className="h-4 w-4 cursor-pointer border-[3px] border-teal bg-yellow p-0"
      />
      <button
        type="button"
        onClick={onGoto1}
        aria-label="Go to page 2"
        ref={dot1Ref}
        className="h-4 w-4 cursor-pointer border-[3px] border-teal bg-transparent p-0"
      />
      <button
        type="button"
        onClick={onGoto2}
        aria-label="Go to page 3"
        ref={dot2Ref}
        className="h-4 w-4 cursor-pointer border-[3px] border-teal bg-transparent p-0"
      />
      <button
        type="button"
        onClick={onGoto3}
        aria-label="Go to contact screen"
        className="cursor-pointer border-[3px] border-ink bg-yellow px-2 py-1.5 font-press text-[9px] text-void"
      >
        CONTACT
      </button>
    </nav>
  );
}

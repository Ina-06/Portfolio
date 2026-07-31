import type { RefObject } from "react";
import { DotOverlay } from "./page-back";
import { Sprite } from "./sprite";

type FormState = "idle" | "sending" | "done";

export function Contact({
  sectionRef,
  form,
  formError,
  transmitDots,
  nameRef,
  emailRef,
  msgRef,
  honeyRef,
  onSubmit,
  onReset,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  form: FormState;
  formError: string;
  transmitDots: number;
  nameRef: RefObject<HTMLInputElement | null>;
  emailRef: RefObject<HTMLInputElement | null>;
  msgRef: RefObject<HTMLTextAreaElement | null>;
  honeyRef: RefObject<HTMLInputElement | null>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
}) {
  const sending = form === "sending";

  return (
    <section
      ref={sectionRef}
      className="absolute inset-0 z-[1] overflow-hidden border-4 border-teal bg-void shadow-[6px_6px_0_#141414]"
    >
      <DotOverlay color="#2BB3C0" size={6} />
      <div className="relative grid h-full grid-rows-[auto_1fr_auto] p-4 pb-4 book:p-[26px] book:px-[34px] book:pb-5">
        <div className="flex flex-col gap-1.5 border-b-4 border-teal pb-3 book:min-h-[112px] book:flex-row book:items-end book:justify-between book:gap-0 book:pl-[176px]">
          <div className="whitespace-nowrap font-press text-xs text-teal">HIGH SCORE ENTRY</div>
          <div className="animate-[po-blink_1.1s_steps(1)_infinite] font-press text-xs text-yellow">
            INSERT COIN TO CONTINUE
          </div>
        </div>

        <div
          data-cols="1fr 1fr"
          className="grid grid-cols-2 items-center gap-6 py-5 book:gap-[34px] book:py-[18px]"
        >
          <div>
            <h2 className="m-0 mb-1.5 font-bangers text-[40px] leading-[0.92] tracking-wide text-cream book:text-[62px]">
              SAY SOMETHING,
              <br />
              <span className="text-red">PLAYER TWO.</span>
            </h2>
            <p className="m-0 mb-5 max-w-[46ch] text-[19px] leading-[1.35] text-cream opacity-80 book:text-[21px]">
              Internships, freelance work, or a question about anything on these pages. I answer
              everything.
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href="https://github.com/Ina-06"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 border-4 border-teal bg-[rgba(43,179,192,0.08)] px-3.5 py-3 font-press text-[11px] text-teal hover:bg-teal hover:text-void"
              >
                <span
                  aria-hidden="true"
                  className="h-3.5 w-3.5 bg-current shadow-[-6px_0_0_currentColor,6px_0_0_currentColor,0_6px_0_currentColor]"
                />
                GITHUB / INA-06
              </a>
              <a
                href="https://linkedin.com/in/ibrahim-araji"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 border-4 border-teal bg-[rgba(43,179,192,0.08)] px-3.5 py-3 font-press text-[11px] text-teal hover:bg-teal hover:text-void"
              >
                <span
                  aria-hidden="true"
                  className="h-3.5 w-2 bg-current shadow-[12px_-4px_0_currentColor,12px_4px_0_currentColor]"
                />
                LINKEDIN / IBRAHIM-ARAJI
              </a>
              <a
                href="mailto:araji_ibrahim@outlook.com"
                className="flex items-center gap-3 border-4 border-teal bg-[rgba(43,179,192,0.08)] px-3.5 py-3 font-press text-[11px] text-teal hover:bg-teal hover:text-void"
              >
                <span aria-hidden="true" className="h-3.5 w-5 border-[3px] border-current" />
                ARAJI_IBRAHIM@OUTLOOK.COM
              </a>
              <a
                href="/cv/ibrahim-araji-cv.pdf"
                target="_blank"
                rel="noopener"
                download
                className="mt-1.5 flex items-center justify-center gap-3 border-4 border-ink bg-cream px-3.5 py-3.5 font-press text-xs text-ink shadow-[6px_6px_0_#2BB3C0] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#2BB3C0]"
              >
                <span
                  aria-hidden="true"
                  className="h-0 w-0 border-x-[7px] border-t-[10px] border-x-transparent border-t-ink"
                />
                DOWNLOAD CV
              </a>
            </div>
          </div>

          <div className="relative">
            {form !== "done" ? (
              <form
                onSubmit={onSubmit}
                noValidate
                className="flex flex-col gap-4 border-4 border-teal bg-[rgba(18,16,43,0.9)] p-[22px] shadow-[6px_6px_0_#141414]"
              >
                <div>
                  <label htmlFor="po-name" className="mb-2 block font-press text-[13px] text-yellow">
                    ENTER YOUR NAME
                  </label>
                  <input
                    id="po-name"
                    name="name"
                    type="text"
                    required
                    ref={nameRef}
                    autoComplete="name"
                    className="w-full border-4 border-[#4a4670] border-t-[#4a4670] bg-void-2 p-4 text-[20px] text-cream caret-yellow focus:border-teal focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="po-email" className="mb-2 block font-press text-[13px] text-yellow">
                    ENTER YOUR EMAIL
                  </label>
                  <input
                    id="po-email"
                    name="email"
                    type="email"
                    required
                    ref={emailRef}
                    autoComplete="email"
                    className="w-full border-4 border-[#4a4670] bg-void-2 p-4 text-[20px] text-cream caret-yellow focus:border-teal focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="po-msg" className="mb-2 block font-press text-[13px] text-yellow">
                    ENTER YOUR MESSAGE
                  </label>
                  <textarea
                    id="po-msg"
                    name="message"
                    rows={4}
                    required
                    ref={msgRef}
                    className="w-full resize-y border-4 border-[#4a4670] bg-void-2 p-4 text-[22px] leading-[1.3] text-cream caret-yellow focus:border-teal focus:outline-none"
                  />
                </div>
                <div aria-hidden="true" className="absolute left-[-9999px] top-0">
                  <label htmlFor="po-website">Website</label>
                  <input
                    id="po-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    ref={honeyRef}
                    autoComplete="off"
                  />
                </div>
                {formError && (
                  <div className="font-press text-[12px] leading-[1.6] text-red">{formError}</div>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className={`border-4 border-ink px-4 py-5 font-press text-[15px] text-ink shadow-[6px_6px_0_#141414] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#141414] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none ${sending ? "bg-teal" : formError ? "bg-red" : "bg-yellow"}`}
                >
                  <span>{sending ? `TRANSMITTING${".".repeat(transmitDots)}` : "▶ SEND MESSAGE"}</span>
                </button>
              </form>
            ) : (
              <div
                role="status"
                className="animate-[po-up_0.3s_steps(3)] border-4 border-yellow bg-[rgba(255,201,60,0.08)] p-6 px-6 py-10 text-center shadow-[6px_6px_0_#141414]"
              >
                <div
                  className="font-bangers text-[40px] leading-[0.95] text-yellow book:text-[58px]"
                  style={{ textShadow: "4px 4px 0 #E8453C" }}
                >
                  NEW HIGH SCORE!
                </div>
                <div className="mt-3.5 font-press text-[11px] leading-[1.8] text-teal">
                  MESSAGE TRANSMITTED
                  <br />
                  I&apos;LL REPLY SHORTLY
                </div>
                <div
                  aria-hidden="true"
                  className="mx-auto mt-[22px] h-24 w-24 overflow-hidden border-4 border-yellow bg-void"
                >
                  <Sprite frame={2} label="Pixel-art portrait of Ibrahim Araji waving" />
                </div>
                <button
                  type="button"
                  onClick={onReset}
                  className="mt-5 cursor-pointer border-4 border-ink bg-teal px-4 py-3 font-press text-[10px] text-void"
                >
                  PLAY AGAIN
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 border-t-4 border-teal pt-3 book:flex-row book:items-end book:justify-between">
          <div className="order-2 font-press text-[10px] text-cream opacity-50 book:order-1">
            © IBRAHIM ARAJI — PLAYER ONE
          </div>
          <div className="order-1 flex items-center gap-3 book:order-2 book:items-end book:gap-3.5">
            <div className="border-4 border-ink bg-red px-3 py-0.5 font-bangers text-lg text-cream shadow-[4px_4px_0_#141414] book:text-2xl">
              SEE YOU IN THE NEXT LEVEL!
            </div>
            <div
              aria-hidden="true"
              className="h-[56px] w-[56px] flex-none overflow-hidden border-4 border-cream bg-void book:h-[74px] book:w-[74px]"
            >
              <Sprite frame={2} label="Pixel-art portrait of Ibrahim Araji waving" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

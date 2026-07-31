import type { RefObject } from "react";
import Image from "next/image";
import { PanelTag } from "./panel-tag";
import { PageBack, DotOverlay } from "./page-back";
import { NODES } from "./data";

export function Page3({
  sectionRef,
  shadeRef,
  node,
  onSelectNode,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  shadeRef: RefObject<HTMLDivElement | null>;
  node: number;
  onSelectNode: (i: number) => void;
}) {
  const active = NODES[node] ?? NODES[2];

  return (
    <section
      ref={sectionRef}
      className="absolute inset-0 z-[2] [transform-style:preserve-3d] [transform-origin:0%_50%] will-change-transform"
    >
      <div className="absolute inset-0 z-[2] overflow-hidden border-4 border-ink bg-cream shadow-[6px_6px_0_#141414] [backface-visibility:hidden]">
        <DotOverlay />
        <div
          ref={shadeRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[25] opacity-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 40%, transparent 72%)",
          }}
        />

        <div className="relative grid h-full grid-rows-[auto_auto_1fr] gap-3.5 pt-5 px-4 pb-4 book:pt-[26px] book:px-[30px] book:pb-[18px]">
          <div className="flex flex-col gap-2 border-b-4 border-ink pb-3 book:min-h-[130px] book:flex-row book:items-end book:justify-between book:gap-0 book:pb-2.5 book:pl-[172px]">
            <h2 className="m-0 font-bangers text-[32px] tracking-wide text-ink book:text-[46px]">
              NEXT LEVEL
            </h2>
            <div className="font-press text-[10px] text-ink opacity-65">
              WHERE I&apos;VE BEEN → WHAT I BUILT → WHERE I&apos;M GOING
            </div>
          </div>

          {/* Band 1 — Work History */}
          <div className="relative border-4 border-ink bg-tan px-4 py-4 book:px-[18px]">
            <PanelTag className="right-4 top-[-14px]">BAND 1 — WORK HISTORY</PanelTag>

            <div className="relative mt-2 grid grid-cols-1 gap-4 book:grid-cols-[1fr_1fr_1fr_320px] book:items-start book:gap-0">
              <div
                aria-hidden="true"
                className="absolute right-[30%] top-[26px] left-[8%] hidden h-2 book:block"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, #141414 0 10px, transparent 10px 16px)",
                }}
              />
              <div className="absolute left-[8%] top-[168px] hidden h-[22px] w-[22%] items-center justify-center border-[3px] border-dashed border-teal bg-[rgba(43,179,192,0.07)] font-press text-[8px] text-teal book:flex">
                AUB — FULL COURSE LOAD
              </div>

              <button
                type="button"
                onClick={() => onSelectNode(0)}
                className="relative z-[2] cursor-pointer border-0 bg-transparent py-0 pr-2.5 text-left"
              >
                <span
                  className={`mb-2 block h-[30px] w-[30px] border-4 border-ink ${node === 0 ? "bg-yellow" : "bg-cream"}`}
                />
                <span className="block font-press text-[9px] text-ink">NODE 01</span>
                <span className="block text-[19px] text-ink opacity-75">FEB 2022 – MAY 2023</span>
                <span className="block font-bangers text-[24px] leading-none text-ink">MSII</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectNode(1)}
                className="relative z-[2] cursor-pointer border-0 bg-transparent py-0 pr-2.5 text-left"
              >
                <span
                  className={`mb-2 block h-[30px] w-[30px] border-4 border-ink ${node === 1 ? "bg-yellow" : "bg-cream"}`}
                />
                <span className="block font-press text-[9px] text-ink">NODE 02</span>
                <span className="block text-[19px] text-ink opacity-75">OCT 2025</span>
                <span className="block font-bangers text-[24px] leading-none text-ink">
                  SWFL — DISPATCHER
                </span>
              </button>

              <div className="relative z-[3]">
                <div className="relative z-[1] mb-2 inline-block -rotate-[7deg] animate-[po-flash_1.4s_steps(2)_infinite] border-4 border-ink bg-yellow px-2 font-bangers text-[24px] text-ink shadow-[4px_4px_0_#141414] book:absolute book:left-[-34px] book:top-[-14px] book:mb-0 book:text-[30px]">
                  PROMOTED!
                </div>
                <button
                  type="button"
                  onClick={() => onSelectNode(2)}
                  className="relative block cursor-pointer border-0 bg-transparent p-0 text-left book:mt-[26px]"
                >
                  <span className="mb-2 flex items-center gap-2">
                    <span
                      className={`block h-[34px] w-[34px] border-4 border-ink shadow-[0_0_0_4px_#FFC93C] ${node === 2 ? "bg-yellow" : "bg-cream"}`}
                    />
                    <span className="animate-[po-here_1s_steps(2)_infinite] font-press text-[8px] text-red">
                      ▼ YOU ARE HERE
                    </span>
                  </span>
                  <span className="block font-press text-[9px] text-ink">NODE 03 — PRESENT</span>
                  <span className="block font-bangers text-[24px] leading-none text-ink">
                    SWFL — AUTOMATION ENGINEER
                  </span>
                </button>
              </div>

              <div className="relative z-[2] border-4 border-ink bg-ink px-4 py-3 pb-3.5 shadow-[7px_7px_0_#FFC93C] book:ml-[18px]">
                <div className="flex items-start gap-1">
                  <div
                    className="font-bangers text-[72px] leading-[0.74] text-yellow book:text-[104px]"
                    style={{ textShadow: "5px 5px 0 #E8453C" }}
                  >
                    ~75%
                  </div>
                  <div className="font-bangers text-[46px] leading-none text-yellow">↓</div>
                </div>
                <div className="mt-2 font-press text-[10px] leading-[1.5] text-cream">
                  MANUAL DISPATCH
                  <br />
                  WORKLOAD REMOVED
                </div>
                <div className="mt-2 text-[19px] leading-[1.2] text-cream opacity-[0.78]">
                  via a two-stage preview-and-confirm send pipeline safeguarding bulk messaging
                  accuracy
                </div>
              </div>
            </div>

            <div className="mt-2.5 min-h-[70px] border-4 border-ink bg-cream px-3.5 py-[9px]">
              <div className="mb-1.5 font-press text-[10px] text-red">{active.title}</div>
              <div className="mb-2 font-press text-[9px] text-ink opacity-70">{active.meta}</div>
              <div className="text-[19px] leading-[1.25] text-ink">{active.body}</div>
              {active.list && (
                <ul className="m-0 mt-1.5 list-disc pl-[18px] text-[19px] leading-[1.22] text-ink">
                  <li>
                    <strong>Cortex Automation</strong> — Playwright browser-automation suite
                    tracking pre-trip vehicle inspections and driver data across a paginated
                    internal logistics platform
                  </li>
                  <li>
                    <strong>SWFLBot</strong> — WhatsApp Business Cloud API tool with a custom GUI,
                    shipped as a standalone Windows executable, 150+ test suite
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div data-cols="1.25fr 0.75fr" className="grid grid-cols-[1.25fr_0.75fr] items-stretch gap-[22px]">
            {/* Band 2 — Built So Far */}
            <div className="relative border-4 border-ink bg-tan px-[18px] py-4">
              <PanelTag className="left-4 top-[-14px]">BAND 2 — BUILT SO FAR</PanelTag>
              <div className="mt-2 grid grid-cols-1 gap-3.5 book:grid-cols-2">
                <div className="flex flex-col border-4 border-ink bg-cream shadow-[6px_6px_0_#141414] transition-transform duration-150 hover:-translate-y-1 hover:-rotate-2 hover:shadow-[10px_10px_0_#141414]">
                  <div className="flex items-center justify-between border-b-4 border-ink bg-red px-2.5 py-2">
                    <span className="font-bangers text-[26px] leading-none text-cream">UNITOK</span>
                    <a
                      href="https://github.com/Ina-06"
                      target="_blank"
                      rel="noopener"
                      aria-label="UniTok on GitHub"
                      className="block h-5 w-5 border-[3px] border-cream"
                    />
                  </div>
                  <div className="flex-1 px-2.5 py-2">
                    <div className="mb-2 border-4 border-ink bg-ink p-1 pb-[5px] shadow-[4px_4px_0_#2BB3C0]">
                      <div className="relative aspect-[872/492] w-full overflow-hidden bg-void-2">
                        <Image
                          src="/assets/p3-unitok-01.jpg"
                          alt="The UniTok landing page: a starry dark hero reading “Find it. Rate it. UniTok it.” with Explore Reviews and Write a Review buttons, next to the UniTok logo badge"
                          fill
                          sizes="(max-width: 900px) 100vw, 500px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-[5px] pt-[5px]">
                        <span aria-hidden="true" className="h-1 w-[22px] bg-teal" />
                        <span className="font-press text-[6px] text-teal">LIVE BUILD</span>
                        <span aria-hidden="true" className="h-1 w-[22px] bg-teal" />
                      </div>
                    </div>
                    <div className="mb-1.5 font-press text-[8px] text-ink opacity-70">
                      SOCIAL PLATFORM FOR UNI STUDENTS
                    </div>
                    <div className="text-[18px] leading-[1.2] text-ink">
                      Reels-style feed and discussion forums for campus life. Next.js/React front
                      end on Python services, built with a team on Git with code review.
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-[5px] border-t-4 border-ink bg-ink p-[7px]">
                    {["NEXT.JS", "REACT", "TYPESCRIPT", "PYTHON"].map((tag) => (
                      <span key={tag} className="font-press text-[7px] text-teal">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col border-4 border-ink bg-cream shadow-[6px_6px_0_#141414] transition-transform duration-150 hover:-translate-y-1 hover:rotate-2 hover:shadow-[10px_10px_0_#141414]">
                  <div className="flex items-center justify-between border-b-4 border-ink bg-teal px-2.5 py-2">
                    <span className="font-bangers text-[26px] leading-none text-ink">
                      CONNECT FOUR AI
                    </span>
                    <a
                      href="https://github.com/Ina-06"
                      target="_blank"
                      rel="noopener"
                      aria-label="Connect Four AI on GitHub"
                      className="block h-5 w-5 border-[3px] border-ink"
                    />
                  </div>
                  <div className="flex-1 px-2.5 py-[9px]">
                    <div className="mb-1.5 font-press text-[8px] text-ink opacity-70">
                      MULTITHREADED GAME ENGINE
                    </div>
                    <div className="text-[19px] leading-[1.25] text-ink">
                      Game-tree search parallelized across concurrent worker threads, Minimax with
                      Alpha-Beta pruning for deep real-time move evaluation, memory management
                      optimized for high-performance traversal.
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-[5px] border-t-4 border-ink bg-ink p-[7px]">
                    {["C", "CONCURRENCY", "ALGORITHMS"].map((tag) => (
                      <span key={tag} className="font-press text-[7px] text-yellow">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[18px]">
              {/* Next Objectives */}
              <div className="relative border-4 border-ink bg-tan px-4 py-[18px] pb-3.5">
                <PanelTag className="left-3.5 top-[-14px]">NEXT OBJECTIVES</PanelTag>
                <ul className="m-0 mt-1.5 flex list-none flex-col gap-3 p-0">
                  {[
                    "Land a software engineering internship",
                    "Work in frontend design & frontend development",
                    "Ship something real that people actually use",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 h-[18px] w-[18px] flex-none border-4 border-ink bg-cream"
                      />
                      <span className="text-[20px] leading-[1.2] text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Endgame */}
              <div className="relative flex flex-col justify-center overflow-hidden border-4 border-ink bg-ink px-3 py-3.5 shadow-[6px_6px_0_#E8453C]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-90"
                  style={{
                    backgroundImage:
                      "repeating-conic-gradient(from 0deg at 50% 50%, #1d1a3a 0deg 9deg, #141414 9deg 18deg)",
                  }}
                />
                <PanelTag className="left-3.5 top-[-14px] z-[2] bg-red">ENDGAME</PanelTag>
                <div className="relative z-[2] text-center">
                  <div className="mb-2 animate-[po-blink_1.2s_steps(1)_infinite] font-press text-[10px] text-yellow">
                    FINAL BOSS
                  </div>
                  <div
                    className="font-bangers text-[36px] leading-[0.95] text-cream"
                    style={{ textShadow: "4px 4px 0 #E8453C" }}
                  >
                    BREAK INTO BIG TECH.
                  </div>
                  <div
                    className="mt-1 font-bangers text-[36px] leading-[0.95] text-yellow"
                    style={{ textShadow: "4px 4px 0 #141414" }}
                  >
                    THEN: CYBER SECURITY.
                  </div>
                  <div className="mt-2 font-press text-[9px] text-teal">GO WHERE THE STAKES ARE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageBack />
    </section>
  );
}

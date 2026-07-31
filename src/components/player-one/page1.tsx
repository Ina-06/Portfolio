import type { RefObject } from "react";
import Image from "next/image";
import { PanelTag } from "./panel-tag";
import { PageBack, DotOverlay } from "./page-back";

const SIDE_QUESTS = [
  { label: "SWIMMING", note: "laps clear my head", swatch: "bg-teal shadow-[inset_0_-8px_0_#F2E7CF]" },
  { label: "BASKETBALL", note: "loud, fast, fun", swatch: "bg-red shadow-[inset_0_0_0_3px_#F2E7CF]" },
  {
    label: "FOOTBALL",
    note: "weekend fixture",
    swatch: "",
    style: {
      backgroundImage: "repeating-linear-gradient(90deg, #F2E7CF 0 5px, #141414 5px 10px)",
    },
  },
  { label: "TUTORING", note: "explaining sharpens it", swatch: "bg-yellow shadow-[inset_0_-6px_0_#141414]" },
  {
    label: "BILLIARDS",
    note: "angles, but physical",
    swatch: "bg-ink shadow-[inset_0_0_0_4px_#F2E7CF,inset_-6px_-6px_0_6px_#FFC93C]",
  },
];

const PARTY_MEMBERS = [
  {
    src: "/assets/p1-friends-01.jpg",
    alt: "Nine friends packed into a room for a group selfie, most in cream and white shirts, Ibrahim front and centre in aviator sunglasses",
    caption: "the whole party",
    rotate: "-rotate-[5deg] hover:rotate-0",
    tabTint: "rgba(255,201,60,0.55)",
    tabRotate: "-rotate-[6deg]",
  },
  {
    src: "/assets/p1-friends-02.jpg",
    alt: "Black-and-white shot of Ibrahim at a whiteboard in Nicely Hall at 4:03 AM, mid-way through a multivariable calculus tangent-plane derivation",
    caption: "4:03 am, nicely hall",
    rotate: "rotate-4 hover:rotate-0",
    tabTint: "rgba(43,179,192,0.5)",
    tabRotate: "rotate-6",
  },
  {
    src: "/assets/p1-friends-03.jpg",
    alt: "Ibrahim in a hoodie playing chess across a table from a friend in a campus study room, laptops and water bottles all around them",
    caption: "chess between problem sets",
    rotate: "rotate-3 hover:rotate-0",
    tabTint: "rgba(232,69,60,0.45)",
    tabRotate: "-rotate-4",
  },
  {
    src: "/assets/p1-friends-04.jpg",
    alt: "A friend with birthday cake smeared across his face tilting his head back, while two others stand either side of him laughing",
    caption: "no context",
    rotate: "-rotate-4 hover:rotate-0",
    tabTint: "rgba(255,201,60,0.5)",
    tabRotate: "rotate-[5deg]",
  },
];

export function Page1({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  return (
    <section
      ref={sectionRef}
      className="absolute inset-0 z-[4] [transform-style:preserve-3d] [transform-origin:0%_50%] will-change-transform"
    >
      <div className="absolute inset-0 z-[2] overflow-hidden border-4 border-ink bg-cream shadow-[6px_6px_0_#141414] [backface-visibility:hidden]">
        <DotOverlay />

        <div className="relative grid h-full grid-rows-[auto_1fr] gap-[18px] py-[26px] px-[30px]">
          <div className="flex min-h-[130px] items-end justify-between border-b-4 border-ink pb-2.5 pl-[172px]">
            <h1 className="m-0 font-bangers text-[46px] tracking-wide text-ink">WHERE I AM NOW</h1>
            <div className="font-press text-[10px] text-ink opacity-65">
              PLAYER ONE — IBRAHIM ARAJI · PAGE 01
            </div>
          </div>

          <div
            data-cols="1fr 1fr"
            data-rows="minmax(0, 1fr)"
            className="grid min-h-0 grid-cols-[1fr_1fr] auto-rows-[minmax(0,1fr)] gap-[26px_30px]"
          >
            {/* Panel 01 — Level: University */}
            <div className="relative -rotate-1 border-4 border-ink bg-tan shadow-[6px_6px_0_#141414]">
              <PanelTag className="right-3.5 top-[-14px] z-[3]">PANEL 01 — LEVEL: UNIVERSITY</PanelTag>
              <Image
                src="/assets/p1-uni-01.jpg"
                alt="Looking down over the American University of Beirut campus — red-tiled roofs, palms and cypress trees stepping down to the Mediterranean"
                fill
                sizes="(max-width: 900px) 100vw, 700px"
                className="object-cover opacity-55"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-[rgba(237,224,196,0.44)]" />
              <div className="relative p-[22px] px-[18px] pb-4">
                <div
                  className="mb-1.5 font-bangers text-[34px] leading-none text-red"
                  style={{ WebkitTextStroke: "1px #141414" }}
                >
                  LEVEL: UNIVERSITY
                </div>
                <p className="m-0 mb-2.5 text-[20px] leading-[1.28] text-ink">
                  Third year, full course load, still shipping side projects at 2am. Currently
                  grinding CS at AUB.
                </p>
                <div className="border-4 border-ink bg-cream px-3.5 py-2.5 text-[19px] leading-[1.32] text-ink">
                  <div>
                    MAJOR ......... <strong>COMPUTER SCIENCE</strong>
                  </div>
                  <div>
                    SCHOOL ........ <strong>AMERICAN UNIVERSITY OF BEIRUT</strong>
                  </div>
                  <div>
                    CLASS OF ...... <strong>SPRING 2027</strong>
                  </div>
                  <div className="mt-1">START ......... SEPT 2023</div>
                </div>
                <div className="my-2.5 font-press text-[9px] text-ink">FOCUS — EQUIPPED SKILLS</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 text-[19px] text-ink">
                    <span aria-hidden="true" className="h-3.5 w-3.5 flex-none border-[3px] border-ink bg-teal" />
                    FRONTEND DESIGN / UI-UX
                  </div>
                  <div className="flex items-center gap-2 text-[19px] text-ink">
                    <span
                      aria-hidden="true"
                      className="h-3.5 w-3.5 flex-none border-[3px] border-ink bg-teal shadow-[inset_0_0_0_2px_#F2E7CF]"
                    />
                    FULL-STACK ENGINEERING
                  </div>
                  <div className="flex items-center gap-2 text-[19px] text-ink">
                    <span aria-hidden="true" className="h-3.5 w-3.5 flex-none rotate-45 border-[3px] border-ink bg-teal" />
                    DEPLOYMENT ENGINEERING
                  </div>
                  <div className="flex items-center gap-2 text-[19px] text-ink">
                    <span
                      aria-hidden="true"
                      className="h-3.5 w-3.5 flex-none border-[3px] border-ink"
                      style={{
                        backgroundImage: "repeating-linear-gradient(45deg, #2BB3C0 0 3px, #141414 3px 6px)",
                      }}
                    />
                    SYSTEMS ENGINEERING
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 02 — Side Quests */}
            <div className="relative rotate-[0.8deg] border-4 border-ink bg-tan p-[22px] px-[18px] pb-4">
              <PanelTag className="left-3.5 top-[-14px]">PANEL 02 — SIDE QUESTS</PanelTag>
              <div
                className="mb-3 font-bangers text-[34px] leading-none text-teal"
                style={{ WebkitTextStroke: "1px #141414" }}
              >
                SIDE QUESTS
              </div>
              <div className="grid grid-cols-3 gap-3">
                {SIDE_QUESTS.map((q) => (
                  <div
                    key={q.label}
                    className="border-4 border-ink bg-cream px-2 py-3 text-center shadow-[5px_5px_0_#141414] hover:animate-[po-jiggle_0.18s_steps(2)_2_alternate]"
                  >
                    <span
                      aria-hidden="true"
                      className={`mx-auto mb-2 block h-[22px] w-[22px] border-[3px] border-ink ${q.swatch}`}
                      style={q.style}
                    />
                    <div className="font-press text-[9px] text-ink">{q.label}</div>
                    <div className="mt-1 text-[17px] leading-[1.1] text-ink opacity-75">{q.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel 03 — Achievements */}
            <div className="relative rotate-[0.6deg] border-4 border-ink bg-tan p-[22px] px-[18px] pb-4">
              <PanelTag className="left-3.5 top-[-14px]">PANEL 03 — ACHIEVEMENTS</PanelTag>
              <div className="absolute right-3 top-3 rotate-6 border-4 border-ink bg-yellow px-2 py-1.5 text-center shadow-[4px_4px_0_#141414]">
                <div className="font-bangers text-[26px] leading-[0.9] text-ink">2×</div>
                <div className="font-press text-[7px] text-ink">STREAK</div>
              </div>
              <div
                className="mb-3.5 max-w-[74%] font-bangers text-[34px] leading-none text-yellow"
                style={{ WebkitTextStroke: "1.5px #141414" }}
              >
                ACHIEVEMENTS UNLOCKED
              </div>

              <a
                href="/certs/deans-honor-2025-26.pdf"
                target="_blank"
                rel="noopener"
                className="mb-3.5 flex items-center gap-3 border-4 border-ink bg-cream p-3 text-ink shadow-[6px_6px_0_#141414] hover:animate-[po-glow_0.9s_steps(2)_infinite]"
              >
                <span
                  aria-hidden="true"
                  className="h-[26px] w-[26px] flex-none border-[3px] border-ink bg-yellow [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]"
                />
                <span>
                  <span className="block font-press text-[11px] leading-[1.4]">DEAN&apos;S HONOR LIST</span>
                  <span className="block text-[18px] opacity-80">
                    SPRING 2025–26 · AUB, Faculty of Arts and Sciences
                  </span>
                </span>
                <span className="ml-auto font-press text-[8px] text-teal">PDF ▶</span>
              </a>
              <div aria-hidden="true" className="mb-3.5 h-[3px] bg-ink opacity-35" />
              <a
                href="/certs/deans-honor-2024-25.pdf"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 border-4 border-ink bg-cream p-3 text-ink shadow-[6px_6px_0_#141414] hover:animate-[po-glow_0.9s_steps(2)_infinite]"
              >
                <span
                  aria-hidden="true"
                  className="h-[26px] w-[26px] flex-none border-[3px] border-ink bg-yellow [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]"
                />
                <span>
                  <span className="block font-press text-[11px] leading-[1.4]">DEAN&apos;S HONOR LIST</span>
                  <span className="block text-[18px] opacity-80">
                    SPRING 2024–25 · AUB, Faculty of Arts and Sciences
                  </span>
                </span>
                <span className="ml-auto font-press text-[8px] text-teal">PDF ▶</span>
              </a>
              <div className="mt-3 text-[18px] text-ink opacity-70">Back-to-back. Not a fluke.</div>
            </div>

            {/* Panel 04 — Party Members */}
            <div className="relative -rotate-[0.7deg] border-4 border-ink bg-tan p-[22px] px-3.5 pb-3.5">
              <PanelTag className="left-3.5 top-[-14px]">PANEL 04 — PARTY MEMBERS</PanelTag>
              <div className="mt-1.5 grid grid-cols-[126px_126px] justify-center gap-2.5">
                {PARTY_MEMBERS.map((m) => (
                  <div
                    key={m.src}
                    className={`relative border-4 border-ink bg-cream p-1.5 pb-0 shadow-[5px_5px_0_#141414] transition-transform duration-150 ${m.rotate} hover:z-20 hover:-translate-y-2.5 hover:scale-[1.06] hover:shadow-[9px_9px_0_#141414]`}
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute left-1/2 top-[-10px] h-[18px] w-[46px] -translate-x-1/2 border-2 border-[rgba(20,20,20,0.35)] ${m.tabRotate}`}
                      style={{ background: m.tabTint }}
                    />
                    <div className="relative aspect-[4/5] w-full overflow-hidden border-[3px] border-ink bg-tan-dark">
                      <Image src={m.src} alt={m.alt} fill sizes="126px" className="object-cover" />
                    </div>
                    <div className="py-1.5 pb-1.5 text-center font-bangers text-[17px] text-ink">
                      {m.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageBack />
    </section>
  );
}

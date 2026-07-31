import type { RefObject } from "react";
import Image from "next/image";
import { PanelTag } from "./panel-tag";
import { PageBack, DotOverlay } from "./page-back";

const LIKES = [
  "Automating a job so nobody does it twice",
  "The exact second a bug makes sense",
  "Taking things apart to see why",
  "Preview-and-confirm before anything sends",
  "Teaching something until it clicks",
  "Threads that actually finish",
];

const DISLIKES = [
  "“It works on my machine”",
  "Doing the same task by hand twice",
  "Tutorials that skip the hard part",
  "Forms with 47 fields",
  "Layouts that shatter below 400px",
  "Race conditions",
];

const LIFE_PHOTOS = [
  {
    src: "/assets/p2-life-01.jpg",
    alt: "Ibrahim mid-pull-up on a gym bar in all black with over-ear headphones on, feet clear of the floor",
    caption: "headphones on",
    rotate: "-rotate-4 hover:rotate-0",
    tabTint: "rgba(255,201,60,0.55)",
    tabRotate: "-rotate-6",
  },
  {
    src: "/assets/p2-life-02.jpg",
    alt: "Sunset from a Lebanese mountain ridge: a hard orange band on the horizon above layered dark hills and haze",
    caption: "sunset from the ridge",
    rotate: "rotate-4 hover:rotate-0",
    tabTint: "rgba(43,179,192,0.5)",
    tabRotate: "rotate-[7deg]",
  },
  {
    src: "/assets/p2-life-03.jpg",
    alt: "Ibrahim and three friends arm in arm in deep snow and thick fog in front of a weathered roadside billboard",
    caption: "zero visibility",
    rotate: "rotate-3 hover:rotate-0",
    tabTint: "rgba(232,69,60,0.45)",
    tabRotate: "rotate-4",
  },
  {
    src: "/assets/p2-life-04.jpg",
    alt: "A glass table covered in Lebanese mezze — spiced potatoes, sujuk, hummus, fatteh and stuffed vine leaves, with a bottle of Pepsi being poured",
    caption: "the spread",
    rotate: "-rotate-3 hover:rotate-0",
    tabTint: "rgba(255,201,60,0.5)",
    tabRotate: "-rotate-3",
  },
];

export function Page2({
  sectionRef,
  shadeRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  shadeRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <section
      ref={sectionRef}
      className="absolute inset-0 z-[3] [transform-style:preserve-3d] [transform-origin:0%_50%] will-change-transform"
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

        <div className="relative grid h-full grid-rows-[auto_1fr] gap-[18px] py-5 px-4 book:gap-[18px] book:py-[26px] book:px-[30px]">
          <div className="flex flex-col gap-2 border-b-4 border-ink pb-3 book:min-h-[130px] book:flex-row book:items-end book:justify-between book:gap-0 book:pb-2.5 book:pl-[172px]">
            <h2 className="m-0 font-bangers text-[32px] tracking-wide text-ink book:text-[46px]">
              ORIGIN STORY
            </h2>
            <div className="font-press text-[10px] text-ink opacity-65">
              PLAYER SELECT — HOW THIS STARTED
            </div>
          </div>

          <div
            data-cols="1.12fr 0.88fr"
            data-rows="minmax(0, 1fr)"
            className="grid min-h-0 grid-cols-[1.12fr_0.88fr] auto-rows-[minmax(0,1fr)] gap-5 book:gap-[26px_30px]"
          >
            {/* Panel 05 — Save Files */}
            <div className="relative rotate-[-0.8deg] border-4 border-ink bg-tan p-[22px] px-4 pb-4">
              <PanelTag className="right-3.5 top-[-14px]">PANEL 05 — SAVE FILES</PanelTag>
              <div className="flex flex-col items-center gap-6 px-0 pb-1 pt-4 book:flex-row book:items-start book:justify-center book:gap-0">
                <div className="relative z-[2] w-[180px] rotate-0 border-4 border-ink bg-cream p-2 pb-0 shadow-[7px_7px_0_#141414] transition-transform duration-150 hover:z-20 hover:-translate-y-3.5 hover:rotate-0 hover:scale-[1.06] hover:shadow-[12px_12px_0_#141414] book:w-[222px] book:-rotate-[8deg]">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-[-13px] h-6 w-[62px] -translate-x-1/2 -rotate-[5deg] border-2 border-[rgba(20,20,20,0.35)]"
                    style={{ background: "rgba(255,201,60,0.55)" }}
                  />
                  <div className="relative aspect-[4/5] w-full overflow-hidden border-[3px] border-ink bg-tan-dark">
                    <Image
                      src="/assets/p2-origin-02.jpg"
                      alt="Ibrahim as a boy in a little-league baseball uniform, glove raised and blowing a bubble with his gum while waiting in the field at golden hour"
                      fill
                      sizes="(max-width: 900px) 180px, 222px"
                      className="object-cover"
                    />
                  </div>
                  <div className="-rotate-[1.5deg] py-1.5 pb-2 text-center font-bangers text-[21px] text-ink">
                    bubblegum in the outfield
                  </div>
                </div>

                <div className="relative z-[1] w-[180px] rotate-0 border-4 border-ink bg-cream p-2 pb-0 shadow-[7px_7px_0_#141414] transition-transform duration-150 hover:z-20 hover:translate-y-5 hover:rotate-0 hover:scale-[1.06] hover:shadow-[12px_12px_0_#141414] book:ml-[-46px] book:w-[222px] book:translate-y-[34px] book:rotate-[7deg]">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-[-13px] h-6 w-[62px] -translate-x-1/2 rotate-[6deg] border-2 border-[rgba(20,20,20,0.35)]"
                    style={{ background: "rgba(43,179,192,0.5)" }}
                  />
                  <div className="relative aspect-[4/5] w-full overflow-hidden border-[3px] border-ink bg-tan-dark">
                    <Image
                      src="/assets/p2-origin-01.jpg"
                      alt="Ibrahim as a boy in a taekwondo gi and black belt, arms flung wide with a stack of competition medals around his neck and one held in his teeth"
                      fill
                      sizes="(max-width: 900px) 180px, 222px"
                      className="object-cover"
                    />
                  </div>
                  <div className="rotate-1 py-1.5 pb-2 text-center font-bangers text-[21px] text-ink">
                    every medal at once
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 06 — Origin Story */}
            <div className="relative overflow-hidden rotate-[0.7deg] border-4 border-ink bg-tan p-5 px-[18px] pb-2">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(43,179,192,0.16) 0 6px, transparent 6px 14px)",
                }}
              />
              <PanelTag className="left-3.5 top-[-14px] z-[2]">PANEL 06 — ORIGIN STORY</PanelTag>
              <div className="relative z-[2] flex h-full flex-col gap-2.5">
                <div className="border-4 border-ink bg-yellow px-3 py-2.5 shadow-[5px_5px_0_#141414]">
                  <div className="font-press text-[9px] leading-[1.7] text-ink">
                    PLAYER SELECT: IBRAHIM ARAJI.
                    <br />
                    CANADIAN / LEBANESE. CS AT AUB.
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-[19px] leading-[1.22] text-ink">
                  <p className="m-0">
                    Started at seven. Not with a course — with a machine I wanted to understand,
                    and then took apart to be sure.
                  </p>
                  <p className="m-0">
                    By school I was the kid volunteering in the IT room: running cable, standing
                    up networks, fixing the things nobody else wanted to open.
                  </p>
                  <p className="m-0">
                    Somewhere in there a switch got stuck in the on position. Everything became a
                    problem with a solution buried in it somewhere. Turning that into a compulsion
                    is the reason I can usually find it.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    <span className="border-4 border-ink bg-teal px-2.5 py-[7px] font-press text-[10px] text-ink shadow-[4px_4px_0_#141414]">
                      العربية
                    </span>
                    <span className="border-4 border-ink bg-teal px-2.5 py-[7px] font-press text-[10px] text-ink shadow-[4px_4px_0_#141414]">
                      ENGLISH
                    </span>
                    <span className="border-4 border-ink bg-teal px-2.5 py-[7px] font-press text-[10px] text-ink shadow-[4px_4px_0_#141414]">
                      FRANÇAIS
                    </span>
                  </div>
                  <div className="mt-1.5 font-press text-[8px] text-ink opacity-70">
                    TRILINGUAL — 3 LANGUAGE PACKS EQUIPPED
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 07 — Stats & Preferences */}
            <div className="relative rotate-[-0.5deg] border-4 border-ink bg-tan py-[22px] pb-3.5">
              <PanelTag className="left-3.5 top-[-14px]">PANEL 07 — STATS &amp; PREFERENCES</PanelTag>
              <div className="grid h-full grid-cols-1 book:grid-cols-[1fr_4px_1fr]">
                <div className="px-3.5 py-2">
                  <div
                    className="mb-2 font-bangers text-[28px] text-teal"
                    style={{ WebkitTextStroke: "1px #141414" }}
                  >
                    LIKES ✓
                  </div>
                  <ul className="m-0 flex list-none flex-col gap-[7px] p-0 text-[19px] leading-[1.15] text-ink">
                    {LIKES.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-[5px] h-2.5 w-2.5 flex-none border-2 border-ink bg-teal"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div aria-hidden="true" className="my-3 h-[3px] bg-ink book:my-0 book:h-auto book:w-[4px]" />
                <div className="px-3.5 py-2">
                  <div
                    className="mb-2 font-bangers text-[28px] text-red"
                    style={{ WebkitTextStroke: "1px #141414" }}
                  >
                    DISLIKES ✗
                  </div>
                  <ul className="m-0 flex list-none flex-col gap-[7px] p-0 text-[19px] leading-[1.15] text-ink">
                    {DISLIKES.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-[5px] h-2.5 w-2.5 flex-none border-2 border-ink bg-red"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Panel 08 — Off The Clock */}
            <div className="relative rotate-1 border-4 border-ink bg-tan p-[22px] px-3.5 pb-3.5">
              <PanelTag className="left-3.5 top-[-14px]">PANEL 08 — OFF THE CLOCK</PanelTag>
              <div className="mt-2 grid grid-cols-2 justify-center gap-2.5 book:grid-cols-[126px_126px]">
                {LIFE_PHOTOS.map((m) => (
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
                      <Image
                        src={m.src}
                        alt={m.alt}
                        fill
                        sizes="(max-width: 900px) 45vw, 126px"
                        className="object-cover"
                      />
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

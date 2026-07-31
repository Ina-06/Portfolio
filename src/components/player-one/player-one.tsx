"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Sprite } from "./sprite";
import { Intro } from "./intro";
import { Avatar } from "./avatar";
import { Hud } from "./hud";
import { Page1 } from "./page1";
import { Page2 } from "./page2";
import { Page3 } from "./page3";
import { Contact } from "./contact";

type FormState = "idle" | "sending" | "done";

export function PlayerOne() {
  const [intro, setIntro] = useState(true);
  const [pow, setPow] = useState(false);
  const [wave, setWave] = useState(false);
  const [frame, setFrame] = useState(0);
  const [node, setNode] = useState(2);
  const [form, setForm] = useState<FormState>("idle");
  const [formError, setFormError] = useState("");
  const [transmitDots, setTransmitDots] = useState(0);

  const spacerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const scalerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const page1Ref = useRef<HTMLElement>(null);
  const page2Ref = useRef<HTMLElement>(null);
  const page3Ref = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const shade2Ref = useRef<HTMLDivElement>(null);
  const shade3Ref = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLElement>(null);
  const hudLabelRef = useRef<HTMLSpanElement>(null);
  const dot0Ref = useRef<HTMLButtonElement>(null);
  const dot1Ref = useRef<HTMLButtonElement>(null);
  const dot2Ref = useRef<HTMLButtonElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  const honeyRef = useRef<HTMLInputElement>(null);

  const reducedRef = useRef(false);
  const frameTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const waveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dotTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number | null>(null);

  const isFlat = useCallback(() => {
    return (typeof window !== "undefined" && window.innerWidth < 900) || reducedRef.current;
  }, []);

  const applyMode = useCallback(() => {
    const flat = isFlat();
    const pages = [page1Ref.current, page2Ref.current, page3Ref.current].filter(
      Boolean,
    ) as HTMLElement[];

    document.documentElement.style.scrollSnapType = flat ? "none" : "y mandatory";

    const grids = stageRef.current
      ? stageRef.current.querySelectorAll<HTMLElement>("[data-cols]")
      : [];
    grids.forEach((gridEl) => {
      gridEl.style.gridTemplateColumns = flat ? "1fr" : gridEl.getAttribute("data-cols") || "";
      if (gridEl.hasAttribute("data-rows")) {
        gridEl.style.gridAutoRows = flat ? "auto" : gridEl.getAttribute("data-rows") || "";
      }
    });

    if (spacerRef.current) spacerRef.current.style.display = flat ? "none" : "block";

    if (flat) {
      if (stageRef.current) {
        stageRef.current.style.position = "static";
        stageRef.current.style.display = "block";
        stageRef.current.style.overflow = "visible";
      }
      if (scalerRef.current) {
        scalerRef.current.style.transform = "none";
        scalerRef.current.style.width = "100%";
        scalerRef.current.style.height = "auto";
        scalerRef.current.style.padding = "96px 12px 12px";
      }
      if (bookRef.current) {
        bookRef.current.style.position = "static";
        bookRef.current.style.perspective = "none";
        bookRef.current.style.display = "flex";
        bookRef.current.style.flexDirection = "column";
        bookRef.current.style.gap = "28px";
      }
      [...pages, contactRef.current].forEach((p, i) => {
        if (!p) return;
        p.style.position = "relative";
        p.style.inset = "auto";
        p.style.transform = "none";
        p.style.height = "auto";
        p.style.order = String(i + 1);
        const front = p.firstElementChild as HTMLElement | null;
        if (front && p !== contactRef.current) {
          front.style.position = "relative";
          front.style.inset = "auto";
          front.style.animation = "po-up 0.4s ease-out both";
        }
        const back = p.lastElementChild as HTMLElement | null;
        if (back && p !== contactRef.current) back.style.display = "none";
      });
      if (contactRef.current) contactRef.current.style.minHeight = "620px";
      if (avatarRef.current) {
        avatarRef.current.style.position = "fixed";
        avatarRef.current.style.top = "10px";
        avatarRef.current.style.left = "10px";
        avatarRef.current.style.transform = "scale(0.55)";
        avatarRef.current.style.transformOrigin = "0 0";
      }
      if (hudRef.current) {
        hudRef.current.style.position = "fixed";
        hudRef.current.style.top = "10px";
        hudRef.current.style.right = "10px";
        hudRef.current.style.transform = "scale(0.8)";
        hudRef.current.style.transformOrigin = "100% 0";
      }
      if (hintRef.current) hintRef.current.style.display = "none";
    } else {
      if (stageRef.current) {
        stageRef.current.style.position = "fixed";
        stageRef.current.style.display = "flex";
        stageRef.current.style.overflow = "hidden";
      }
      if (scalerRef.current) {
        scalerRef.current.style.width = "1440px";
        scalerRef.current.style.height = "1120px";
        scalerRef.current.style.padding = "0";
        const s = Math.min(
          (window.innerWidth - 16) / 1440,
          (window.innerHeight - 12) / 1120,
        );
        scalerRef.current.style.transform = `scale(${Math.max(0.4, s)})`;
      }
      if (bookRef.current) {
        bookRef.current.style.position = "absolute";
        bookRef.current.style.perspective = "2000px";
        bookRef.current.style.display = "block";
      }
      [...pages, contactRef.current].forEach((p) => {
        if (!p) return;
        p.style.position = "absolute";
        p.style.inset = "0";
        p.style.height = "";
        const front = p.firstElementChild as HTMLElement | null;
        if (front && p !== contactRef.current) {
          front.style.position = "absolute";
          front.style.inset = "0";
          front.style.animation = "none";
        }
        const back = p.lastElementChild as HTMLElement | null;
        if (back && p !== contactRef.current) back.style.display = "block";
      });
      if (avatarRef.current) {
        avatarRef.current.style.position = "absolute";
        avatarRef.current.style.top = "22px";
        avatarRef.current.style.left = "26px";
        avatarRef.current.style.transform = "none";
      }
      if (hudRef.current) {
        hudRef.current.style.position = "absolute";
        hudRef.current.style.top = "26px";
        hudRef.current.style.right = "26px";
        hudRef.current.style.transform = "none";
      }
      if (hintRef.current) hintRef.current.style.display = "block";
    }
  }, [isFlat]);

  const paint = useCallback(() => {
    if (isFlat()) return;
    const vh = window.innerHeight || 1;
    const p = Math.max(0, Math.min(3, window.scrollY / vh));
    const pages = [page1Ref.current, page2Ref.current, page3Ref.current];
    const shades = [null, shade2Ref.current, shade3Ref.current];

    for (let i = 0; i < 3; i++) {
      const el = pages[i];
      if (!el) continue;
      const local = Math.max(0, Math.min(1, p - i));
      el.style.transform = `rotateY(${-180 * local}deg)`;
      el.style.pointerEvents = local > 0.02 ? "none" : "auto";
      el.style.visibility = local >= 1 ? "hidden" : "visible";
      const sh = shades[i];
      if (sh) {
        const prev = Math.max(0, Math.min(1, p - (i - 1)));
        sh.style.opacity = String(Math.sin(prev * Math.PI) * 0.6);
        sh.style.transform = `translateX(${prev * 40 - 20}%)`;
      }
    }

    const idx = Math.min(3, Math.round(p));
    if (hudLabelRef.current) {
      hudLabelRef.current.textContent = idx >= 3 ? "CONTACT SCREEN" : `PAGE 0${idx + 1} / 03`;
    }
    [dot0Ref.current, dot1Ref.current, dot2Ref.current].forEach((d, i) => {
      if (d) d.style.background = i <= Math.min(2, idx) ? "#FFC93C" : "transparent";
    });
    if (hintRef.current) hintRef.current.style.opacity = p > 0.03 ? "0" : "1";
  }, [isFlat]);

  const jump = useCallback(
    (i: number) => {
      if (isFlat()) {
        const targets = [page1Ref.current, page2Ref.current, page3Ref.current, contactRef.current];
        const t = targets[i];
        if (t) {
          window.scrollTo({
            top: t.getBoundingClientRect().top + window.scrollY - 70,
            behavior: "smooth",
          });
        }
        return;
      }
      window.scrollTo({ top: i * window.innerHeight, behavior: "smooth" });
    },
    [isFlat],
  );

  const stepFrames = useCallback((target: number) => {
    if (frameTimerRef.current) clearInterval(frameTimerRef.current);
    if (reducedRef.current) {
      setFrame(target);
      return;
    }
    frameTimerRef.current = setInterval(() => {
      setFrame((f) => {
        if (f === target) {
          if (frameTimerRef.current) clearInterval(frameTimerRef.current);
          return f;
        }
        return f < target ? f + 1 : f - 1;
      });
    }, 105);
  }, []);

  const waveOff = useCallback(() => {
    stepFrames(0);
    setWave(false);
  }, [stepFrames]);

  const waveOn = useCallback(() => {
    stepFrames(2);
    setWave(true);
  }, [stepFrames]);

  const wavePulse = useCallback(() => {
    waveOn();
    if (waveTimerRef.current) clearTimeout(waveTimerRef.current);
    waveTimerRef.current = setTimeout(waveOff, 1700);
  }, [waveOn, waveOff]);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onResize = () => {
      applyMode();
      paint();
    };
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        paint();
      });
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    applyMode();
    paint();

    let seen = false;
    try {
      seen = sessionStorage.getItem("playerone.booted") === "1";
    } catch {
      seen = false;
    }

    const finishIntro = () => {
      try {
        sessionStorage.setItem("playerone.booted", "1");
      } catch {}
      setIntro(false);
      setPow(false);
    };

    const timers: ReturnType<typeof setTimeout>[] = [];
    if (seen || reducedRef.current) {
      setIntro(false);
    } else {
      timers.push(
        setTimeout(() => {
          if (barRef.current) barRef.current.style.transform = "scaleX(0.18)";
        }, 700),
        setTimeout(() => {
          if (barRef.current) barRef.current.style.transform = "scaleX(0.42)";
        }, 1100),
        setTimeout(() => {
          if (barRef.current) barRef.current.style.transform = "scaleX(0.6)";
        }, 1450),
        setTimeout(() => {
          if (barRef.current) barRef.current.style.transform = "scaleX(0.79)";
        }, 1800),
        setTimeout(() => {
          if (barRef.current) barRef.current.style.transform = "scaleX(1)";
        }, 2150),
        setTimeout(() => setPow(true), 2300),
        setTimeout(finishIntro, 2900),
      );
    }
    if (window.matchMedia("(hover: none)").matches) {
      timers.push(setTimeout(() => wavePulse(), seen ? 900 : 3300));
    }

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      timers.forEach(clearTimeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (frameTimerRef.current) clearInterval(frameTimerRef.current);
      if (waveTimerRef.current) clearTimeout(waveTimerRef.current);
      if (dotTimerRef.current) clearInterval(dotTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skipIntro = useCallback(() => {
    try {
      sessionStorage.setItem("playerone.booted", "1");
    } catch {}
    setIntro(false);
    setPow(false);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (form === "sending") return;
      const name = nameRef.current?.value.trim() ?? "";
      const email = emailRef.current?.value.trim() ?? "";
      const message = msgRef.current?.value.trim() ?? "";
      const honey = honeyRef.current?.value.trim() ?? "";
      if (honey) return;
      if (!name || !message) {
        setFormError("ALL FIELDS REQUIRED — TRY AGAIN");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        setFormError("INVALID EMAIL — CHECK THE ADDRESS");
        return;
      }
      setFormError("");
      setForm("sending");
      setTransmitDots(0);
      let dots = 0;
      dotTimerRef.current = setInterval(() => {
        dots = (dots + 1) % 4;
        setTransmitDots(dots);
      }, 240);

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website: honey }),
      })
        .then((r) => {
          if (!r.ok) throw new Error("bad status");
          if (dotTimerRef.current) clearInterval(dotTimerRef.current);
          setForm("done");
        })
        .catch(() => {
          if (dotTimerRef.current) clearInterval(dotTimerRef.current);
          setForm("idle");
          setFormError("CONNECTION LOST — TRY AGAIN");
        });
    },
    [form],
  );

  const resetForm = useCallback(() => {
    setForm("idle");
    setFormError("");
  }, []);

  return (
    <div className="relative">
      <div ref={spacerRef} aria-hidden="true" className="relative z-0">
        <div className="h-screen [scroll-snap-align:start]" />
        <div className="h-screen [scroll-snap-align:start]" />
        <div className="h-screen [scroll-snap-align:start]" />
        <div className="h-screen [scroll-snap-align:start]" />
      </div>

      <div
        ref={stageRef}
        className="fixed inset-0 z-[2] flex items-center justify-center overflow-hidden bg-void"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-40 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #ffffff 0 1px, transparent 1px 3px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[39]"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 50%, transparent 45%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        <div ref={scalerRef} className="relative h-[1120px] w-[1440px] origin-center">
          <div
            ref={bookRef}
            className="absolute inset-0"
            style={{ perspective: "2000px", perspectiveOrigin: "8% 50%" }}
          >
            <div aria-hidden="true" className="absolute bottom-0 left-[-14px] top-0 z-30 w-3.5 bg-ink" />
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-[-11px] top-2 z-30 w-2 opacity-55"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #F2E7CF 0 8px, transparent 8px 20px)",
              }}
            />

            <Contact
              sectionRef={contactRef}
              form={form}
              formError={formError}
              transmitDots={transmitDots}
              nameRef={nameRef}
              emailRef={emailRef}
              msgRef={msgRef}
              honeyRef={honeyRef}
              onSubmit={onSubmit}
              onReset={resetForm}
            />
            <Page3
              sectionRef={page3Ref}
              shadeRef={shade3Ref}
              node={node}
              onSelectNode={setNode}
            />
            <Page2 sectionRef={page2Ref} shadeRef={shade2Ref} />
            <Page1 sectionRef={page1Ref} />
          </div>

          <Avatar
            avatarRef={avatarRef}
            frame={frame}
            wave={wave}
            onEnter={waveOn}
            onLeave={waveOff}
            onClick={wavePulse}
          />

          <Hud
            hudRef={hudRef}
            hudLabelRef={hudLabelRef}
            dot0Ref={dot0Ref}
            dot1Ref={dot1Ref}
            dot2Ref={dot2Ref}
            onGoto0={() => jump(0)}
            onGoto1={() => jump(1)}
            onGoto2={() => jump(2)}
            onGoto3={() => jump(3)}
          />

          <div
            ref={hintRef}
            aria-hidden="true"
            className="absolute bottom-[-34px] left-1/2 z-50 -translate-x-1/2 animate-[po-blink_1.1s_steps(1)_infinite] font-press text-[11px] text-yellow transition-opacity duration-300"
          >
            ▼ SCROLL TO TURN
          </div>
        </div>
      </div>

      {intro && <Intro pow={pow} barRef={barRef} onSkip={skipIntro} />}

      {/* Keep the sprite module warm so its rect cache is built before first paint. */}
      <div className="hidden">
        <Sprite frame={0} />
      </div>
    </div>
  );
}

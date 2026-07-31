const PAL: Record<string, string> = {
  K: "#141414",
  S: "#E0A276",
  D: "#B27A4E",
  H: "#191310",
  L: "#31241A",
  B: "#241A13",
  W: "#F2E7CF",
  G: "#B4B7C0",
};

type Grid = string[][];

function pxGrid(): Grid {
  const g: Grid = [];
  for (let y = 0; y < 48; y++) g.push(new Array(48).fill(" "));
  return g;
}

function px(g: Grid, x: number, y: number, c: string) {
  x = Math.round(x);
  y = Math.round(y);
  if (x < 0 || x > 47 || y < 0 || y > 47) return;
  g[y][x] = c;
}

function box(g: Grid, x0: number, y0: number, x1: number, y1: number, c: string) {
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) px(g, x, y, c);
}

function ellipse(
  g: Grid,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  c: string,
  cond?: (x: number, y: number) => boolean,
) {
  for (let y = Math.floor(cy - ry); y <= Math.ceil(cy + ry); y++)
    for (let x = Math.floor(cx - rx); x <= Math.ceil(cx + rx); x++) {
      const d = Math.pow((x - cx) / rx, 2) + Math.pow((y - cy) / ry, 2);
      if (d <= 1 && (!cond || cond(x, y))) px(g, x, y, c);
    }
}

function stroke(g: Grid, x0: number, y0: number, x1: number, y1: number, t: number, c: string) {
  const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
  const h = Math.floor(t / 2);
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    const y = y0 + ((y1 - y0) * i) / n;
    for (let a = -h; a <= h; a++) for (let b = -h; b <= h; b++) px(g, x + a, y + b, c);
  }
}

function outlined(g: Grid): Grid {
  const o = g.map((r) => r.slice());
  const nb = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let y = 0; y < 48; y++)
    for (let x = 0; x < 48; x++) {
      if (g[y][x] !== " ") continue;
      let touch = false;
      for (const [dx, dy] of nb) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < 48 && ny >= 0 && ny < 48 && g[ny][nx] !== " ") {
          touch = true;
          break;
        }
      }
      if (touch) o[y][x] = "K";
    }
  return o;
}

function bust(): Grid {
  const g = pxGrid();
  box(g, 20, 28, 26, 37, "S"); // neck
  box(g, 19, 28, 27, 30, "D"); // jaw shadow
  ellipse(g, 23, 20, 9, 11, "S"); // head
  ellipse(g, 23, 20, 9, 11, "D", (x, y) => x >= 30 || y >= 31); // side + chin shadow
  px(g, 14, 22, "S");
  px(g, 14, 23, "D"); // ear
  ellipse(g, 23, 14, 10.5, 9.5, "H", (x, y) => y <= 23 && (y <= 15 || x <= 16 || x >= 30));
  ellipse(g, 23, 10, 8, 5, "L", (x, y) => y <= 10); // top volume
  px(g, 24, 16, "H");
  px(g, 25, 16, "H");
  px(g, 25, 17, "H"); // forehead strand
  box(g, 17, 19, 20, 19, "B");
  box(g, 26, 19, 29, 19, "B"); // brows
  box(g, 18, 22, 20, 22, "W");
  box(g, 26, 22, 28, 22, "W"); // eyes
  px(g, 19, 22, "K");
  px(g, 27, 22, "K");
  box(g, 23, 24, 23, 25, "D");
  px(g, 22, 25, "D");
  px(g, 24, 25, "D"); // nose
  box(g, 21, 27, 25, 27, "B"); // moustache
  box(g, 22, 28, 24, 28, "B");
  px(g, 25, 27, "B"); // mouth + smirk
  box(g, 21, 30, 25, 30, "B");
  box(g, 22, 31, 24, 31, "B"); // chin beard
  for (let y = 36; y <= 47; y++) {
    const hw = Math.round(8 + (y - 36) * 1.4);
    box(g, 23 - hw, y, 23 + hw, y, "W"); // shirt
  }
  for (let y = 40; y <= 47; y++) {
    const hw = Math.round(8 + (y - 36) * 1.4);
    box(g, 23 + Math.round(hw * 0.66), y, 23 + hw, y, "G");
  }
  box(g, 20, 33, 26, 37, "S"); // neck over collar line
  stroke(g, 20, 36, 16, 43, 1, "K");
  stroke(g, 26, 36, 30, 43, 1, "K"); // collar points
  box(g, 21, 36, 26, 38, "K");
  box(g, 22, 39, 25, 47, "K"); // tie
  return g;
}

function bustFrame(f: number): Grid {
  const g = bust();
  if (f === 1) {
    stroke(g, 33, 43, 38, 35, 4, "W");
    box(g, 37, 32, 40, 34, "S");
  } else if (f === 2) {
    stroke(g, 33, 42, 38, 31, 4, "W");
    stroke(g, 38, 31, 40, 22, 3, "S");
    box(g, 37, 15, 41, 21, "S");
    px(g, 37, 14, "S");
    px(g, 39, 14, "S");
    px(g, 41, 14, "S");
  }
  return outlined(g);
}

export type SpriteRect = {
  key: string;
  x: number;
  y: number;
  width: number;
  fill: string;
};

const spriteCache = new Map<number, SpriteRect[]>();

function getSpriteRects(frame: number): SpriteRect[] {
  const cached = spriteCache.get(frame);
  if (cached) return cached;
  const g = bustFrame(frame);
  const rects: SpriteRect[] = [];
  for (let y = 0; y < 48; y++) {
    let x = 0;
    while (x < 48) {
      const c = g[y][x];
      if (c === " ") {
        x++;
        continue;
      }
      let w = 1;
      while (x + w < 48 && g[y][x + w] === c) w++;
      rects.push({ key: `${y}_${x}`, x, y, width: w, fill: PAL[c] });
      x += w;
    }
  }
  spriteCache.set(frame, rects);
  return rects;
}

const DEFAULT_LABEL =
  "Pixel-art portrait of Ibrahim Araji in a white collared shirt and black tie, dark wavy hair with a strand on his forehead, moustache and chin beard";

export function Sprite({
  frame,
  label,
  className,
}: {
  frame: number;
  label?: string;
  className?: string;
}) {
  const rects = getSpriteRects(frame);
  return (
    <svg
      viewBox="0 0 48 48"
      width="100%"
      height="100%"
      shapeRendering="crispEdges"
      style={{ display: "block", imageRendering: "pixelated" }}
      role="img"
      aria-label={label ?? DEFAULT_LABEL}
      className={className}
    >
      {rects.map((r) => (
        <rect key={r.key} x={r.x} y={r.y} width={r.width} height={1} fill={r.fill} />
      ))}
    </svg>
  );
}

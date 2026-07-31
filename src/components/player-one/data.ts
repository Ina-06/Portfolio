export type TimelineNode = {
  title: string;
  meta: string;
  body: string;
  list?: boolean;
};

export const NODES: TimelineNode[] = [
  {
    title: "NODE 01 — MSII MARKETING SCIENCE INTERNATIONAL INC.",
    meta: "FREELANCE WEB & CODING ASSISTANT · LONDON, ONTARIO · FEB 2022 – MAY 2023",
    body: "HTML/CSS templates, JavaScript and Python feature work, bug fixes across client web projects. First real Git and deployment experience.",
  },
  {
    title: "NODE 02 — SWIFTFORCE LOGISTICS (SWFL)",
    meta: "DISPATCHER, FULL-TIME · REMOTE, U.S.-BASED · OCT 2025",
    body: "Primary point of contact for on-road drivers. Real-time route coordination, driver check-ins, route completions.",
  },
  {
    title: "NODE 03 — SWIFTFORCE LOGISTICS (SWFL)",
    meta: "AUTOMATION ENGINEER INTERN · REMOTE, U.S.-BASED · PRESENT",
    body: "Promoted off the dispatch floor to build tooling for the team I had been working on. Two production Python systems, running daily.",
    list: true,
  },
];

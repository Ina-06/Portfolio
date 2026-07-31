import type { Metadata } from "next";
import { Press_Start_2P, Bangers, VT323 } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Player One — Ibrahim Araji",
  description:
    "Ibrahim Araji's portfolio: a comic-book arcade cabinet walking through where he is now, his origin story, and where he's going next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${bangers.variable} ${vt323.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

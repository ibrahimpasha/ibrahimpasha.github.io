import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ibrahim Mohammad — Robotics & Embodied AI",
  description:
    "Applied Scientist II at Amazon building bipedal and mobile robots. RL, sim-to-real, embedded VLA on Jetson.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-ink/15 bg-paper">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-medium tracking-tight">
          Ibrahim Mohammad
        </Link>
        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.14em] text-ink/70">
          <Link href="/#projects" className="hover:text-ink">
            Projects
          </Link>
          <Link href="/#about" className="hover:text-ink">
            About
          </Link>
          <Link href="/#contact" className="hover:text-ink">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink/15">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-6 py-8 text-xs text-ink/60 md:flex-row md:items-center">
        <div className="font-mono uppercase tracking-[0.14em]">
          Ibrahim Mohammad &middot; Robotics &middot; Embodied AI
        </div>
        <div className="font-mono uppercase tracking-[0.14em]">
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

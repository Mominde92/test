"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BarChart3,
  ChevronDown,
  Grid3X3,
  Info,
  MapPin,
  Menu,
  Store,
  Settings,
  UserRound,
  X,
} from "lucide-react";

const navLinks = [
  {
    label: "Compare",
    href: "#compare",
    icon: BarChart3,
  },
  {
    label: "Nearby Stores",
    href: "#nearby-stores",
    icon: Store,
  },
  {
    label: "Categories",
    href: "#categories",
    icon: Grid3X3,
  },
  {
    label: "Contact Us",
    href: "#contact",
    icon: Info,
  },
];

export function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 isolate z-[2147483647] border-b border-[#d8d1c8] bg-[#fffaf1] shadow-[0_1px_0_rgba(17,17,17,0.04)]">
      <nav className="hidden h-[112px] w-full items-stretch xl:flex">
        <div className="flex w-[clamp(155px,12vw,198px)] shrink-0 items-center justify-center border-r border-[#d8d1c8]">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-[clamp(17px,1.25vw,21px)] font-semibold text-ink hover:text-magenta"
            aria-label="Change language"
          >
            <span className="text-[clamp(24px,2vw,32px)] leading-none" aria-hidden="true">
              🇺🇸
            </span>
            <span>ENG</span>
            <ChevronDown className="h-5 w-5 stroke-[2.6]" />
          </button>
        </div>

        <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_clamp(170px,16vw,270px)_minmax(0,1fr)] items-center px-[clamp(18px,2.5vw,40px)]">
          <div className="flex items-center justify-center gap-[clamp(24px,4vw,80px)]">
            {navLinks.slice(0, 2).map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 whitespace-nowrap text-[clamp(16px,1.2vw,20px)] font-medium text-[#7b776f] hover:text-magenta"
                >
                  <Icon className="h-5 w-5 stroke-[1.8]" />
                  {link.label}
                </a>
              );
            })}
          </div>

          <a
            href="/"
            className="mx-auto flex h-[86px] w-[clamp(148px,11vw,184px)] items-center justify-center transition hover:scale-[1.03]"
            aria-label="Hoor home"
          >
            <Image
              src="/images/hoor-logo.svg"
              alt="HOOR"
              width={184}
              height={88}
              priority
              className="h-auto w-full object-contain"
            />
          </a>

          <div className="flex items-center justify-center gap-[clamp(24px,4vw,80px)]">
            {navLinks.slice(2).map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 whitespace-nowrap text-[clamp(16px,1.2vw,20px)] font-medium text-[#7b776f] hover:text-magenta"
                >
                  <Icon className="h-5 w-5 stroke-[1.8]" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative flex w-[clamp(135px,10vw,158px)] shrink-0 items-center justify-center border-l border-[#d8d1c8]">
          <button
            type="button"
            className="flex flex-col items-center gap-2 text-center"
            aria-expanded={isProfileOpen}
            aria-haspopup="menu"
            onClick={() => setIsProfileOpen((current) => !current)}
          >
            <span className="relative flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#35c7df] via-[#f4d0c8] to-[#7b2d64] shadow-sm">
              <span className="absolute inset-[5px] rounded-full bg-[radial-gradient(circle_at_50%_30%,#f6d0bd_0_18%,#8d4d77_19_39%,#1b1b1b_40_55%,#38c9df_56_100%)]" />
              <UserRound className="relative h-8 w-8 text-white/80" />
            </span>
            <span className="text-[16px] font-bold leading-none text-ink">Layla Sofia</span>
          </button>

          {isProfileOpen ? (
            <div
              className="absolute right-4 top-full z-10 w-56 overflow-hidden rounded-b-2xl border border-t-0 border-stone-200 bg-white p-2 shadow-soft"
              role="menu"
            >
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-stone-700 hover:bg-cream hover:text-magenta"
                role="menuitem"
              >
                <Settings className="h-4 w-4" />
                Profile Settings
              </button>
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-stone-700 hover:bg-cream hover:text-magenta"
                role="menuitem"
              >
                <UserRound className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          ) : null}
        </div>
      </nav>

      <nav className="flex h-[86px] items-center justify-between px-4 xl:hidden">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-ink shadow-sm hover:border-magenta hover:text-magenta"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((current) => !current)}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <button
            type="button"
            className="hidden items-center gap-2 text-sm font-semibold text-ink hover:text-magenta sm:inline-flex"
            aria-label="Change language"
          >
            <span className="text-lg leading-none" aria-hidden="true">
              🇺🇸
            </span>
            <span>ENG</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        <a
          href="/"
          className="absolute left-1/2 flex h-16 w-32 -translate-x-1/2 items-center justify-center transition hover:scale-105"
          aria-label="Hoor home"
        >
          <Image
            src="/images/hoor-logo.svg"
            alt="HOOR"
            width={184}
            height={88}
            priority
            className="h-auto w-full object-contain"
          />
        </a>

        <div className="relative flex items-center justify-end">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-stone-200 bg-white py-2 pl-2 pr-3 shadow-sm hover:border-magenta hover:shadow-card"
            aria-expanded={isProfileOpen}
            aria-haspopup="menu"
            onClick={() => setIsProfileOpen((current) => !current)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-magenta to-peach text-white shadow-sm">
              <UserRound className="h-5 w-5" />
            </span>
            <span className="hidden text-sm font-semibold text-ink md:inline">Layla Sofia</span>
            <ChevronDown
              className={`hidden h-4 w-4 text-stone-500 md:inline ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProfileOpen ? (
            <div
              className="absolute right-0 top-[calc(100%+10px)] z-10 w-56 overflow-hidden rounded-2xl border border-stone-200 bg-white p-2 shadow-soft"
              role="menu"
            >
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-stone-700 hover:bg-cream hover:text-magenta"
                role="menuitem"
              >
                <Settings className="h-4 w-4" />
                Profile Settings
              </button>
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-stone-700 hover:bg-cream hover:text-magenta"
                role="menuitem"
              >
                <UserRound className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          ) : null}
        </div>
      </nav>

      {isMobileOpen ? (
        <div className="border-t border-stone-200 bg-cream-soft px-5 pb-5 xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
            <button
              type="button"
              className="flex w-fit items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-sm hover:border-magenta hover:text-magenta sm:hidden"
              aria-label="Change language"
            >
              <span className="text-lg leading-none" aria-hidden="true">
                🇺🇸
              </span>
              <span>ENG</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-stone-700 shadow-sm hover:text-magenta"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}

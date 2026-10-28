"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DM_Sans, Poppins } from "next/font/google";
import { ArrowUpRight, Menu, X } from "lucide-react";
import navLogo from "../../../public/logo.png";
import heroLogo from "../../../public/herologo.png";
import heroShape from "../../../public/rightframehero.png";
import mailIcon from "../../../public/mailicon.png";
import phoneIcon from "../../../public/phoneiocn.png";
import slide1 from "../../../public/c1.png";
import slide2 from "../../../public/c2.png";
import slide3 from "../../../public/c3.png";
import slide4 from "../../../public/c4.png";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

const SLIDES = [
  { src: slide1, alt: "Clients shaking hands with an insurance advisor" },
  { src: slide2, alt: "Family meeting an insurance advisor" },
  { src: slide3, alt: "Advisor explaining a policy" },
  { src: slide4, alt: "Happy clients after signing a policy" },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Claim Support", href: "#claim" },
];

const EMAIL = "eliteinsuranceclt@gmail.com";
const PHONE_LABEL = "+91 8848013168";
const PHONE_HREF = "tel:+918848013168";

const AUTOPLAY_MS = 5000; 
const SLIDE_MS = 900; 


const PAD = "px-4 sm:px-8 lg:px-12 xl:px-20";

export default function EliteHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const count = SLIDES.length;
  const track = [...SLIDES, SLIDES[0]];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setAnimate(true);
      setIndex((i) => (i >= count ? i : i + 1));
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [count]);

  const goTo = (i: number) => {
    setAnimate(true);
    setIndex(i);
  };

  const onTrackEnd = () => {
    if (index === count) {
      setAnimate(false);
      setIndex(0);
    }
  };

  const activeDot = index % count;

  return (
    <section
      id="home"
      className={`
        ${dmSans.className}
        relative
        isolate
        flex
        min-h-[560px]
        sm:min-h-[640px]
        w-full
        flex-col
        overflow-hidden
        bg-[#0A1A4A]
        text-white
        lg:min-h-[clamp(700px,52vw,1000px)]
      `}
    >
      {/* ===================== CAROUSEL ===================== */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        role="group"
        aria-roledescription="carousel"
        aria-label="Elite Insurance"
      >
        <div
          className="flex h-full w-full"
          onTransitionEnd={onTrackEnd}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: animate
              ? `transform ${SLIDE_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`
              : "none",
          }}
        >
          {track.map((s, i) => (
            <div
              key={i}
              className="relative h-full w-full shrink-0 basis-full"
              aria-hidden={i === count}
            >
              <Image
                src={s.src}
                alt={i === count ? "" : s.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover object-[62%_center] sm:object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navy tint over the photos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        />

      {/* Big logo shape on the right side (decorative image) */}
      <Image
        src={heroShape}
        alt=""
        aria-hidden="true"
        priority
        className="
          pointer-events-none
          absolute
          right-[-45%]
          top-[12%]
          z-[2]
          h-[62%]
          w-auto
          max-w-none
          select-none
          opacity-70
          sm:right-[-25%]
          sm:h-[85%]
          lg:right-[-8%]
          lg:top-[6%]
          lg:h-[112%]
          lg:opacity-100
        "
      />

      {/* ========================= NAV ========================= */}
      <div className={`relative z-20 ${PAD}`}>
        <header
          className="
            relative
            flex
            items-center
            justify-between
            gap-6
            border-b
            border-white/30
            py-4
            lg:grid
            lg:grid-cols-[1fr_auto_1fr]
            lg:pb-6
            lg:pt-[28px]
          "
        >
          {/* Logo — left side */}
          <Link
            href="/"
            aria-label="Elite Insurance Services home"
            className="block w-fit"
          >
            <Image
              src={navLogo}
              alt="Elite Insurance Services"
              priority
              className="h-auto w-[110px] sm:w-[130px] xl:w-[160px]"
            />
          </Link>

          {/* Menu — centered */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-10">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-white transition-colors hover:text-[#ED3445]"
                    style={{ fontWeight: 600, lineHeight: "100%" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA (desktop) + burger (mobile / tablet) */}
          <div className="flex items-center justify-end gap-3">
            <Link
              href="#contact"
              className="
                group
                hidden
                w-[277px]
                items-center
                justify-center
                gap-[9px]
                whitespace-nowrap
                rounded-[8px]
                border
                border-[#ED3445]
                bg-[#ED3445]
                px-6
                pb-[12.89px]
                pt-[12.5px]
                text-[14px]
                text-white
                shadow-[0_6px_18px_0_#ED344540]
                transition-colors
                duration-300
                ease-out
                hover:bg-[#771922]
                focus-visible:bg-[#771922]
                lg:inline-flex
              "
              style={{ fontWeight: 700, lineHeight: "22.4px" }}
            >
              Get a Free Consultation
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="elite-mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 lg:hidden"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          <div
            id="elite-mobile-menu"
            className={`
              absolute
              left-0
              right-0
              top-full
              z-30
              mt-2
              overflow-hidden
              rounded-2xl
              bg-[#0A1A4A]/95
              backdrop-blur
              lg:hidden
              ${menuOpen ? "block" : "hidden"}
            `}
          >
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.label} className="border-b border-white/10">
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-5 py-4 text-base"
                    style={{ fontWeight: 600 }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4">
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-[9px] rounded-[8px] bg-[#ED3445] px-6 py-3 text-[14px] text-white"
                style={{ fontWeight: 700, lineHeight: "22.4px" }}
              >
                Get a Free Consultation
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </header>
      </div>

      {/* ===================== BIG LOGO ON THE IMAGE ===================== */}
      <div
        className={`
          relative
          z-10
          flex
          flex-1
          items-center
          py-10
          lg:pt-[7vw]
          ${PAD}
        `}
      >
        <Image
          src={heroLogo}
          alt="Elite Insurance Services"
          priority
          className="h-auto w-[min(822px,86vw)] lg:w-[min(822px,52vw)]"
        />
      </div>

      {/* ========================= DOTS ========================= */}
      <div
        className="relative z-10 mb-5 flex items-center justify-center gap-2 sm:mb-7"
        role="tablist"
        aria-label="Choose slide"
      >
        {SLIDES.map((s, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === activeDot}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`
              h-2
              w-2
              rounded-full
              transition-colors
              duration-300
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#0A1A4A]
              ${i === activeDot ? "bg-white" : "bg-white/40 hover:bg-white/70"}
            `}
          />
        ))}
      </div>

      {/* ===================== CONTACT BAR ===================== */}
      <div className={`relative z-10 ${PAD}`}>
        <div
          className={`
            ${poppins.className}
            flex
            flex-col
            gap-4
            border-t
            border-white/70
            pb-6
            pt-5
            text-[clamp(15px,4.2vw,24px)]
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-6
            sm:pb-12
            sm:pt-7
            lg:pb-14
            lg:text-[clamp(18px,1.25vw,24px)]
            xl:pb-[68px]
            xl:text-[24px]
          `}
          style={{ fontWeight: 500, lineHeight: "100%" }}
        >
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 break-all transition-colors hover:text-[#ED3445] sm:break-normal"
          >
            <Image
              src={mailIcon}
              alt=""
              aria-hidden="true"
              className="h-auto w-5 shrink-0 object-contain sm:w-[26px]"
            />
            {EMAIL}
          </a>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 transition-colors hover:text-[#ED3445]"
          >
            <Image
              src={phoneIcon}
              alt=""
              aria-hidden="true"
              className="h-auto w-5 shrink-0 object-contain sm:w-[26px]"
            />
            {PHONE_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
}
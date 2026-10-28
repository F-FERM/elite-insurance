import Link from "next/link";
import Image from "next/image";
import { DM_Sans, Manrope } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import aboutImg from "../../../public/about.png";
import tickImg from "../../../public/tick.png";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["700", "800"] });
const PAD = "px-4 sm:px-8 lg:px-12 xl:px-20";

const FEATURES_LEFT = ["Customer-first approach", "Honest, clear advice"];
const FEATURES_RIGHT = ["Renewal reminders", "Claims assistance"];

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-[10px]">
      <Image
        src={tickImg}
        alt=""
        aria-hidden="true"
        className="h-5 w-5 shrink-0 object-contain"
      />
      <span
        className="text-[14.5px] text-[#172849]"
        style={{ fontWeight: 700, lineHeight: "23.2px" }}
      >
        {text}
      </span>
    </li>
  );
}

export default function EliteAbout() {
  return (
    <section
      id="about"
      className={`${dmSans.className} w-full bg-white py-14 sm:py-20 lg:py-24 xl:py-[124px] ${PAD}`}
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1465px]
          items-center
          gap-8
          lg:grid-cols-2
          lg:gap-5
        "
      >
        {/* ======================= IMAGE ======================= */}
        <div
          className="
            relative
            aspect-[722/491]
            w-full
            overflow-hidden
            rounded-bl-[14px]
            rounded-br-[clamp(48px,8vw,115px)]
            rounded-tl-[clamp(48px,8vw,115px)]
            rounded-tr-[14px]
          "
        >
          <Image
            src={aboutImg}
            alt="Advisor reviewing an insurance policy on a desk"
            fill
            sizes="(min-width: 1024px) 722px, 100vw"
            className="object-cover"
          />
        </div>

        {/* ======================= TEXT ======================= */}
        <div className="min-w-0 lg:pl-0">
          {/* Eyebrow */}
          <div className="flex items-center gap-[10px]">
            <span
              aria-hidden="true"
              className="block h-[2px] w-6 bg-[#ED3445]"
            />
            <p
              className="text-[12px] uppercase text-[#ED3445]"
              style={{
                fontWeight: 700,
                lineHeight: "17.6px",
                letterSpacing: "1.76px",
              }}
            >
              Our story in short
            </p>
          </div>

          {/* Heading */}
          <h2
            className={`${manrope.className} mt-3 text-[28px] sm:text-[32px] lg:text-[34px]`}
            style={{ lineHeight: "100%" }}
          >
            <span className="text-[#172849]" style={{ fontWeight: 700 }}>
              What{" "}
            </span>
            <span className="text-[#ED3445]" style={{ fontWeight: 800 }}>
              we stand for.
            </span>
          </h2>

          {/* Paragraphs */}
          <p
            className="mt-6 text-[16px] leading-[1.7] text-[#6A7486] sm:mt-7 sm:text-[18px] sm:leading-[29.6px]"
            style={{ fontWeight: 400 }}
          >
            Getting insurance doesn’t have to be tricky. That’s why Elite
            Insurance Services, a trusted risk management provider, brings
            together premium insurance brands under one roof.
          </p>
          <p
            className="mt-2 text-[15px] leading-[1.7] text-[#6A7486] sm:text-[16px] sm:leading-[29.6px]"
            style={{ fontWeight: 400 }}
          >
            We provide personalized coverage solutions that safeguard your
            finances and let you dream bigger.
          </p>

          {/* Features — two columns */}
          <div className="mt-6 grid grid-cols-1 gap-y-0 sm:grid-cols-[62%_1fr]">
            <ul>
              {FEATURES_LEFT.map((f) => (
                <Feature key={f} text={f} />
              ))}
            </ul>
            <ul>
              {FEATURES_RIGHT.map((f) => (
                <Feature key={f} text={f} />
              ))}
            </ul>
          </div>

          {/* Button — same hover as the hero button (colour only, size stays) */}
          <Link
            href="#services"
            className="
              group
              mt-6
              inline-flex
              w-[235px]
              max-w-full
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
            "
            style={{ fontWeight: 700, lineHeight: "22.4px" }}
          >
            Discover Your Coverage
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
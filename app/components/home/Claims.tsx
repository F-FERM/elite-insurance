import Link from "next/link";
import Image from "next/image";
import { DM_Sans, Manrope } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import bgImg from "../../../public/q1.jpg";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["700", "800"] });
const PAD = "px-4 sm:px-8 lg:px-12 xl:px-20";

const PHONE_HREF = "#contact";

const STEPS = [
  {
    title: "Inform us immediately",
    text: "Reach out to our team as soon as an insured event occurs via hotline or WhatsApp.",
  },
  {
    title: "Submit required documents",
    text: "Share the necessary documents needed for your claim process with our assistance.",
  },
  {
    title: "We help with the rest",
    text: "Our team liaises directly with insurance providers for rapid claim settlement.",
  },
];

export default function EliteClaims() {
  return (
    <section
      id="claim"
      className={`
        ${dmSans.className}
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#0F1E46]
        py-14
        text-white
        sm:py-20
        lg:py-24
        xl:py-[120px]
        ${PAD}
      `}
    >
      {/* Background photo + navy tint */}
      <Image
        src={bgImg}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="z-0 object-cover"
      />
      <div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-[1]"
  style={{
    background:
      "linear-gradient(101.7deg, #101D35 0.91%, rgba(34, 55, 96, 0.85) 100%)",
  }}
/>

      <div className="relative z-10 mx-auto w-full max-w-[1465px]">
        {/* ========================= HEADER ========================= */}
        <div className="flex items-center gap-[10px]">
          <span aria-hidden="true" className="block h-[2px] w-6 bg-[#FF7886]" />
          <p
            className="text-[12px] uppercase text-[#FF7886]"
            style={{
              fontWeight: 700,
              lineHeight: "17.6px",
              letterSpacing: "1.76px",
            }}
          >
            Here when you need us
          </p>
        </div>

        <h2
          className={`${manrope.className} mt-4 max-w-[660px] text-[clamp(28px,7vw,45px)] text-white`}
          style={{
            fontWeight: 800,
            lineHeight: "1.195",
            letterSpacing: "-0.035em",
          }}
        >
          Claims assistance without the stress.
        </h2>

        <p
          className="mt-3 max-w-[660px] text-[15px] leading-[1.7] text-[#CDD8E8] sm:text-[16px] sm:leading-[28.8px]"
          style={{ fontWeight: 400 }}
        >
          Our Claim Support Team helps with quick, transparent and hassle-free
          assistance. Just three simple steps.
        </p>

        {/* ========================= STEPS =========================
            1 column phones, 3 columns from 768px */}
        <ol className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-8 lg:gap-[19px]">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="
                rounded-[16px]
                border
                border-[#FFFFFF33]
                bg-[#FFFFFF0F]
                p-6
                backdrop-blur-[20px]
                lg:px-[33px]
                lg:pb-8
                lg:pt-10
              "
            >
              <span
                aria-hidden="true"
                className={`${manrope.className} block text-[34px] text-[#FF5262] lg:text-[42px]`}
                style={{ fontWeight: 800, lineHeight: "100%" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3
                className={`${manrope.className} mt-4 text-[18px] text-white lg:mt-5 lg:text-[20px]`}
                style={{
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "-0.035em",
                }}
              >
                {step.title}
              </h3>

              <p
                className="mt-3 max-w-[310px] text-[14px] text-[#C3CFDF] lg:mt-[14px] lg:text-[14.5px]"
                style={{ fontWeight: 400, lineHeight: "1.32" }}
              >
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        {/* ========================= BUTTON =========================
            Same hover as the hero button: colour changes, size stays */}
        <Link
          href={PHONE_HREF}
          className="
            group
            mt-8
            inline-flex
            w-[274px]
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
          Call for Claim Support
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
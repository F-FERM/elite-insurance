import Image from "next/image";
import { DM_Sans, Manrope } from "next/font/google";
import bgImg from "../../../public/purposebg.jpg";
import visionIcon from "../../../public/mission.png";
import missionIcon from "../../../public/vision.png";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["800"] });
const PAD = "px-4 sm:px-8 lg:px-12 xl:px-[230px]";
const ICON_BOX = "relative block h-12 w-12 shrink-0 sm:h-[58px] sm:w-[58px]";
const ICON_IMG =
  "absolute left-1/2 top-1/2 h-[58px] w-[58px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[58px] sm:w-[58px]";

export default function ElitePurpose() {
  return (
    <section
      id="purpose"
      className={`
        ${dmSans.className}
        relative
        isolate
        w-full
        overflow-hidden
        border-y
        border-[#E7EBF2]
        py-14
        sm:py-16
        xl:min-h-[642px]
        xl:py-[70px]
        ${PAD}
      `}
    >
      {/* Faded background photo */}
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
        className="pointer-events-none absolute inset-0 z-[1] bg-white/80"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1460px]">
        {/* ========================= HEADER ========================= */}
        <div className="flex items-center gap-[10px]">
          <span aria-hidden="true" className="block h-[2px] w-6 bg-[#ED3445]" />
          <p
            className="text-[11px] uppercase text-[#ED3445]"
            style={{
              fontWeight: 700,
              lineHeight: "17.6px",
              letterSpacing: "1.76px",
            }}
          >
            Our purpose
          </p>
        </div>

        <h2
          className={`${manrope.className} mt-5 text-[clamp(28px,7vw,44.8px)] text-[#101D35]`}
          style={{
            fontWeight: 800,
            lineHeight: "1.2",
            letterSpacing: "-0.035em",
          }}
        >
          Built on trust. Driven by service.
        </h2>

        {/* ========================= CARDS =========================
            1 column phones, 2 columns from 768px */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2">
          {/* ---------- Vision ---------- */}
          <article
            className="
              rounded-[16px]
              border
              border-[#E7EBF2]
              bg-white
              p-6
              shadow-[0_4px_12px_0_#101D350A]
              sm:p-8
              xl:min-h-[323.35px]
              xl:p-[44px]
            "
          >
            <span className={ICON_BOX}>
              <Image
                src={visionIcon}
                alt=""
                aria-hidden="true"
                className={ICON_IMG}
              />
            </span>

            <h3
              className={`${manrope.className} mt-5 text-[22px] text-[#101D35] sm:mt-6 sm:text-[24px]`}
              style={{
                fontWeight: 800,
                lineHeight: "1.2",
                letterSpacing: "-0.035em",
              }}
            >
              Our Vision
            </h3>

            <p
              className="mt-[10.8px] max-w-[520px] text-[15px] leading-[1.7] text-[#6A7486] sm:text-[16px] sm:leading-[27.75px]"
              style={{ fontWeight: 400 }}
            >
              To be the client-focused, leading provider of trusted insurance
              solutions, building long-standing connections based on trust,
              service, and values.
            </p>
          </article>

          {/* ---------- Mission ---------- */}
          <article
            className="
              rounded-[16px]
              border
              border-[#E7EBF2]
              bg-white
              p-6
              shadow-[0_4px_12px_0_#101D350A]
              sm:p-8
              xl:min-h-[323.35px]
              xl:p-[44px]
            "
          >
            <span className={ICON_BOX}>
              <Image
                src={missionIcon}
                alt=""
                aria-hidden="true"
                className={ICON_IMG}
              />
            </span>

            <h3
              className={`${manrope.className} mt-5 text-[22px] text-[#101D35] sm:mt-6 sm:text-[24px]`}
              style={{
                fontWeight: 800,
                lineHeight: "1.2",
                letterSpacing: "-0.035em",
              }}
            >
              Our Mission
            </h3>

            <p
              className="mt-[10.8px] max-w-[520px] text-[15px] leading-[1.7] text-[#6A7486] sm:text-[16px] sm:leading-[27.75px]"
              style={{ fontWeight: 400 }}
            >
              We simplify insurance to make it accessible for every customer.
              We provide transparent, honest advice with no hidden conditions,
              timely policy renewals and seamless claim settlement support
              throughout the insurance journey.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
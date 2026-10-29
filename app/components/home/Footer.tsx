import Image from "next/image";
import { Outfit, Poppins } from "next/font/google";
import iconPhone from "../../../public/home.png";
import iconMail from "../../../public/mail.png";
import iconPin from "../../../public/location.png";
import partner1 from "../../../public/p1.png";
import partner2 from "../../../public/p2.png";
import partner3 from "../../../public/p3.png";
import partner4 from "../../../public/p4.png";
import partner5 from "../../../public/p5.png";
import partner6 from "../../../public/p6.png";
import partner7 from "../../../public/p7.png";
import partner8 from "../../../public/p8.png";
import partner9 from "../../../public/p9.png";
import partner10 from "../../../public/p10.png";
import partner11 from "../../../public/p11.png";



const outfit = Outfit({ subsets: ["latin"], weight: ["700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const PAD = "px-4 sm:px-8 lg:px-12 xl:px-20";

const PARTNERS = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11];

const TEXT = {
  fontWeight: 400,
  lineHeight: "100%",
  letterSpacing: "0.35px",
} as const;
const GROUPS = [0, 1];

export default function EliteFooter() {
  return (
    <footer
      id="footer"
      className={`${poppins.className} w-full bg-[#14233C] py-12 text-[#F1F5F9] sm:py-14 xl:pb-[92px] xl:pt-[66px] ${PAD}`}
    >
      {/* keyframes live here, so no tailwind.config change is needed */}
      <style>{`
        @keyframes partners-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1760px]">
        {/* ====================== HEADLINE + LINE ====================== */}
        <div className="flex items-center gap-6">
          <h2
            className={`${outfit.className} shrink-0 whitespace-nowrap text-[clamp(32px,10.5vw,74px)]`}
            style={{ fontWeight: 700, lineHeight: "100%" }}
          >
            <span className="text-white">Let’s talk </span>
            <span className="text-[#E3282C]">insurance</span>
          </h2>

          <span
            aria-hidden="true"
            className="mt-2 hidden h-0 flex-1 border-t-2 border-[#6B6B6B] md:block"
          />
        </div>

        <p
          className="mt-4 text-[14px] sm:mt-6 sm:text-[16px] xl:mt-7"
          style={TEXT}
        >
          For new policies, renewals, or claim support
        </p>

        {/* ====================== DIVIDER ====================== */}
        <div
          aria-hidden="true"
          className="mt-8 border-t-2 border-[#6B6B6B] sm:mt-10 xl:mt-12"
        />

        {/* ====================== CONTACT + PARTNERS ====================== */}
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,722px)] lg:gap-10">
          {/* ---------- Contact details ---------- */}
          <ul className="flex flex-wrap items-start gap-x-9 gap-y-6">
            {/* Phones */}
            <li className="flex items-center gap-3">
              <Image
                src={iconPhone}
                alt=""
                aria-hidden="true"
                className="h-10 w-10 shrink-0 object-contain"
              />
              <div className="flex flex-col gap-[10px] text-[14px]" style={TEXT}>
                <a
                  href="tel:+919747418084"
                  className="transition-colors hover:text-[#E3282C]"
                >
                  +91 9747 418 084
                </a>
                <a
                  href="tel:+917306394737"
                  className="transition-colors hover:text-[#E3282C]"
                >
                  +91 7306 394 737
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3">
              <Image
                src={iconMail}
                alt=""
                aria-hidden="true"
                className="h-10 w-10 shrink-0 object-contain"
              />
              <a
                href="mailto:info@eliteinsuranceservices.in"
                className="break-all text-[14px] transition-colors hover:text-[#E3282C]"
                style={TEXT}
              >
                info@eliteinsuranceservices.in
              </a>
            </li>

            {/* Address */}
            <li className="flex basis-full items-center gap-3">
              <Image
                src={iconPin}
                alt=""
                aria-hidden="true"
                className="h-10 w-10 shrink-0 object-contain"
              />
              <address className="text-[14px] not-italic" style={TEXT}>
                T2, HiLite Business Park, Calicut.
              </address>
            </li>
          </ul>

          {/* ---------- Partner logos (moving, 722 x 73 on desktop) ---------- */}
          <div className="min-w-0">
            <p className="text-[14px]" style={TEXT}>
              Associations with India’s Most Reliable Insurance
            </p>

            <div
              className="mt-4 w-full overflow-hidden lg:w-[722px] lg:max-w-full"
              aria-label="Partner insurance companies"
            >
              <div className="flex w-max animate-[partners-scroll_10s_linear_infinite] motion-reduce:animate-none">
                {GROUPS.map((g) => (
                  <ul
                    key={g}
                    aria-hidden={g > 0}
                    className="flex shrink-0 items-center gap-[14px] pr-[14px] sm:gap-5 sm:pr-5"
                  >
                    {PARTNERS.map((logo, i) => (
                      <li key={i} className="shrink-0">
                        <Image
                          src={logo}
                          alt={g === 0 ? `Insurance partner ${i + 1}` : ""}
                          className="h-[56px] w-auto sm:h-[73px]"
                        />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
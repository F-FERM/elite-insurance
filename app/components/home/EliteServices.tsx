import Link from "next/link";
import Image from "next/image";
import { DM_Sans, Manrope } from "next/font/google";
import { ArrowRight } from "lucide-react";
import iconMotor from "../../../public/i1.png";
import iconHealth from "../../../public/i2.png";
import iconTravel from "../../../public/i3.png";
import iconBusiness from "../../../public/i4.png";
import iconProperty from "../../../public/i5.png";
import iconRenewal from "../../../public/i6.png";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["800"] });
const PAD = "px-4 sm:px-8 lg:px-12 xl:px-20";

const SERVICES = [
  {
    title: "Motor Insurance",
    text: "Protection for cars, two-wheelers and commercial vehicles, with options for cashless repairs, roadside assistance and zero depreciation cover.",
    icon: iconMotor,
    href: "#contact",
  },
  {
    title: "Health & Life Insurance",
    text: "Individual and family health cover, term and life insurance, critical illness protection, hospital cash and top-up plans.",
    icon: iconHealth,
    href: "#contact",
  },
  {
    title: "Travel & Personal Accident",
    text: "Explore comprehensive insurance protection options for worldwide travel emergencies and personal accident risks.",
    icon: iconTravel,
    href: "#contact",
  },
  {
    title: "Business & Commercial",
    text: "Discuss customized coverage solutions suited to your corporate liabilities, shopkeeper risks, and commercial insurance needs.",
    icon: iconBusiness,
    href: "#contact",
  },
  {
    title: "Property & Home Insurance",
    text: "Ask about dependable protection options safeguarding your structural properties, residential homes, and physical assets.",
    icon: iconProperty,
    href: "#contact",
  },
  {
    title: "Policy Renewal Support",
    text: "Keep your cover continuous and active with timely automated renewal reminders and convenient online or offline options.",
    icon: iconRenewal,
    href: "#contact",
  },
];

export default function EliteServices() {
  return (
    <section
      id="services"
      className={`
        ${dmSans.className}
        w-full
        bg-white
        py-14
        sm:py-20
        lg:py-24
        xl:pb-[150px]
        xl:pt-[140px]
        ${PAD}
      `}
    >
      <div className="mx-auto w-full max-w-[1465px]">
        {/* ========================= HEADER ========================= */}
        <div className="flex items-center gap-[10px]">
          <span aria-hidden="true" className="block h-[2px] w-6 bg-[#ED3445]" />
          <p
            className="text-[12px] uppercase text-[#ED3445]"
            style={{
              fontWeight: 700,
              lineHeight: "17.6px",
              letterSpacing: "1.76px",
            }}
          >
            What we offer
          </p>
        </div>

        <h2
          className={`${manrope.className} mt-3 max-w-[640px] text-[clamp(28px,7vw,45px)] text-[#101D35]`}
          style={{
            fontWeight: 800,
            lineHeight: "1.195",
            letterSpacing: "-0.035em",
          }}
        >
          Insurance solutions for every stage of life.
        </h2>

        <p
          className="mt-3 max-w-[760px] text-[15px] leading-[1.7] text-[#6A7486] sm:text-[16px] sm:leading-[28.8px]"
          style={{ fontWeight: 400 }}
        >
          Choose the right protection for your vehicle, health, family, travels,
          property or business.
        </p>

        {/* ========================= CARDS =========================
            1 column phones, 2 columns tablets, 3 columns from 1024px */}
        <ul className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-x-3 lg:gap-y-6">
          {SERVICES.map((s) => (
            <li
              key={s.title}
              className="
                group
                relative
                rounded-[18px]
                border
                border-[#E7EBF2]
                bg-white
                p-6
                transition-all
                duration-300
                ease-out
                hover:-translate-y-3
                hover:shadow-[0_14px_32px_rgba(16,29,53,0.14)]
                focus-within:-translate-y-3
                focus-within:shadow-[0_14px_32px_rgba(16,29,53,0.14)]
                motion-reduce:transition-none
                sm:p-8
                lg:px-8
                lg:py-9
              "
            >
              {/* Icon image (54px) */}
              <Image
                src={s.icon}
                alt=""
                aria-hidden="true"
                className="h-12 w-12 object-contain sm:h-[54px] sm:w-[54px]"
              />

              <h3
                className={`${manrope.className} mt-4 text-[19px] text-[#101D35] sm:text-[21px]`}
                style={{ fontWeight: 800, lineHeight: "100%" }}
              >
                {s.title}
              </h3>

              <p
                className="mt-3 text-[15px] leading-[1.6] text-[#6A7486] sm:text-[16px] sm:leading-[25.38px]"
                style={{ fontWeight: 400 }}
              >
                {s.text}
              </p>

              {/* Whole card is clickable through the ::after layer */}
              <Link
                href={s.href}
                className="
                  mt-3
                  inline-flex
                  items-center
                  gap-1
                  text-[13.5px]
                  text-[#ED3445]
                  after:absolute
                  after:inset-0
                  after:rounded-[18px]
                  after:content-['']
                  focus:outline-none
                  focus-visible:underline
                "
                style={{ fontWeight: 700, lineHeight: "21.6px" }}
              >
                Enquire now
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
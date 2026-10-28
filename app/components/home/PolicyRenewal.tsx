import Link from "next/link";
import { DM_Sans, Manrope } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["800"] });
const PAD = "px-4 sm:px-8 lg:px-12 xl:px-20";
const RENEWAL_HREF = "#contact";

export default function PolicyRenewal() {
  return (
    <section
      id="renewal"
      className={`
        ${dmSans.className}
        w-full
        bg-white
        py-10
        sm:py-14
        lg:py-20
        ${PAD}
      `}
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1760px]
          flex-col
          gap-6
          rounded-[20px]
          border-y
          border-[#FFA7AF]
          bg-[#FF85911A]
          px-5
          py-8
          sm:rounded-[24px]
          sm:px-8
          md:flex-row
          md:items-center
          md:justify-between
          md:gap-8
          lg:rounded-[30px]
          lg:px-12
          lg:py-[35px]
          xl:px-[100px]
          2xl:px-[148px]
        "
      >
        {/* ========================= TEXT ========================= */}
        <div className="min-w-0 md:max-w-[640px]">
          <div className="flex items-center gap-[10px]">
            <span
              aria-hidden="true"
              className="block h-[2px] w-6 bg-[#ED3445]"
            />
            <p
              className="text-[11px] uppercase text-[#ED3445]"
              style={{
                fontWeight: 700,
                lineHeight: "17.6px",
                letterSpacing: "1.76px",
              }}
            >
              Stay covered
            </p>
          </div>

          <h2
            className={`${manrope.className} mt-3 text-[clamp(26px,6.5vw,40px)] text-[#101D35]`}
            style={{
              fontWeight: 800,
              lineHeight: "1.1",
              letterSpacing: "-0.035em",
            }}
          >
            Never miss a policy renewal.
          </h2>

          <p
            className="mt-3 text-[15px] leading-[1.45] text-[#6A7486] sm:text-[16px]"
            style={{ fontWeight: 400 }}
          >
            Keep your coverage active without stress. Get timely reminders and
            assistance with convenient online or offline renewals.
          </p>
        </div>

        {/* ========================= BUTTON =========================
            Same hover as the claim button: colour changes, size stays */}
        <Link
          href={RENEWAL_HREF}
          className="
            group
            inline-flex
            w-full
            shrink-0
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
            sm:w-[274px]
            sm:max-w-full
          "
          style={{ fontWeight: 700, lineHeight: "22.4px" }}
        >
          Request Renewal Help
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
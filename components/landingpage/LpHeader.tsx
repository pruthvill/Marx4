import type { NextPage } from "next";
import { memo } from "react";
import { Link } from "react-scroll";
import Image from 'next/image';
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const LpHeader: NextPage = memo(() => {
  return (
    <header
      className="self-stretch flex flex-row items-start justify-end pt-[0.2rem] pb-[0.381rem] pr-[1.106rem] pl-[0rem] box-border max-w-full text-left text-[1rem] text-gray-900 font-poppins"
      style={{
        overflowX: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <div
        className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <Image
          className="h-[4.35rem] w-[4.037rem] relative"
          src="/logo.svg"
          alt=""
          width={64}
          height={70}
        />
        <div className="w-[20.625rem] flex flex-col items-start justify-start pt-[0.2rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
            <Link
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex flex-col items-start justify-start pt-[0.75rem] px-[1rem] pb-[0.75rem] cursor-pointer"
            >
              <b className="relative tracking-[-0.02em] leading-[1.5rem] inline-block min-w-[4.438rem]">
                Features
              </b>
            </Link>
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex flex-col items-start justify-start pt-[0.75rem] px-[1rem] pb-[0.75rem] cursor-pointer text-blue-600 hover:text-blue-700"
            >
              <b className="relative tracking-[-0.02em] leading-[1.5rem] inline-block min-w-[4.438rem]">
                Pricing
              </b>
            </Link>
            <div className="rounded-69xl [background:linear-gradient(98.19deg,_#0047ff,_#0022ff)] flex flex-row items-start justify-start py-[0.75rem] px-[1rem] whitespace-nowrap text-neutral-white">
              <b className="relative tracking-[-0.02em] leading-[1.5rem] inline-block whitespace-pre-wrap min-w-[3.563rem]">
                <LoginLink>Sign in</LoginLink>
              </b>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

LpHeader.displayName = 'LpHeader';
export default LpHeader;

import type { NextPage } from "next";
import { memo } from "react";
import Image from 'next/image';
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


const TitleDemo: NextPage = memo(() => {
  return (
    <section className="w-[81.188rem] flex flex-row items-start justify-end pt-[0rem] px-[3.938rem] pb-[2.231rem] box-border max-w-full text-center text-[4.313rem] text-gray-900 font-poppins lg:pl-[1.938rem] lg:pr-[1.938rem] lg:box-border mb-72">
      <div className="flex-1 flex flex-col items-start justify-start gap-[5.625rem] max-w-full lg:gap-[2.813rem] mq750:gap-[1.375rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[3.938rem] max-w-full lg:gap-[1.938rem] mq750:gap-[1rem]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[4.5rem] font-bold font-inherit mq450:text-[2.563rem] mq450:leading-[2.688rem] mq1050:text-[3.438rem] mq1050:leading-[3.625rem]">
            One Place for all your Social Boookmarks
          </h1>
          <div className="w-[72rem] flex flex-col items-center justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1rem] text-blue">
            <div className="flex flex-row items-center justify-center gap-[0.25rem] mq450:flex-wrap">
              <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.5rem] bg-[transparent] rounded-69xl [background:linear-gradient(98.19deg,_#0047ff,_#0022ff)] flex flex-row items-center justify-center whitespace-nowrap">
                <b className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] inline-block font-poppins text-neutral-white text-left min-w-[3.75rem]">
                <RegisterLink>Sign up</RegisterLink>
                </b>
              </button>
              <div className="rounded-80xl flex flex-row items-center justify-center py-[0.5rem] px-[1.5rem] gap-[0.5rem]">
                <b className="relative tracking-[-0.02em] leading-[1.5rem] inline-block min-w-[6.25rem]">
                  How it works
                </b>
                <Image
                  src="/icon.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="h-[2rem] w-[2rem] relative rounded-80xl overflow-hidden shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[3.063rem] box-border lg:pl-[1.5rem] lg:pr-[1.5rem] lg:box-border">
          <Image
            src="/Home.png"
            alt=""
            width={1230}
            height={1128}
            className=" flex-1 relative rounded-3xs   object-cover"
          />
        </div>
      </div>
    </section>
  );
});

TitleDemo.displayName = 'TitleDemo';
export default TitleDemo;

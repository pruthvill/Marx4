import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";

const Footer: NextPage = memo(() => {
  return (
    <footer className="w-[82.5rem] flex flex-col justify-center max-w-full text-left text-[2.313rem] text-gray-900 font-poppins">
      <div className="w-[70rem] flex flex-col items-start gap-[2rem] max-w-full mq750:gap-[1rem]">
        <div className="self-stretch h-[0.063rem] border-t border-neutral-200" />

        <div className="w-full flex justify-between items-center">
          <div className="w-[6.688rem] flex items-start justify-start py-0 px-[0.25rem] box-border">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.03em] leading-[4.5rem] font-black font-inherit z-1 mq450:text-[1.375rem] mq450:leading-[2.688rem] mq1050:text-[1.875rem] mq1050:leading-[3.625rem]">
              Marx
            </h1>
          </div>

          <div className="flex items-center space-x-8 text-[0.875rem] text-neutral-900 font-body-small">
            <div className="tracking-[1.25px] leading-[1.5rem] uppercase font-medium">
              Company
            </div>
            <div className="tracking-[1.25px] leading-[1.5rem] uppercase font-medium">
              Product
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="tracking-[1.25px] leading-[1.5rem] uppercase font-medium">
                Support
              </div>
            </div>
            <div className="tracking-[1.25px] leading-[1.5rem] uppercase font-medium">
              Office
            </div>
          </div>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start gap-[2.938rem] max-w-full text-right text-[0.875rem] text-neutral-900 font-body-small mq750:gap-[1.438rem]">
          <div className="self-stretch h-[0.063rem] border-t border-neutral-200" />

          <div className="self-stretch flex flex-wrap items-start justify-start gap-[1.5rem] max-w-full">
            <div className="flex items-start gap-[1rem]">
              <Image
                className="h-[1.5rem] w-[1.5rem] overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                width={24}
                height={24}
                src="/filllogosfacebookcirclefill.svg"
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                width={24}
                height={24}
                src="/filllogosinstagramfill.svg"
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                width={24}
                height={24}
                src="/filllogostwitterfill.svg"
              />
            </div>

            <div className="flex-1 relative tracking-[-0.09px] leading-[1.5rem] inline-block min-w-[8.938rem] max-w-full">
              Copyright ©2022 Mark2.co
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer'; // Add a display name to your component

export default Footer;

import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";

const Pricing: NextPage = memo(() => {
  return (
    <div id="pricing" className="flex flex-col items-end justify-start gap-[6.125rem] max-w-full text-center text-[3.5rem] text-black font-poppins mq450:gap-[1.5rem] mq750:gap-[3.063rem] mb-40">
      <div className="w-[81.375rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
        <h1 className="m-0 h-[5.625rem] w-[12.75rem] relative text-inherit tracking-[-0.02em] font-black font-inherit inline-block shrink-0 mq450:text-[2.125rem] mq1050:text-[2.813rem]">
          <p className="m-0">Pricing</p>
        </h1>
      </div>
      <div className="w-[82.813rem] overflow-x-auto flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-[1.813rem] text-gray1-100 font-body-small">
        <div className="w-[24.188rem] rounded-mini box-border shrink-0 flex flex-col items-start justify-start pt-[4.125rem] px-[3.125rem] pb-[5.188rem] gap-[4.625rem] z-[2] border-[2px] border-solid border-black mq750:pt-[2.688rem] mq750:pb-[3.375rem] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.75rem] pl-[1.7rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[3.5rem] pl-[3.463rem]">
                <h1 className="m-0 w-[7.313rem] relative text-inherit leading-[2.063rem] font-bold font-inherit inline-block min-w-[7.313rem] mq450:text-[1.438rem] mq450:leading-[1.625rem]">
                  Monthly
                </h1>
              </div>
              <div className="self-stretch relative text-[0.938rem] leading-[1.25rem] text-black">
                Great for basic bookmark needs
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[3.063rem] text-[2.5rem] text-black">
            <div className="w-[15.956rem] flex flex-col items-end justify-start gap-[2.125rem]">
              <div className="flex flex-row items-start justify-end py-[0rem] pr-[4.169rem] pl-[4.188rem]">
                <b className="w-[6rem] relative leading-[1.875rem] uppercase inline-block">
                  <p className="m-0">$20</p>
                  <p className="m-0 text-[1rem]">per month</p>
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[2.375rem] text-left text-[0.938rem]">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.706rem]">
                  <div className="h-[0.125rem] flex-1 relative bg-neutral-white overflow-hidden" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.669rem]">
                  <b className="relative leading-[1.125rem] uppercase">
                    What’s included:
                  </b>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.688rem] text-[0.875rem]">
                    <div className="relative leading-[1.25rem] inline-block min-w-[7.813rem]">{`Centralized Bookmarks`}</div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.813rem] pl-[1.688rem]">
                    <div className="relative leading-[1.25rem] inline-block min-w-[7.813rem]">{`Search & Filtering`}</div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[1.688rem] text-[0.875rem]">
                    <div className="relative leading-[1.25rem] inline-block min-w-[2.5rem]">{`Notes `}</div>
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[3.875rem] relative">
              <b className="absolute top-[1.438rem] left-[5.819rem] text-[0.875rem] leading-[1rem] uppercase flex font-body-small text-black text-left items-center min-w-[4.188rem]">
                Try free
              </b>
              <div className="absolute top-[0rem] left-[0rem] w-full h-full">
                <Image
                  className="absolute top-[1.438rem] left-[10.469rem] w-[1.375rem] h-[1rem] overflow-hidden"
                  alt=""
                  width={22}
                  height={16}
                  src="/svg.svg"
                />
                <div className="absolute top-[0rem] left-[0rem] rounded-mini box-border w-full h-full z-[1] border-[2px] border-solid border-black" />
              </div>
            </button>
          </div>
          <div className="w-[24.188rem] h-[40.625rem] relative rounded-mini box-border hidden max-w-full border-[2px] border-solid border-black" />
        </div>
        <div className="w-[24.188rem] rounded-mini box-border shrink-0 flex flex-col items-start justify-start pt-[4.125rem] px-[3.125rem] pb-[5.188rem] gap-[4.625rem] z-[2] border-[2px] border-solid border-black mq750:pt-[2.688rem] mq750:pb-[3.375rem] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.438rem] pl-[2.388rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.875rem] pl-[2.775rem]">
                <h1 className="m-0 w-[7.25rem] relative text-inherit leading-[2.063rem] font-bold font-inherit inline-block min-w-[7.25rem] mq450:text-[1.438rem] mq450:leading-[1.625rem]">
                  Lifetime
                </h1>
              </div>
              <div className="self-stretch relative text-[0.938rem] leading-[1.25rem] text-black">
                Great for knowledge workers
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[3.063rem] text-[2.5rem] text-mediumblue">
            <div className="w-[15.956rem] flex flex-col items-end justify-start gap-[2.125rem]">
              <div className="flex flex-row items-start justify-end py-[0rem] pr-[3.856rem] pl-[3.875rem]">
                <b className="w-[6.563rem] relative leading-[1.875rem] uppercase inline-block">
                  <p className="m-0">$299</p>
                  <p className="m-0 text-[1rem]">Lifetime</p>
                </b>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[2.375rem] text-left text-[0.938rem] text-black">
                <div className="w-[14.25rem] h-[0.125rem] relative bg-neutral-white overflow-hidden shrink-0" />
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.394rem] pl-[0rem]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.669rem]">
                    <b className="relative leading-[1.125rem] uppercase">
                      What’s included:
                    </b>
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[1.688rem] text-[0.875rem]">
                      <div className="relative leading-[1.25rem] inline-block min-w-[5.188rem]">
                        UI execution
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[1.688rem]">
                      <div className="relative leading-[1.25rem] inline-block min-w-[7.813rem]">
                        Connect on Slack
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.688rem] text-[0.875rem]">
                      <div className="relative leading-[1.25rem]">
                        One 30 minute meeting a week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[3.875rem] relative">
              <b className="absolute top-[1.438rem] left-[5.819rem] text-[0.875rem] leading-[1rem] uppercase flex font-body-small text-black text-left items-center min-w-[4.188rem]">
                Try free
              </b>
              <div className="absolute top-[0rem] left-[0rem] w-full h-full">
                <Image
                  className="absolute top-[1.438rem] left-[10.469rem] w-[1.375rem] h-[1rem] overflow-hidden"
                  alt=""
                  width={22}
                  height={16}
                  src="/svg.svg"
                />
                <div className="absolute top-[0rem] left-[0rem] rounded-mini box-border w-full h-full z-[1] border-[2px] border-solid border-black" />
              </div>
            </button>
          </div>
          <div className="w-[24.188rem] h-[40.625rem] relative rounded-mini box-border hidden max-w-full border-[2px] border-solid border-black" />
        </div>
        <div className="w-[24.188rem] rounded-mini box-border shrink-0 flex flex-col items-start justify-start pt-[4.125rem] px-[3.125rem] pb-[5.188rem] gap-[3.063rem] z-[2] border-[2px] border-solid border-black mq750:pt-[2.688rem] mq750:pb-[3.375rem] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1.563rem] pr-[1.063rem] pl-[1.013rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem]">
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.313rem] pl-[1.25rem]">
                <h1 className="m-0 w-[5.563rem] relative text-inherit leading-[2.063rem] font-bold font-inherit flex items-center justify-center min-w-[5.563rem] mq450:text-[1.438rem] mq450:leading-[1.625rem]">
                  Yearly
                </h1>
              </div>
              <div className="self-stretch relative text-[0.938rem] leading-[1.25rem] text-black whitespace-pre-wrap">
                Great for rationalists and postsrats
              </div>
            </div>
          </div>
          <div className="w-[15.956rem] flex flex-col items-end justify-start gap-[2.125rem] text-[2.5rem] text-black">
            <div className="flex flex-row items-start justify-end py-[0rem] pr-[4.169rem] pl-[4.188rem]">
              <b className="w-[6rem] relative leading-[1.875rem] uppercase inline-block">
                <p className="m-0">$17</p>
                <p className="m-0 text-[1rem]">per month</p>
              </b>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[2.375rem] text-left text-[0.938rem]">
              <div className="w-[14.25rem] h-[0.125rem] relative bg-neutral-white overflow-hidden shrink-0" />
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.394rem] pl-[0rem]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.669rem]">
                  <b className="relative leading-[1.125rem] uppercase">
                    What’s included:
                  </b>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[1.688rem] text-[0.875rem]">
                    <div className="relative leading-[1.25rem] inline-block min-w-[5.188rem]">
                      UI execution
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[1.688rem]">
                    <div className="relative leading-[1.25rem] inline-block min-w-[7.813rem]">
                      Connect on Slack
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.688rem] text-[0.875rem]">
                    <div className="relative leading-[1.25rem]">
                      One 30 minute meeting a week
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[3.875rem] relative">
            <b className="absolute top-[1.438rem] left-[5.819rem] text-[0.875rem] leading-[1rem] uppercase flex font-body-small text-black text-left items-center min-w-[4.188rem]">
              Try free
            </b>
            <div className="absolute top-[0rem] left-[0rem] w-full h-full">
              <Image
                className="absolute top-[1.438rem] left-[10.469rem] w-[1.375rem] h-[1rem] overflow-hidden"
                alt=""
                width={22}
                height={16}
                src="/svg.svg"
              />
              <div className="absolute top-[0rem] left-[0rem] rounded-mini box-border w-full h-full z-[1] border-[2px] border-solid border-black" />
            </div>
          </button>
          <div className="w-[24.188rem] h-[40.625rem] relative rounded-mini box-border hidden max-w-full border-[2px] border-solid border-black" />
        </div>
      </div>
    </div>
  );
});

Pricing.displayName = 'Pricing'; // Add a display name to your component

export default Pricing;

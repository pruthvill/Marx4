import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";

const Features: NextPage = memo(() => {
  return (
<section
  id="features"
  className="w-[82.813rem] flex flex-col items-center justify-center pt-0 px-0 pb-12 box-border max-w-full text-center text-[3.5rem] text-black font-poppins md:gap-4 lg:gap-8 lg:pb-10 lg:box-border xl:pb-12 xl:box-border mb-52"
>
<h1 className="m-0 h-[5.625rem] w-[12.75rem] relative text-inherit tracking-[-0.02em] font-black font-inherit inline-block shrink-0 mq450:text-[2.125rem] mq1050:text-[2.813rem]">
          <p className="m-0">Features</p>
        </h1>
  <div className="w-[49.863rem] flex flex-col items-center justify-center gap-14 md:gap-6">
    <div className="w-[48.625rem] flex flex-row items-center justify-center py-0 px-0 box-border ">
      <h2 className="text-[2.525rem] font-black mb-4 md:mb-0 pb-4">
        20+ Integrated Apps
      </h2>
    </div>
    <Image
      className="self-stretch  relative  overflow-hidden shrink-0 cursor-pointer mb-8"
      alt=""
      src="/apps.svg"
      width={2000}
      height={2000}
    />
  </div>

      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.113rem] pl-[1.375rem] box-border max-w-full text-left text-[1.625rem] text-gray1-200 font-body-small">
        <div className="h-[41.075rem] flex-1 flex flex-row flex-wrap items-start justify-start relative gap-[2.125rem_1.938rem] max-w-full mq450:h-auto mq450:min-h-[657.2]">
          <div className="w-[25.4rem] !m-[0] absolute top-[0rem] left-[0rem] rounded-3xs box-border flex flex-col items-start justify-start pt-[2.563rem] pb-[3.488rem] pr-[1.25rem] pl-[2.188rem] gap-[4.688rem] max-w-full border-[2px] border-solid border-black">
            <div className="w-[25.4rem] h-[18.8rem] relative rounded-3xs box-border hidden max-w-full border-[2px] border-solid border-black" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="w-[5.375rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border">
                <h2 className="m-0 self-stretch h-[2.25rem] relative text-inherit leading-[160%] font-bold font-inherit inline-block shrink-0 z-[1] mq450:text-[1.313rem] mq450:leading-[2.063rem]">
                  Notes
                </h2>
              </div>
              <Image
                className="h-[3.125rem] w-[3.094rem] relative z-[1]"
                loading="lazy"
                alt=""
                width={100}
                height={100}
                src="/vector.svg"
              />
            </div>
            <div className="w-[20.688rem] flex flex-row items-start justify-start py-[0rem] px-[0.5rem] box-border max-w-full text-[1.5rem] text-gray1-300">
              <h2 className="m-0 h-[4.563rem] flex-1 relative text-inherit leading-[160%] font-medium font-inherit inline-block z-[1] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                Take Notes on your Bookmarks
              </h2>
            </div>
          </div>
          <div className="w-[31.62%] !m-[0] absolute h-[45.77%] top-[0%] right-[34.19%] bottom-[54.23%] left-[34.19%] rounded-3xs box-border flex flex-col items-start justify-start pt-[3rem] pb-[2.55rem] pr-[0.938rem] pl-[1.563rem] gap-[4.313rem] max-w-full z-[1] text-black border-[2px] border-solid border-black">
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[0.813rem] px-[0rem] pb-[0rem]">
                <h2 className="m-0 relative text-inherit leading-[2.625rem] font-bold font-inherit mq450:text-[1.313rem] mq450:leading-[2.063rem]">
                  {" "}
                  Bookmarks
                </h2>
              </div>
              <Image
                className="h-[3.125rem] w-[3rem] relative"
                loading="lazy"
                alt=""
                src="/xmlid-49.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.375rem] box-border max-w-full text-[1.5rem] text-gray1-300">
              <h2 className="m-0 h-[5.5rem] flex-1 relative text-inherit leading-[160%] font-medium font-inherit inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                All your social bookmarks, links and files in one place
              </h2>
            </div>
            <div className="w-[25.4rem] h-[18.8rem] relative rounded-3xs box-border hidden max-w-full border-[2px] border-solid border-black" />
          </div>
          <div className="w-[25.4rem] !m-[0] absolute top-[0rem] left-[54.925rem] rounded-3xs box-border flex flex-col items-start justify-start pt-[2.563rem] pb-[3.488rem] pr-[1rem] pl-[2.063rem] gap-[4.625rem] max-w-full border-[2px] border-solid border-black">
            <div className="w-[25.4rem] h-[18.8rem] relative rounded-3xs box-border hidden max-w-full border-[2px] border-solid border-black" />
            <div className="w-[21.125rem] flex flex-row items-end justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
              <div className="w-[7.5rem] flex flex-row items-start justify-start">
                <b className="flex-1 relative leading-[2.313rem] z-[1] mq450:text-[1.313rem] mq450:leading-[2.063rem]">
                  Search
                </b>
                <b className="flex-1 relative leading-[2.313rem] inline-block z-[2] ml-[-7.5rem] mq450:text-[1.313rem] mq450:leading-[2.063rem]">
                  Search
                </b>
              </div>
              <div className="w-[3.125rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.438rem] box-border">
                <div className="self-stretch h-[3.125rem] relative">
                  <Image
                    className="absolute top-[0rem] left-[0rem] w-full h-full z-[1]"
                    alt=""
                    src="/vector-1.svg"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="absolute top-[0rem] left-[0rem] w-full h-full z-[2]"
                    alt=""
                    src="/vector-2.svg"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] box-border max-w-full text-[1.5rem] text-gray1-300">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch h-[4.563rem] relative leading-[160%] font-medium whitespace-pre-wrap inline-block shrink-0 z-[1] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                  Search through your all bookmarks
                </div>
                <div className="self-stretch h-[4.563rem] relative leading-[160%] font-medium whitespace-pre-wrap inline-block shrink-0 z-[2] mt-[-4.562rem] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                  Search through your all bookmarks
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25.4rem] !m-[0] absolute top-[20.925rem] left-[0rem] rounded-3xs box-border flex flex-col items-start justify-start pt-[2.631rem] pb-[2.769rem] pr-[1.313rem] pl-[2.063rem] gap-[5.875rem] max-w-full text-black border-[2px] border-solid border-black">
            <div className="w-[25.4rem] h-[20.15rem] relative rounded-3xs box-border hidden max-w-full border-[2px] border-solid border-black" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="w-[8rem] flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border">
                <h2 className="m-0 self-stretch h-[2.25rem] relative text-inherit leading-[160%] font-bold font-inherit inline-block shrink-0 z-[1] mq450:text-[1.313rem] mq450:leading-[2.063rem]">
                  Spaces
                </h2>
              </div>
              <Image
                className="h-[3.125rem] w-[3.125rem] relative z-[1]"
                alt=""
                width={100}
                height={100}
                src="/vector-3.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0.5rem] box-border max-w-full text-[1.5rem] text-gray1-300">
              <h2 className="m-0 h-[5.5rem] flex-1 relative text-inherit leading-[160%] font-medium font-inherit inline-block max-w-full z-[1] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                Find content similar to your Bookmarks
              </h2>
            </div>
          </div>
          <div className="w-[25.4rem] !m-[0] absolute top-[20.925rem] left-[27.463rem] rounded-3xs box-border flex flex-col items-start justify-start pt-[2.631rem] pb-[2.769rem] pr-[1.063rem] pl-[2.063rem] gap-[5.875rem] max-w-full border-[2px] border-solid border-black">
            <div className="w-[25.4rem] h-[20.15rem] relative rounded-3xs box-border hidden max-w-full border-[2px] border-solid border-black" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="w-[6.063rem] flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border">
                <b className="self-stretch h-[2.25rem] relative leading-[160%] inline-block shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-[1.313rem] mq450:leading-[2.063rem]">
                  Filter
                </b>
              </div>
              <Image
                className="h-[3.125rem] w-[2.775rem] relative shrink-0 [debug_commit:f6aba90] z-[1]"
                alt=""
                width={100}
                height={100}
                src="/vector-4.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.5rem] box-border max-w-full text-[1.5rem] text-gray1-300">
              <h2 className="m-0 h-[5.5rem] flex-1 relative text-inherit leading-[160%] font-medium font-inherit inline-block max-w-full z-[1] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                Filter your bookmarks from file and platform types.
              </h2>
            </div>
          </div>
          <div className="w-[25.4rem] !m-[0] absolute top-[20.925rem] left-[54.925rem] rounded-3xs box-border flex flex-col items-start justify-start pt-[2.631rem] pb-[3.394rem] pr-[0.688rem] pl-[2.063rem] gap-[5.188rem] max-w-full text-black border-[2px] border-solid border-black">
            <div className="w-[25.4rem] h-[20.15rem] relative rounded-3xs box-border hidden max-w-full border-[2px] border-solid border-black" />
            <div className="w-[20.763rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
              <div className="w-[10.5rem] flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border">
                <h2 className="m-0 self-stretch h-[2.313rem] relative text-inherit leading-[160%] font-bold font-inherit inline-block shrink-0 z-[1] mq450:text-[1.313rem] mq450:leading-[2.063rem]">
                  Community
                </h2>
              </div>
              <Image
                className="h-[3.125rem] w-[3.575rem] relative z-[1]"
                alt=""
                src="/icon-1.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] box-border max-w-full text-[1.5rem] text-gray1-300">
              <h2 className="m-0 h-[5.5rem] flex-1 relative text-inherit leading-[160%] font-medium font-inherit inline-block max-w-full z-[1] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                Find your and connect to your Tribe.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Features.displayName = "features";

export default Features;

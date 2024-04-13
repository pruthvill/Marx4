"use client";
import React from 'react';

import Footer from "../components/landingpage/Footer";
import Pricing from "../components/landingpage/Pricing";
import Features from "../components/landingpage/Features";
import TitleDemo from "../components/landingpage/TitleDemo";
import LpHeader from "../components/landingpage/LpHeader";


export default function Home() {
  return (
    <div className="w-full relative rounded-3xl bg-gradient-to-b from-[#f0f0f0]  to-[rgba(219,219,220,0.34)] box-border overflow-hidden flex flex-col items-center justify-center py-4 px-12 gap-24 leading-normal tracking-normal text-center text-sm text-neutral-900 font-body-small md:gap-6 lg:gap-12 lg:pl-6 lg:pr-6 lg:box-border">
    
<LpHeader />
      <TitleDemo />
      <Features />
      <Pricing />
      <Footer />

    </div>
  );
}
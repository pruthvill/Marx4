"use client";

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MyHomeIcon, NoteIcon, FilterIcon, DiceIcon, SearchIcon } from "./svgs";
import { FilterMenu } from "./FilterMenu";
import { MarxMenu } from "./MarxMenu";
import Note from "./notes/Note";

function Header() {
  
  return (
    <header className="flex md:flex-row   bg-[#E2E2E2] items-center justify-between p-4  rounded-md border-b-2 border-gray-400">
      <Link href="/" className=" ">
      <MarxMenu/>
     
      </Link>

      <div className="flex flex-grow justify-center items-center  gap-8  ">
        <Link href="/" className="hidden xl:flex items-center space-x-2">
          <MyHomeIcon className="text-3xl hover-black" />
        </Link>

        <Link href="/" className="hidden xl:flex items-center space-x-2">
        <NoteIcon className="text-3xl hover-black"  />
      </Link>
        <Link href="/" className="hidden xl:flex items-center space-x-2">
          <FilterIcon className="text-3xl hover-black" />
        </Link>

        <Link href="/basket" className="hidden xl:flex items-center space-x-2">
          <DiceIcon className="text-3xl hover-black" />
        </Link>

        <Link href="/basket" className="hidden xl:flex items-center space-x-2">
          <SearchIcon className="text-3xl hover-black" />
        </Link>
      </div>
    </header>
  );
}

export default Header;

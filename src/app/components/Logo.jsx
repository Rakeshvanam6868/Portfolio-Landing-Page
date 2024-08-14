import React from 'react'
import { montserrat } from "../layout";
import Image from "next/image";
import logo from "@/app/public/logoImage.svg";
const Logo = () => {
  return (
    <div className="w-[279px] h-[67px] flex items-center gap-[22px]">
        <Image className="w-[67px] h-[67px]" src={logo} alt=" " />
        <b className={`${montserrat.className} font-[700] mt-[4px] h-[59px] text-[48px]`}>M</b>
        <p className={`${montserrat.className} w-[170px] h-[59px] mt-[4px] ml-[-20px] text-[48px] font-[400] text-[#545454]`}>umair</p>
      </div>
  )
}

export default Logo
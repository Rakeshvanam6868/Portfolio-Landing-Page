import React from 'react'
import Image from 'next/image';
import { poppins } from '../layout';

const ServicesDesign = ({ imageSrc, title, description }) => {
  return (
    <div className={`w-[330px] h-[346px] rounded-[14px] bg-gray-100`}>
      <div className={`relative w-[294px] mt-[50px] h-[279px]`}>
        <Image
          src={imageSrc}
          alt={title}
          width={"70px"}
          height={"70px"}
          className={`ml-[18px]`}
        />
        <p className={`w-[300px] h-[48px] ml-[18px] mt-[15px] ${poppins.className} font-[600] text-[32px] tracking-[3%]`}>
          {title}
        </p>
        <p className={`w-[290px] h-[120px] mt-[10px] ml-[22px] ${poppins.className} font-[400] text-[19px] tracking-[3%]`}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServicesDesign;

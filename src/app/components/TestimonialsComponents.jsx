import Image from 'next/image';
import React from 'react';
import { poppins } from '../layout';

const TestimonialsComponents = ({ width, height, top, left, gap, borderRadius, opacity, imageSrc, description, name, title, overflow }) => {
  const containerStyles = {
    width,
    height,
    top,
    left,
    gap,
    borderRadius,
    opacity,
    position: 'absolute' // To ensure absolute positioning within the parent container
  };

  return (
    <div className={`rounded-[14px] bg-[#F8F8F8] flex`} style={containerStyles}>
      <div className={`p-[50px]`}>
        <Image
          src={imageSrc}
          alt={name}
          width={235}
          height={235}
          className='z-10'
        />
      </div>
      <div className={`w-[716px] h-[236px] mt-[50px]`}>
        <div className={`w-[18px] h-[48px] text-[#FD6F00] font-[700] text-[32px] tracking-[2%]`}>&quot;</div>
        <p className={`w-[698px] h-[146px] ${poppins.className} font-[400] text-[21px] mt-[-20px] ml-[20px] tracking-[2%] text-[#424242]`}>
          {description}
        </p>
        <div className={`w-[18px] mt-[-30px] ml-[460px] h-[48px] text-[#FD6F00] font-[700] text-[32px] tracking-[2%]`}>&quot;</div>
        <div className={`w-[75px] h-[36px]`}>
          <p className={`${poppins.className} font-[500] text-[24px] mt-[-20px] ml-[20px] tracking-[2%] text-[#000000]`}>{name}</p>
        </div>
        <div className={`w-[41px] h-[29px]`}>
          <p className={`${poppins.className} font-[400] text-[19px] mt-[0px] ml-[20px] tracking-[2%] text-[#000000]`}>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsComponents;

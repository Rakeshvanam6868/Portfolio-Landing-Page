import Image from 'next/image';
import React from 'react';
import { poppins } from '../layout';

const ProjectsShowCase = ({
  width,
  height,
  top,
  left,
  gap,
  imageSrcFront,
  imageSrcBack,
  category,
  description,
}) => {
  const containerStyles = {
    width,
    height,
    top,
    left,
    gap,
  };

  return (
    <div className={`absolute`} style={containerStyles}>
      <div className={`w-full h-[489px] rounded-[12px] bg-[#FFEBDB]`}>
        <div className={`relative`}>
          <Image
            src={imageSrcFront}
            alt={description}
            width={274}
            height={405}
            className={`absolute mt-[90px] ml-[39px] z-10`}
          />
          <Image
            src={imageSrcBack}
            alt={description}
            width={274}
            height={489}
            className={`absolute ml-[114px]`}
          />
        </div>
      </div>
      <div className={`w-[119px] h-[29px] mt-[30px]`}>
        <p className={`${poppins.className} font-[400] text-[19px] tracking-[3%] text-[#FD6F00]`}>
          {category}
        </p>
      </div>
      <div className={`w-[408px] h-[36px] mt-[20px]`}>
        <p className={`${poppins.className} font-[700] text-[24px] tracking-[3%] `}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectsShowCase;

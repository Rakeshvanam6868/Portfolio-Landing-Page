import React from 'react';
import { poppins } from '../layout';
import TestimonialsComponents from './TestimonialsComponents';
import Avatar1 from "@/app/public/AvatarTest.png";
import Avatar2 from "@/app/public/AvatarTest2.png";
import Image from 'next/image';
const Testimonials = () => {
  return (
    <div className={`absolute w-full max-w-[1910px] mx-auto h-[733px] mt-[3700px] ml-[-757px] `}>
      <div className={`absolute w-[446px] h-[98px] ml-[1490px]`}>
        <p className={`${poppins.className} font-[600] text-[65px] tracking-[3%] text-center `}>Testimonials</p>
      </div>
      <div className={`absolute w-[932px] h-[101px] mt-[113px] ml-[1247px]`}>
        <p className={`${poppins.className} font-[400] text-[21px] tracking-[3%] text-center `}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className={`flex overflow-x-hidden`} >
        {/* 1st layout */}
        <TestimonialsComponents
          imageSrc={Avatar1}
          description="Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
          name="Name"
          title="CEO"
          opacity={0.2}
          borderRadius="14px"
          width="1087px"
          height="344px"
          top="286px"
          left="0px"
          gap="0px"
        />
        {/* 2nd layout */}
        <TestimonialsComponents
          imageSrc={Avatar1}
          description="Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
          name="Name"
          title="CEO"
          opacity={1}
          borderRadius="14px"
          width="1087px"
          height="344px"
          top="286px"
          left="1149px"
          gap="0px"
        />
        {/* 3rd layout */}
        <div className={`absolute rounded-tl-[14px] rounded-bl-[14px] bg-[#F8F8F8] flex opacity-[0.2] w-[389px] h-[344px] mt-[286px] ml-[2288px]`}>
         <div className={`pt-[50px] pl-[40px]`}>
        <Image
          src={Avatar2}
          alt={"Name"}
          width={225}
          height={225}
          className='z-10'
        />
      </div>
      <div className={`w-[0px] h-[236px] mt-[50px]`}>
        <div className={` ml-[15px] w-[0px] h-[48px] text-[#FD6F00] font-[700] text-[32px] tracking-[2%]`}>&quot;</div>
        <p className={`w-[28px] h-[146px] ${poppins.className} font-[400] text-[21px] mt-[-20px] ml-[40px] tracking-[2%] text-[#424242]`}>
        Lorem accum condim digniss 
        </p>
        
        <div className={`w-[0px]  h-[36px]`}>
          <p className={`${poppins.className} font-[500] text-[24px] mt-[-10px] ml-[40px] tracking-[2%] text-[#000000]`}>Name</p>
        </div>
        <div className={`w-[0px] h-[29px]`}>
          <p className={`${poppins.className} font-[400] text-[19px] mt-[0px] ml-[40px] tracking-[2%] text-[#000000]`}>CEO</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Testimonials;

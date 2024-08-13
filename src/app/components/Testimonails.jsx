import React from 'react';
import { poppins } from '../layout';
import TestimonialsComponents from './TestimonialsComponents';
import Avatar1 from "@/app/public/AvatarTest.png";
import Avatar2 from "@/app/public/AvatarTest2.png";
const Testimonials = () => {
  return (
    <div className={`absolute w-[3385px] h-[733px] mt-[3700px] ml-[-557px]`}>
      <div className={`absolute w-[446px] h-[98px] ml-[1490px]`}>
        <p className={`${poppins.className} font-[600] text-[65px] tracking-[3%] text-center `}>Testimonials</p>
      </div>
      <div className={`absolute w-[932px] h-[101px] mt-[113px] ml-[1247px]`}>
        <p className={`${poppins.className} font-[400] text-[21px] tracking-[3%] text-center `}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className={`absolute flex `} >
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
        <TestimonialsComponents
          imageSrc={Avatar2}
          description="Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
          name="Name "
          title="CEO "
          opacity={0.2}
          borderRadius="14px"
          width="1087px"
          height="344px"
          top="286px"
          left="2298px"
          gap="0px"
        />
      </div>
    </div>
  );
}

export default Testimonials;

import React from 'react'
import { poppins } from '../layout';
import ServicesDesign from './ServicesDesign';
import { servicesData } from "../data/index";

const Services = () => {


  return (
    <div className={`absolute w-[1413] h-[584px] mt-[1818px] ml-[250px]`}>
          <div className={`absolute w-[292px] h-[98px] ml-[559px]`}>
            <p className={`absolute ${poppins.className} font-[600] text-[65px] text-center tracking-[3%]`}>Services</p>
          </div>
          <div className={`absolute w-[932px] h-[101px] mt-[113px] ml-[239px]`}>
            <p className={`${poppins.className} font-[400] text-[21px] tracking-[3%] text-center`}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
          </div>
        <div className={`absolute flex space-x-[22px] ml-[20px] mt-[238px]`}>
        {servicesData.map((service, index) => (
          <ServicesDesign
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Services;
"use client";
import Image from 'next/image'
import React from 'react'
import avatar from '@/app/public/Aboutavatart.png'
import { poppins } from '../layout';
import DesignHeading from './DesignHeading';
const About = () => {
  return (
    <div className={`absolute w-[1470px] h-[675px] mt-[1004px] ml-[25px]`}>
      <div className={`absolute bg-orange-600 opacity-70 w-[374px] h-[83px] mt-[112px] ml-[303px] z-10`}></div>
        <div className={`absolute w-[681px] h-[675px] ml-[150px] `}>
            <Image
                src={avatar}
                alt=""
            />
        </div>
        <div className="flex items-start flex-col">
            <p className={`absolute w-[330px] h-[98px] mt-[55px] ml-[854px] ${poppins.className} font-[600] text-[65px] `}>About Me</p>
            <p className={`absolute w-[756px] h-[101px] mt-[168px] ml-[854px] ${poppins.className} font-[400] text-[21px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae cupiditate harum quia odio perferendis earum excepturi! Omnis id deserunt iure deleniti, ipsum quas </p>
            <div className={`w-[753px] h-[349px] mt-[284px] ml-[854px] rounded-[5px]`}>
            <DesignHeading
          title="UX"
          width={34}
          top={284}
          left={854}
          isBorder={true}
          ellipseStyles={{ top: '317px', left: '1383px' }}
            />
        <DesignHeading
          title="Website Design"
          width={200}
          top={375}
          left={854}
          isBorder={true}
          ellipseStyles={{ top: '408px', left: '1351px' }}
        />
        <DesignHeading
          title="App Design"
          width={147}
          top={466}
          left={854}
          isBorder={false}
          ellipseStyles={{ top: '500px', left: '1415px' }}
        />
        <DesignHeading
          title="Graphic Design"
          width={198}
          top={557}
          left={854}
          isBorder={true}
          ellipseStyles={{ top: '593px', left: '1383px' }}
        />
            </div>
        </div>
    </div>
  )
}

export default About
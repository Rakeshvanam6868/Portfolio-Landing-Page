import React from 'react'
import { poppins } from '../layout'
import Button from './Button'
import ProjectsShowCase from './ProjectsShowCase'
import AirCallingFront from "@/app/public/AirCallinFront.png"
import AirCalling from "@/app/public/AirCallin.png"
import BussinessFront from "@/app/public/Front2.png"
import BussinessBack from "@/app/public/Back2.png"
import EcomFront from "@/app/public/Front3.png"
import EcomBack from "@/app/public/Back3.png"
const Projects = () => {
  return (
    <div className={`absolute w-[1423px] h-[1020px] mt-[2541px] ml-[250px]`}>
        <div className={`absolute w-[399px] h-[98px] ml-[510px]`}>
            <p className={`${poppins.className} font-[600] text-[65px] tracking-[3%] `}>My Projects</p>
        </div>
        <div className={`absolute w-[921px] h-[78px] mt-[120px] ml-[249px]`}>
            <p className={`${poppins.className} font-[400] text-[21px] tracking-[3%] text-center `}>
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus
            </p>
        </div>
        <div className={` w-[960px] h-[56px] mt-[257px] ml-[280px] flex space-x-4`}>
        <Button 
          title="All" 
          width="70px" 
          height="56px" 
          top="257px" 
          left="234px" 
          padding="15px 20px" 
          gap="10px" 
          borderRadius="12px" 
          border="0.4px solid #545454" 
          background="#F8F8F8" 
          borderColor="#545454" 
          textColor="#000000"
        />
        <Button 
          title="UI/UX" 
          width="108px" 
          height="56px" 
          top="257px" 
          left="326px" 
          padding="15px 20px" 
          gap="10px" 
          borderRadius="12px" 
          border="0.4px solid #545454" 
          background="#F8F8F8" 
          borderColor="#545454" 
          textColor="#000000"
        />
        <Button 
          title="Web Design" 
          width="190px" 
          height="56px" 
          top="257px" 
          left="451px" 
          padding="15px 20px" 
          gap="10px" 
          borderRadius="12px"  
          background="#FD6F00" 
          borderColor="#545454"
          textColor="#ffffff"
        />
        <Button 
          title="App Design" 
          width="184px" 
          height="56px" 
          top="257px" 
          left="658px" 
          padding="15px 20px" 
          gap="10px" 
          borderRadius="12px" 
          border="0.4px solid #545454"  
          background="#F8F8F8" 
          borderColor="#545454" 
          textColor="#000000"
        />
        <Button 
          title="Graphic Design" 
          width="234px" 
          height="56px" 
          top="257px" 
          left="859px" 
          padding="15px 20px" 
          gap="10px" 
          borderRadius="12px" 
          border="0.4px solid #545454"  
          background="#F8F8F8" 
          borderColor="#545454" 
          textColor="#000000"
        />
        </div>
        <div className={`absolute w-[445px] h-[601px] mt-[100px]`}>
        <ProjectsShowCase
        width="445px"
        height="601px"
        top="0px"
        left="0px"
        gap="0px"
        imageSrcFront={AirCallingFront}
        imageSrcBack={AirCalling}
        category="Web Design"
        description="AirCalling Landing Page Design"
      />
      <ProjectsShowCase
        width="445px"
        height="601px"
        top="0px"
        left="489px"
        gap="0px"
        imageSrcFront={BussinessFront}
        imageSrcBack={BussinessBack}
        category="Web Design"
        description="Business Landing Page Design "
      />
      <ProjectsShowCase
        width="445px"
        height="601px"
        top="0px"
        left="978px"
        gap="0px"
        imageSrcFront={EcomFront}
        imageSrcBack={EcomBack}
        category="Web Design"
        description="Ecom Web Page Design "
      />
        </div>
    </div>
  )
}

export default Projects
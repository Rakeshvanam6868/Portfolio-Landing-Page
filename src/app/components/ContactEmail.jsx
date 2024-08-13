import React from 'react'
import { poppins } from '../layout'
import Button from './Button'

const ContactEmail = () => {
  return (
   <div className={`absolute w-[932px] h-[337px] mt-[4572px] ml-[475px]`}>
        <div className={`absolute w-[724px] h-[98px] ml-[104px]`}>
            <p className={`${poppins.className} font-[600] text-[65px] tracking-[3%] text-center `}>Lets Design Together</p>
        </div>
        <div className={`absolute w-[932px] h-[101px] mt-[101px]`}>
            <p className={`${poppins.className} font-[400] text-[21px] tracking-[3%] text-center `}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
        </div>
        <div className={`absolute w-[874px] h-[75px] mt-[262px] ml-[29px] flex`}>
            <input className={`w-[627px] h-[75px] rounded-[14px] p-[10px] border-[1px] border-[#AFAFAF] bg-[#F8F8F8]`} type="email" name="" id="" placeholder='Enter your Email' />
            <Button 
          title="Contact Me " 
          width="222px" 
          height="75px" 
          top="0px" 
          left="681px" 
          padding="25px" 
          gap="10px" 
          borderRadius="14px" 
          background="#FD6F00" 
          textColor="#ffffff"
          textsize="24px"
          weight="600"
        />
        </div>
   </div>
  )
}

export default ContactEmail
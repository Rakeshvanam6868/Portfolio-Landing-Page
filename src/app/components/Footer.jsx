import React from 'react'
import Logo from './Logo';
import NavLinks from './NavLinks';
import Icons from './Icons';
import { poppins } from '../layout';

const Footer = () => {
  return (
    <div className={`absolute w-[1925px] h-[552px] mt-[5048px] ml-[-5px] `}>
       <div className={`absolute w-[279px] h-[67px] mt-[109px] ml-[810px]`}>
           <Logo/>
       </div>
       <div className={`absolute w-[807px] h-[52px] mt-[241px] ml-[480px]`}>
           <NavLinks/>
       </div>
       <div className={`absolute mt-[373.52px] ml-[867px]`}>
           <Icons/>
       </div>
       <div className={`absolute w-[1921px] h-[84px]  mt-[468px] ml-[4px] bg-[#545454]`}>
          <div className={`absolute w-[440px] h-[32px]  mt-[25px] ml-[740px] `}>
          <p className={`${poppins.className} font-[400] text-[21px] tracking-[3%] text-center text-black`}>© 2023 <span className={`${poppins.className} font-[700] text-[21px] tracking-[3%]  text-[#FD6F00]`}>Mumair</span> All Rights Reserved , Inc. </p>
          </div>
       </div>
    </div>
  )
}

export default Footer;
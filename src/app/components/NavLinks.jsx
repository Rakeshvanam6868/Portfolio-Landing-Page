import React from 'react'
import Navbar from "./Navbar";
import { navItems } from '../data/index';

const NavLinks = () => {
  return (
    <ul className={`w-[807px] h-[52px] mt-[17px] ml-[150px] flex gap-[35px]`}>
        {navItems.map((item, index) => (
            <li key={index} className="">
              <Navbar name={item.name} link={item.link} />
            </li>
          ))}
        </ul>
  )
}

export default NavLinks;
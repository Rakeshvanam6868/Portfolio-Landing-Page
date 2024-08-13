import React from 'react'
import Navbar from "./Navbar";


const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "Testimonials", link: "/testimonials" },
  { name: "Contact", link: "/contact" },
];

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
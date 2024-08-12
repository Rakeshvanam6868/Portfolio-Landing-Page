import PropTypes from "prop-types";
import Image from "next/image";
import logo from "@/app/public/logoImage.svg";
import Button from "./Button";
import { montserrat } from "../layout";
import Navbar from "./Navbar";


const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "Testimonials", link: "/testimonials" },
  { name: "Contact", link: "/contact" },
];

const Header = ({ className = "" }) => {
  return (
    <div className="absolute w-[1420px] h-[67px] mt-[61px] ml-[250px] flex items-start justify-start ">
      <div className="w-[279px] h-[67px] flex items-center gap-[22px]">
        <Image className="w-[67px] h-[67px]" src={logo} alt=" " />
        <p className={`${montserrat.className} w-[190px] h-[59px] mt-[4px] text-[48px] font-[400] text-[#545454]`}><b className="font-[700] text-[#1E1E1E]">M</b>umair</p>
      </div>
      <div className="ml-[40px] h-[52px] w-[900px] mt-[7px] flex items-center justify-center">
        <ul className="flex justify-center gap-[22px] items-center mr-[22px]">
        {navItems.map((item, index) => (
            <li key={index} className="">
              <Navbar name={item.name} link={item.link} />
            </li>
          ))}
        </ul>
        <Button name={"Download CV"}></Button>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
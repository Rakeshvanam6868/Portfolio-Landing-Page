import Button from "./Button";
import Image from "next/image";
import avatar from "@/app/public/Avatar.png";
import { poppins } from "../layout";
import Icons from "./Icons";

const Intro = () => {
  return (
      <div className={`absolute w-[1400px] h-[617px] mt-[248px] ml-[250px] flex  `}>
        <div className="flex items-start justify-start flex-col">
            <p className={`absolute mt-[97px] ml-[7px] font-[600] text-[21px] `}>Hi I am</p>
            <p className={`absolute mt-[139px] ml-[4px] w-[324px] h-[48px] ${poppins.className} font-[600] text-[32px] text-[#FD6F00]`}>Muhammad Umair</p>
            <p className={`absolute w-[383px] h-[120px] mt-[174px] ${poppins.className} font-[700] text-[100px] text-black`}>UI & UX</p>
            <p className={`absolute w-[484px] h-[120px] mt-[269px] ml-[230px] ${poppins.className} font-[700] text-[100px] text-black`}>Designer</p>
            <p className={`absolute w-[698px] h-[101px] mt-[417px] ml-[7px] ${poppins.className} font-[400] text-[21px] items-center justify-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga aut voluptas iste eius quos, aspernatur perspiciatis molestiae cum pariatur, aliquid ratione illum velit culpa corruption</p>
            <span className={`absolute mt-[540px] ml-[7px]`}><Button name={"Hire Me"}></Button></span>
        </div>
        <div className={`absolute bg-orange-600 opacity-70 w-[374px] h-[83px] mt-[80px] ml-[940px] z-10`}></div>
        <div className={`absolute w-[538px] h-[617.24px] ml-[862px]`}>
            <Image
                src={avatar}
                alt=""
            />
        </div>
        <div className={`absolute w-[205px] h-[32.48px] mt-[654px] ml-[1018px] `}>
        <Icons/>
    </div>
    </div>
  );
};


export default Intro;


{/* */}
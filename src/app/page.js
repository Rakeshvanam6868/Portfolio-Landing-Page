"use client";

import Image from "next/image";
import React,{useState} from "react"; 
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonails";
import ContactEmail from "./components/ContactEmail";
import Footer from "./components/Footer";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`w-[1920px] h-[5600px]  ${
        isDarkMode ? "bg-[#1E1E1E] text-white" : "bg-[#FFFFFF] text-black"
      } `}>
      <Header onToggleTheme={handleToggleTheme}/>
      <Intro/>
      <About/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <ContactEmail/>
      <Footer/>
    </div>
  );
}

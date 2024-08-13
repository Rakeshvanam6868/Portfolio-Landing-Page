import Image from "next/image";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <div className={`w-[1920px] h-[5600px]  bg-[#FFFFFF]`}>
      <Header/>
      <Intro/>
      <About/>
      <Services/>
      <Projects/>
    </div>
  );
}

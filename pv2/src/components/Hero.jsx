import React from "react";
import { FaLinkedin, FaGithub, FaRegStar } from "react-icons/fa";
import { AiOutlineMail, AiFillHome } from "react-icons/ai";
import { GoPersonFill } from "react-icons/go";
import { SiBookstack } from "react-icons/si";
import TypingQuotesLoops from "./TypingQuotesLoops";

//
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Pcgaming from "../../public/Pcgaming";
//

import Heree from "./Heree";

const Hero = () => {
  return (
    <div className="hero flex w-full h-screen">
      <div className="menu w-[25%] flex items-center justify-center h-full relative ">
        <div className="absolute bottom-0 left-40 flex flex-col items-center gap-5 ">
          <div className="flex flex-col items-center">
            <AiFillHome size={25} /> <p className="text-sm">Home</p>
          </div>
          <div className="flex flex-col items-center">
            <GoPersonFill size={25} /> <p className="text-sm">Me</p>
          </div>
          <div className="flex flex-col items-center">
            <SiBookstack size={25} /> <p className="text-sm">Projects</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="circle w-3 h-3 bg-black rounded-full mt-[-6px]" />
            <div className="line w-[2px] h-[60vh] bg-black" />
          </div>
        </div>
        <div className="absolute bottom-0 left-80 flex flex-col items-center gap-3">
          <FaRegStar size={20} />
          <div className="flex flex-col items-center">
            <div className="circle w-3 h-3 bg-black rounded-full mt-[-6px]" />
            <div className="line w-[2px] h-[30vh] bg-black" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-end h-full flex-col">
        <div className=" w-full h-[70%] ">
          <div className="flex flex-col w-[60%] h-[70%] gap-7 justify-center mt-15">
            <h1 className="text-8xl font-bold">Rama Putra</h1>
            <p className="text-2xl font-medium">
              Enterprise & Full-Stack Developer.
            </p>
            <p className="font-light text-xl">
              Enterprise & Full-Stack Developer who thrives on turning ideas
              into scalable, efficient solutions. I specialize in building
              clean, optimized code that not only works great but also keeps
              budgets lean and performance high.
            </p>
            <div className="flex gap-5">
              <FaLinkedin size={25} /> <FaGithub size={25} />{" "}
              <AiOutlineMail size={25} />
            </div>
          </div>
        </div>
        <div className=" w-full h-[70%] relative">
          {/* <TypingQuotesLoops /> */}
          <Heree />
        </div>
      </div>
    </div>
  );
};

export default Hero;

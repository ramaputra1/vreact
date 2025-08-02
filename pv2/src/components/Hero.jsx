import React from "react";
import { FaLinkedin, FaGithub, FaRegStar } from "react-icons/fa";
import { AiOutlineMail, AiFillHome } from "react-icons/ai";
import { GoPersonFill } from "react-icons/go";
import { SiBookstack } from "react-icons/si";
import TypingQuotesLoops from "./TypingQuotesLoops";

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
      <div className="flex-1 flex items-center  h-full ">
        <div className="flex flex-col w-[60%] h-[70%] gap-5">
          <h1>Lore Morem</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, magnam.
            Ipsum, repellat facilis sint aperiam dicta, nisi maxime dolorum sunt
            non accusantium rem sit explicabo velit quos assumenda fugiat
            reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium officiis dicta quae, nam ipsam veniam inventore
            quibusdam. Sequi placeat nobis deserunt? Modi voluptatibus nostrum
            saepe aspernatur voluptatem, doloribus odit incidunt! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Illum eius error
            maiores voluptatum eligendi nisi, alias dolor tempora soluta. Nam
            qui repellendus nemo et omnis quo recusandae maiores sed aspernatur.
            Lorem, ipsum.
          </p>
          <div className="flex gap-5">
            <FaLinkedin /> <FaGithub /> <AiOutlineMail />
          </div>
          <div className=" m-0 h-60  flex items-end">
            <TypingQuotesLoops />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

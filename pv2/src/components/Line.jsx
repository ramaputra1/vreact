import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Line = ({ className = "" }) => {
  return (
    <div className="flex flex-col relative h-full">
      <svg
        className={`absolute left-1/2 -translate-x-1/2 bottom-0 ${className}`}
        width="10"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <AiOutlineMail />
        <line x1="5" y1="200" x2="5" y2="0" stroke="black" strokeWidth="2" />
        <circle cx="5" cy="5" r="5" fill="black" />
      </svg>
    </div>
  );
};

export default Line;

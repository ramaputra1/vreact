import React from "react";
import ThemeSlider from "./ThemeSlider";
import Button from "./Button";
import { Download, AtSign } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar flex flex-row-reverse p-5 items-center">
      <div className="navbox theme mr-3 ml-3">
        {" "}
        <Button
          href="/about"
          className="flex gap-2 justify-center items-center flex-col"
        >
          <AtSign size={16} className="text-white" />
          Resume
        </Button>
      </div>
      <div className="navbox theme mr-3 ml-3">
        <Button
          href="/about"
          className="flex gap-2 justify-center items-center "
        >
          <Download size={16} className="text-white" />
          Rsm
        </Button>
      </div>
      <div className="navbox theme mr-3 ml-3">
        <ThemeSlider />
      </div>
    </div>
  );
};

export default Navbar;

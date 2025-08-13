import React from "react";
import ThemeSlider from "./ThemeSlider";
import Button from "./Button";
import { Download, AtSign } from "lucide-react";
import { Resume } from "./Resume";
import { MessageMe } from "./MessageMe";

const Navbar = () => {
  return (
    <div className="navbar flex flex-row-reverse p-5 items-center">
      <div className="navbox theme mr-3 ml-3">
        {" "}
        <MessageMe />
      </div>
      <div className="navbox theme mr-3 ml-3">
        <Resume />
      </div>
      <div className="navbox theme mr-3 ml-3">
        <ThemeSlider />
      </div>
    </div>
  );
};

export default Navbar;

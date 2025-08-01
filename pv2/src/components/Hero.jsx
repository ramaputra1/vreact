import React from "react";

const Hero = () => {
  return (
    <div className="hero flex w-full h-screen">
      <div className="bg-amber-300 w-[30%] flex items-center justify-center h-full">
        <p className="text-black text-xl">Sidebar</p>
      </div>
      <div className="bg-amber-950 flex-1 flex items-center justify-center h-full">
        <h1 className="text-white text-3xl">Main Content</h1>
      </div>
    </div>
  );
};

export default Hero;

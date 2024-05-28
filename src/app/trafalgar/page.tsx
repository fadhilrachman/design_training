import React from "react";
import Navbar from "./_components/navbar";
import Home from "./_components/home";
import OurService from "./_components/our-service";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className=" px-32  space-y-10 py-20 ">
        <Home />
        <OurService />
      </div>
    </div>
  );
};

export default page;

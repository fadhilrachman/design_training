import React from "react";
import Image from "next/image";
import IconHome from "../assets/icon-home.svg";
const Home = () => {
  return (
    <div className="grid grid-cols-5 items-center  min-h-[80vh]">
      <div className="space-y-4 col-span-2">
        <h3 className="text-5xl font-bold">Virtual healthcare for you</h3>
        <p className="text-sm text-placeholder">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
      </div>
      <div className="col-span-3  pl-5 flex justify-end">
        <Image src={IconHome} alt="img" height={400} className="" />
      </div>{" "}
    </div>
  );
};

export default Home;

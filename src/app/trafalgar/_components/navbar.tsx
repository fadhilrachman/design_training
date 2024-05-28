import React from "react";

const Navbar = () => {
  const listMenu = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Find a doctor",
      href: "/",
    },
    {
      label: "Apps",
      href: "/",
    },
    {
      label: "Testimonials",
      href: "/",
    },
    {
      label: "About us",
      href: "/",
    },
  ];
  return (
    <div className=" flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 bg-blue-400 rounded-full flex items-center justify-center font-bold text-white">
          T
        </div>
        <h3 className="text-[#233348] font-bold text-xl">Tragalfar</h3>
      </div>
      <div className="space-x-4 ">
        {listMenu.map((val, key) => {
          return (
            <a
              href=""
              key={key}
              className={`${
                val.label == "Home" ? "font-semibold" : "text-gray-500"
              }`}
            >
              {val.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import BaseTitle from "./base-title";

const OurService = () => {
  const listService = [
    {
      label: "Search doctor",
      description:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      label: "Online pharmacy",
      description:
        "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
      label: "Consultation",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      label: "Details info",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      label: "Emergency care",
      description:
        "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
      label: "Tracking",
      description: "Track and save your medical history and health data ",
    },
  ];
  return (
    <div className="relative space-y-[80px]">
      <BaseTitle title="Our Service" position="center" />
      <div className="grid grid-cols-3 items-center gap-4">
        {listService.map((val, key) => {
          return (
            <div className="rounded-md shadow-sm px-7 min-h-[354px] py-5 space-y-3">
              <h3 className="font-bold text-2xl">{val.label}</h3>
              <p className="text-placeholder font-light">{val.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurService;

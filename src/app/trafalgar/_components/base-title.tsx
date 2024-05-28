import React from "react";

interface Props {
  title: string;
  position?: "center" | "left";
}
const BaseTitle = ({ position = "left", title }: Props) => {
  return (
    <div
      className={`space-y-5 flex flex-col ${
        position == "left" ? "items-start" : "items-center"
      }`}
    >
      <h3 className="text-4xl font-bold">{title}</h3>
      <div className="h-[2px] bg-black w-[56px] text-center"></div>
      <p
        className={`text-placeholder max-w-[870px]   ${
          position == "left" ? "text-left" : "text-center"
        }`}
      >
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
    </div>
  );
};

export default BaseTitle;

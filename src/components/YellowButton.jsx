import React from "react";
import { ArrowRight } from "../assets/Icons/ArrowRight";
export const YellowButton = ({ text }) => {
  return (
    <button className="bg-darkYellow hover:bg-yellow-500 text-primary font-bold font-roboto text-xl  py-7 px-10 rounded-2xl flex items-center gap-2 transition-all duration-300">
      <span>{text}</span>
      <span className="flex items-center justify-center">
        <ArrowRight width={19} height={19} fill="#FFF" />
      </span>
    </button>
  );
};

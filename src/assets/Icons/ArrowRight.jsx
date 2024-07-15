import React from "react";
export const ArrowRight = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 19"
    >
      <circle cx="9.681" cy="9.5" r="9.5" fill="#335B6B"></circle>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.657 6.129l3.395 3.064-3.395 3.065m2.923-3.065H5.697"
      ></path>
    </svg>
  );
};

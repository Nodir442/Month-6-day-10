import React from "react";

export const HomeIcon2 = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 101 101"
    >
      <rect width="101" height="101" fill="#fff" rx="20"></rect>
      <circle cx="27" cy="62" r="12" fill="#FFF4CD"></circle>
      <path fill="url(#pattern0_2_14938)" d="M19 26H71V78H19z"></path>
      <defs>
        <pattern
          id="pattern0_2_14938"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01)" xlinkHref="#image0_2_14938"></use>
        </pattern>
        <image
          id="image0_2_14938"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
};

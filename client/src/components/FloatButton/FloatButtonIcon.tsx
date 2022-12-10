import React from "react";

interface FloatButtonIconProps {
  onClick?: () => void;
}

const FloatButtonIcon = ({ onClick }: FloatButtonIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <g
        fill="none"
        stroke="#282c34"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      >
        <path
          d="M9.737 6.163v7.148M13.315 9.737H6.159M0 9.737C0 2.435 2.435 0 9.737 0s9.737 2.435 9.737 9.737-2.435 9.737-9.737 9.737S0 17.039 0 9.737z"
          transform="translate(2.3 2.3)"
        ></path>
      </g>
    </svg>
  );
};

export default FloatButtonIcon;

import React, { SVGProps } from "react";

type FloatButtonIconProps = SVGProps<SVGSVGElement>;

export const FloatButtonIcon = (props: FloatButtonIconProps) => {
  return (
    <svg
      className="modal_close-button"
      fill="none"
      height={18}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={18}
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
};

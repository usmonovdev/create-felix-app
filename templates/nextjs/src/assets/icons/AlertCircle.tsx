import { TVariables, variables } from "@/constants/variables";
import { SVG_COLOR, SVG_SIZE } from "@/plugins/iconsConfig";
import * as React from "react";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: TVariables;
}

const SvgComponent = ({
  size = SVG_SIZE,
  color = SVG_COLOR,
  ...props
}: Props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <path
      stroke={variables[color]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
);
export default SvgComponent;

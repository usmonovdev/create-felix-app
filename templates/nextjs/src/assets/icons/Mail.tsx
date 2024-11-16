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
      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2m20 0v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6m20 0-10 7L2 6"
    />
  </svg>
)
export default SvgComponent

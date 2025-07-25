/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FlechasEnCirculoSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M224 48v48a8 8 0 01-8 8h-48a8 8 0 010-16h28.69l-14.63-14.63a79.56 79.56 0 00-56.13-23.43h-.45a79.52 79.52 0 00-55.89 22.77 8 8 0 01-11.18-11.44 96 96 0 01135 .79L208 76.69V48a8 8 0 0116 0zm-37.59 135.29a80 80 0 01-112.47-.66L59.31 168H88a8 8 0 000-16H40a8 8 0 00-8 8v48a8 8 0 0016 0v-28.69l14.63 14.63A95.43 95.43 0 00130 222.06h.53a95.36 95.36 0 0067.07-27.33 8 8 0 00-11.18-11.44z"
        }
      ></path>
    </svg>
  );
}

export default FlechasEnCirculoSvgIcon;
/* prettier-ignore-end */

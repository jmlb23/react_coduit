import React from "react";
import "./Loader.css"

type LoaderProps = {
  height: number;
  width: number;
}

export const Loader = (props: LoaderProps) =>
  <div className="Loader__svg">
    <svg version="1.1" x="0px" y="0px"
      height={props.height}
      width={props.width}
      viewBox="0 0 100 100" enableBackground="new 0 0 0 0" >
      <path className="Loader__circle" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite" />
      </path>
    </svg>
  </div>
import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function Button({ name, type, variant, onClick, link }) {
  return (
    <div
      type={type}
      onClick={onClick}
      className={classNames([
        "inline-block border-4 border-border-input-color cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 rounded-lg font-primary-font text-2xl w-32 text-center",
        {
          "bg-bg-del-btn": variant === "red",
          "bg-bg-cancel-btn": variant === "green",
          "bg-bg-save-btn": variant === "orange",
        },
      ])}
      
    >
     <Link to={link}>{name} </Link> 
    </div>
  );
}

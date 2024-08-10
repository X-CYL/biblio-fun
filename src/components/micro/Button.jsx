import React from "react";
import classNames from "classnames";

export default function Button({ name, variant, onClick }) {
  return (
    <div
      className={classNames([
        "inline-block border-4 border-border-input-color cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 rounded-lg font-primary-font text-2xl w-32 text-center",
        {
          "bg-bg-del-btn": variant === "red",
          "bg-bg-cancel-btn": variant === "green",
          "bg-bg-save-btn": variant === "orange",
        },
      ])}
      onClick={onClick}
    >
      {name}
    </div>
  );
}

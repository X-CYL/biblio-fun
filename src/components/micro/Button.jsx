import React from "react";
import classNames from "classnames";

export default function Button({ name, variant }) {
  return (
    <div
      className={classNames([
        "inline-block border-4 border-border-input-color rounded-lg font-primary-font text-3xl",
        {
          "bg-bg-del-btn": variant === "red",
          "bg-bg-cancel-btn": variant === "green",
          "bg-bg-save-btn": variant === "orange",
        },
      ])}
    >
      {name}
    </div>
  );
}

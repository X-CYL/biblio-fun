import React from "react";
import classNames from "classnames";

export default function InputCustom({ labelName, type, variant, focus }) {
  let inputZone = null;

  switch (type) {
    case "date":
      inputZone = (
        <>
          <label
            className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
            htmlFor="date"
          >
            {labelName}
          </label>
          <input
            className={classNames([
              "w-[80%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary",
              {
                "md:w-[50%]": variant === "small",
                "md:w-[90%]": variant === "medium",
                "md:w-[120%] ml-20": variant === "large",
              },
            ])}
            type="date"
            name="date"
            id="date"
          ></input>
        </>
      );
      break;
    case "text":
      inputZone = (
        <>
          <div>
            <label
              className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
              htmlFor="text"
            >
              {labelName}
              
            </label>
          </div>
          <div>
            <input
              className={classNames([
                "w-[80%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary",
                {
                  "md:w-[50%]": variant === "small",
                  "md:w-[90%]": variant === "medium",
                  "md:w-[120%]": variant === "large",
                },
              ])}
              type="text"
              name="text"
              id="text"
            ></input>
          </div>
        </>
      );
      break;
    case "email":
      inputZone = (
        <>
          <label
            className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
            htmlFor="email"
          >
            {labelName}
          </label>
          <input
            className={classNames([
              "w-[80%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary",
              {
                "md:w-[50%]": variant === "small",
                "md:w-[90%]": variant === "medium",
                "md:w-[120%]": variant === "large",
              },
            ])}
            type="email"
            name="email id="
            email
          ></input>
        </>
      );
      break;
    case "password":
      inputZone = (
        <>
          <label
            className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
            htmlFor="password"
          >
            {labelName}
          </label>
          <input
            className={classNames([
              "w-[80%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary",
              {
                "md:w-[50%]": variant === "small",
                "md:w-[90%]": variant === "medium",
                "md:w-[120%]": variant === "large",
              },
            ])}
            type="password"
            name="password"
            id="password"
          ></input>
        </>
      );
      break;
    case "checkbox":
      inputZone = (
        <>
          <div className="flex flex-col">
            <label
              className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
              htmlFor="checkbox"
            >
              {labelName}
            </label>
            <input
              className="w-[40px] h-8 md:w-[40px] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            ></input>
          </div>
        </>
      );
      break;
    case "textarea":
      inputZone = (
        <>
          <label
            className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
            htmlFor="textarea"
          >
            {labelName}
          </label>
          <input
            className={classNames([
              "w-[80%] ml-7 md:ml-2 h-36 md:h-36 border-4 border-border-input-color rounded-md bg-bg-primary",
              {
                "md:w-[70%]": variant === "small",
                "md:w-[90%]": variant === "medium",
                "md:w-[120%]": variant === "large",
              },
            ])}
            type="textarea"
            name="textarea"
            id="textarea"
          ></input>
        </>
      );
      break;
    case "file":
      inputZone = (
        <>
          <div className="flex flex-col">
            <label
              className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
              htmlFor="file"
            >
              {labelName}
            </label>
            <input
              className={classNames([
                "w-[80%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary",
                {
                  "md:w-[50%]": variant === "small",
                  "md:w-[90%]": variant === "medium",
                  "md:w-[120%]": variant === "large",
                },
              ])}
              type="file"
              name="file"
              id="file"
            ></input>
          </div>
        </>
      );
      break;
    case "number":
      inputZone = (
        <>
          <div className="flex flex-col">
            <label
              className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
              htmlFor="file"
            >
              {labelName}
            </label>
            <input
              className={classNames([
                "w-[80%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary",
                {
                  "md:w-[50%]": variant === "small",
                  "md:w-[90%]": variant === "medium",
                  "md:w-[120%]": variant === "large",
                },
              ])}
              type="number"
              name="number"
              id="number"
            ></input>
          </div>
        </>
      );
      break;

    default:
      inputZone = <input></input>;
  }

  return <div>{inputZone}</div>;
}

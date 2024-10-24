import React from "react";
import classNames from "classnames";

export default function InputCustom({
  id,
  labelName,
  type,
  variant,
  placeholder,
  option,
  onChange,
  value,
  defaultValue,
}) {
  let inputZone = null;

  switch (type) {
    case "date":
      inputZone = (
        <>
          <label
            className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
            htmlFor={id}
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
            id={id}
            placeholder={placeholder}
          ></input>
        </>
      );
      break;
    case "option":
      inputZone = (
        <>
          <label
            className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
            htmlFor={id}
          >
            {labelName}
          </label>
          <select
            className={classNames([
              "w-[80%] ml-7 md:ml-2 md:h-12 border-4 border-border-input-color rounded-md bg-bg-primary",
              {
                "md:w-[50%]": variant === "small",
                "md:w-[90%]": variant === "medium",
                "md:w-[120%] ml-20": variant === "large",
              },
            ])}
            type="text"
            name="text"
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          >
            {option}
          </select>
        </>
      );
      break;
    case "text":
      inputZone = (
        <>
          <div>
            <label
              className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
              htmlFor={id}
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
              id={id}
              placeholder={placeholder}
              defaultValue={defaultValue}
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
            htmlFor={id}
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
            name="email"
            id={id}
            placeholder={placeholder}
          ></input>
        </>
      );
      break;
    case "password":
      inputZone = (
        <>
          <label
            className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
            htmlFor={id}
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
            id={id}
            placeholder={placeholder}
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
              htmlFor={id}
            >
              {labelName}
            </label>
            <input
              className="w-[40px] h-8 md:w-[40px] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary"
              type="checkbox"
              name="checkbox"
              id={id}
              onChange={onChange}
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
            htmlFor={id}
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
            id={id}
            placeholder={placeholder}
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
              htmlFor={id}
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
              id={id}
              placeholder={placeholder}
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
              htmlFor={id}
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
              id={id}
              placeholder={placeholder}
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

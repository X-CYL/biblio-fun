import React from "react";

export default function InputCustom({ labelName, type, className }) {
  let inputZone = null;

  switch (type) {
    case "date":
      inputZone = (
      <>
          <label className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary" htmlFor="date">{labelName}</label>
          <input className="w-[80%] md:w-[100%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary" type="date" name="date" id="date"></input>;
      </>
      )
      break;
    case "text":
      inputZone = (
        <>
          <label className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary" htmlFor= "text">{labelName}</label>
          <input className="w-[80%] md:w-[100%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary" type="text" name="text" id="text"></input>;
        </>
      )
      break;
    case "email":
      inputZone = (
        <>
          <label className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary" htmlFor= "email">{labelName}</label>
          <input className="w-[80%] md:w-[100%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary" type="email" name="email id="email></input>;
        </>
      )
      break;
    case "password":
      inputZone = (
        <>
          <label className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary" htmlFor= "password">{labelName}</label>
          <input className="w-[80%] md:w-[100%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary" type="password" name="password" id="password"></input>;
        </>
      )
      break;
    case "checkbox":
      inputZone = (
        <>
          <label className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary" htmlFor="checkbox">{labelName}</label>
          <input className="w-[80%] md:w-[100%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary" type="checkbox" name="checkbox" id="checkbox"></input>
        </>
      )
      break;
      case "textarea":
      inputZone = (
        <>
          <label className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary" htmlFor="textarea">{labelName}</label>
          <input className="w-[80%] md:w-[100%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary" type="textarea" name="textarea" id="textarea"></input>
        </>
      ) 
      break;
      case "file":
        inputZone = (
          <>
            <label className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary" htmlFor="file">{labelName}</label>
            <input className="w-[80%] md:w-[100%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary" type="file" name="file" id="file"></input>
          </>
        ) 
        break;
      
      default :
      inputZone = (<input></input>)
  }

  return <div>{inputZone}</div>;
};

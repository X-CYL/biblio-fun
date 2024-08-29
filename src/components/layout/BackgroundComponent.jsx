import React from "react";


export default function BackgroundComponent({ children }) {
  return (
    <>
      <div className="grid h-screen place-items-center ">
        <div className="md:bg-bg-secondary md:w-[700px] xl:w-[1200px] rounded-md h-[600px]">
        {children}
        </div>
      </div>
    </>
    
  );
}
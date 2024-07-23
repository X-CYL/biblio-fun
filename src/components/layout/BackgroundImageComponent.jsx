import React from "react";
import backgroundImage from "../../assets/pics/opened-book.jpg";

export default function BackgroundImageComponent({ children }) {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center h-screen mt-12"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {children}
      </div>
    </>
  );
}

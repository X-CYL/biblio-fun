import React from "react";
import { Link } from "react-router-dom";
import { listNavLeft } from "../tools/Navlist";
import { listNavRight } from "../tools/Navlist";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-bg-primary">
        <div className="flex mr-8 ml-8">
          <div className="">
            <ul className="flex gap-16">
              {listNavLeft.map((item) => {
                return (
                  <li key={item.id} className={item.classN}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ml-auto">
            <ul className="flex gap-16">
              {listNavRight.map((item) => {
                return (
                  <li key={item.id} className={item.classN}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

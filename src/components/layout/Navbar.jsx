import React from "react";
import { Link } from "react-router-dom"
import {listNav} from "../tools/Navlist"

export default function Navbar() {
  return (
    <>
        <nav className="fixed top-0 left-0 right-0">
                <ul className="flex justify-around">
                {listNav.map((item) => {
                    return(
                    <li key={item.id} className="text-nav-text-color font-primary-font text-4xl hover:text-nav-text-color-selected active:text-nav-text-color-selected">
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
    </>
  )
}



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import cituLogo from "../assets/citu-logo.png";
import swuLogo from "../assets/swu-logo2.png";
import ucLogo from "../assets/uc-logo.png";

export default function Navbar() {
  const [navTheme, setNavTheme] = useState("");
  const [navLogo, setNavLogo] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleCloseMenu, setToggleCloseMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    setToggleCloseMenu(!toggleCloseMenu);
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const navThemeLocal = localStorage.getItem("navTheme");
    if (navThemeLocal === "citu") {
      setNavTheme("bg-amber-400");
      setNavLogo(cituLogo);
    }
    if (navThemeLocal === "uc") {
      setNavTheme("bg-sky-600");
      setNavLogo(ucLogo);
    }
    if (navThemeLocal === "swu") {
      setNavTheme("bg-white");
      setNavLogo(swuLogo);
    }
  });
  return (
    <div className={`relative flex h-16 space-x-4 pl-4 ${navTheme}`}>
      <Link to="/Studiroo/" className="h-full flex justify-center items-center">
        <FontAwesomeIcon
          icon={faHouse}
          className="h-1/2 my-auto hover:cursor-pointer"
        />
      </Link>

      <div className="relative h-full w-10 my-5">
        {toggleMenu && (
          <FontAwesomeIcon
            icon={faBars}
            className="h-1/2 absolute z-20 hover:cursor-pointer"
            onClick={handleToggleMenu}
          />
        )}

        {toggleCloseMenu && (
          <FontAwesomeIcon
            icon={faXmark}
            className="h-1/2 absolute z-10 hover:cursor-pointer"
            onClick={handleToggleMenu}
          />
        )}

        <div className={`absolute mt-11  p-2 overflow-hidden `}>
          <div
            className="text-xl font-semibold  bg-white p-3 shadow"
            style={{
              transform: showMenu ? "translateY(0px) " : "translateY(-150px)",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <div className="hover:underline cursor-pointer">
              <Link to="/Studiroo/">Home</Link>
            </div>
            <div className="hover:underline cursor-pointer">
              <Link to="/Studiroo/schedule">Schedule</Link>
            </div>
            <div className="hover:underline cursor-pointer">
              <Link to="/Studiroo/settings">Settings</Link>
            </div>
            <div className="hover:underline cursor-pointer">
              <Link to="/Studiroo/about">About</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 h-full">
        <img className="h-full p-1 px-4" src={navLogo} alt="" />
      </div>
    </div>
  );
}

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

export default function Settings() {
  const [chooseToggle, setChooseToggle] = useState(true);
  const [modeToggle, setModeToggle] = useState(false);
  const [darkMode, setDarkMode] = useState("");

  const handleDarkMode = () => {
    setModeToggle(!modeToggle);
    if (modeToggle) {
      setDarkMode("bg-black");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        modeToggle ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      <div className="h-32 flex justify-center items-center">
        <h1 className="text-5xl font-bold">SETTINGS</h1>
      </div>
      <div className="p-5">
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold">General Settings</h1>
          {/* CHOOSE SCHOOL */}
          <div className="flex space-x-2">
            <h2 className="text-lg font-semibold">Choose School</h2>
            <button
              className="h-8 w-9 shadow relative"
              onClick={() => {
                setChooseToggle(!chooseToggle);
              }}
            >
              <FontAwesomeIcon
                className="absolute top-2 left-3"
                icon={faAngleDown}
                style={{
                  opacity: `${chooseToggle ? "1" : "0"}`,
                  transition: "opacity 0.2s ease-in-out",
                }}
              />
              <FontAwesomeIcon
                className="absolute top-2 left-3"
                icon={faAngleRight}
                style={{
                  opacity: `${chooseToggle ? "0" : "1"}`,
                  transition: "opacity 0.2s ease-in-out",
                }}
              />
            </button>
            <div
              className={`rounded-md shadow font-semibold w-60 ${
                chooseToggle ? "opacity-0" : ""
              }`}
              style={{ transition: "opacity 0.5s ease-in-out" }}
            >
              <button
                className="p-2 w-full hover:underline hover:shadow-md"
                onClick={() => {
                  const themeData = "citu";
                  localStorage.setItem("navTheme", themeData);
                  window.location.reload();
                  console.log(themeData);
                }}
              >
                Cebu Institue of Techology-Univery
              </button>
              <button
                className="p-2 w-full hover:underline hover:shadow-md"
                onClick={() => {
                  const themeData = "uc";
                  localStorage.setItem("navTheme", themeData);
                  window.location.reload();
                }}
              >
                University of Cebu
              </button>
              <button
                className="p-2 w-full hover:underline cursor-pointer hover:shadow-md"
                onClick={() => {
                  const themeData = "swu";
                  localStorage.setItem("navTheme", themeData);
                  window.location.reload();
                }}
              >
                South Western University
              </button>
            </div>
          </div>
          {/* DARK MODE */}
          <div className="flex space-x-2">
            <h2 className="text-lg font-semibold">Dark Mode</h2>
            <button
              className="h-8 w-9 shadow relative"
              onClick={handleDarkMode}
            >
              <FontAwesomeIcon
                className="absolute top-2 left-3"
                icon={faAngleDown}
                style={{
                  opacity: `${modeToggle ? "1" : "0"}`,
                  transition: "opacity 0.2s ease-in-out",
                }}
              />
              <FontAwesomeIcon
                className="absolute top-2 left-3"
                icon={faAngleRight}
                style={{
                  opacity: `${modeToggle ? "0" : "1"}`,
                  transition: "opacity 0.2s ease-in-out",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import profilePhoto from "../assets/sample-profile.jpg";

export default function Homepage() {
  const [schedTheme, setSchedTheme] = useState("");
  const [profBorder, setProfBorder] = useState("");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const navThemeLocal = localStorage.getItem("navTheme");
    if (navThemeLocal === "citu") {
      setSchedTheme("bg-amber-400");
      setProfBorder("border-amber-400");
      setBgColor("bg-gradient-to-t from-amber-400 to-white");
    }
    if (navThemeLocal === "uc") {
      setSchedTheme("bg-sky-600");
      setProfBorder("border-sky-600");
      setBgColor("bg-gradient-to-t from-sky-600 to-white");
    }
    if (navThemeLocal === "swu") {
      setSchedTheme("bg-rose-800 text-white");
      setProfBorder("border-rose-800");
      setBgColor("bg-gradient-to-t from-rose-800 to-white");
    }
  });
  return (
    <div className={bgColor}>
      <Navbar />
      <div className="h-[60vh] p-4">
        <div className=" h-2/3 flex justify-center items-center  ">
          <div className={`border-4 shadow-lg rounded-full ${profBorder}`}>
            <img
              className="h-56 w-56 object-cover border-4 border-white rounded-full"
              src={profilePhoto}
              alt=""
            />
          </div>
        </div>
        <div className=" h-1/3 px-10 py-6">
          <div className="flex space-x-3 text-2xl font-semibold">
            <label htmlFor="name">Name :</label>
            <p>Jamesmyer Q. Geonzon</p>
          </div>
          <div className="flex space-x-3 text-2xl font-semibold">
            <label htmlFor="name">Course :</label>
            <p>BSCpE</p>
          </div>
        </div>
      </div>
      <div className="h-[30vh]  flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold p-5">WELCOME</h1>
        <Link to="/Studiroo/schedule">
          <button
            className={`text-2xl w-52 p-2 rounded-xl shadow-lg border-2 ${schedTheme}`}
          >
            Set-up your Schedule Now!
          </button>
        </Link>
      </div>
    </div>
  );
}

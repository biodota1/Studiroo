import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import profilePhoto from "../assets/sample-profile.jpg";

export default function Homepage() {
  const [schedTheme, setSchedTheme] = useState("");
  const [profBorder, setProfBorder] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [isProfile, setIsProfile] = useState(false);
  const [isCreateProfile, setIsCreateProfile] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [profileCourse, setProfileCourse] = useState("");
  const navigate = useNavigate();

  const handleCustomizeTo = () => {
    if (schedTheme) {
      navigate("/Studiroo/profile");
    } else {
      navigate("/Studiroo/settings");
    }
  };

  useEffect(() => {
    const getName = localStorage.getItem("profileName");
    const getCourse = localStorage.getItem("profileCourse");
    const navThemeLocal = localStorage.getItem("navTheme");
    if (getName) {
      setProfileName(getName);
    }
    if (getCourse) {
      setProfileCourse(getCourse);
    }
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

  useEffect(() => {
    if (profileName === "") {
      setIsCreateProfile(true);
      setIsProfile(false);
    } else {
      setIsCreateProfile(false);
      setIsProfile(true);
    }
  });

  return (
    <div className={bgColor}>
      <Navbar />

      {/* IS PROFILE SET */}
      {isProfile && (
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
          <div className="h-1/3 w-full flex justify-center items-center text-2xl font-semibold space-x-5">
            <div className="space-y-2">
              <div>Name:</div>
              <div>Course:</div>
            </div>
            <div className="space-y-2">
              <div>{profileName}</div>
              <div>{profileCourse}</div>
            </div>
          </div>
        </div>
      )}

      {/* IF PROFILE IS NOT SET */}
      {isCreateProfile && (
        <div className="h-[60vh] flex justify-center items-center">
          <button
            className={`text-2xl w-52 p-2 rounded-xl shadow-lg border-2  ${schedTheme}`}
            onClick={handleCustomizeTo}
          >
            Customize your Profile
          </button>
        </div>
      )}

      {/* LINK TO SET SCHEDULE */}
      <div className="h-[40vh]  flex flex-col items-center justify-center">
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

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

import profilePhoto from "../assets/sample-profile.jpg";

export default function Profile() {
  const [schedTheme, setSchedTheme] = useState("");
  const [profBorder, setProfBorder] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [hoverProfilePhoto, setHoverProfilePhoto] = useState(false);
  const [editDetails, setEditDetails] = useState(true);
  const [saveDetails, setSaveDetails] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [profileCourse, setProfileCourse] = useState("");

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
    <div className={`min-h-screen ${bgColor}`}>
      <Navbar />
      <div className="h-[60vh] p-4">
        <div className=" h-2/3 flex justify-center items-center  ">
          <div
            className={`relative border-4 shadow-lg rounded-full ${profBorder} hover:cursor-pointer`}
            onMouseEnter={() => {
              setHoverProfilePhoto(true);
            }}
            onMouseLeave={() => {
              setHoverProfilePhoto(false);
            }}
          >
            <img
              className="h-56 w-56 object-cover border-4 border-white rounded-full"
              src={profilePhoto}
              alt=""
            />
            <div
              className={`absolute top-0 bg-slate-400 h-56 w-56 border-4 border-white rounded-full flex justify-center items-center ${
                hoverProfilePhoto ? "opacity-50" : "opacity-0"
              }`}
            >
              <div className="text-2xl">Update Photo</div>
            </div>
          </div>
        </div>
        <div className=" h-1/3 px-10 py-6 space-y-2">
          <div className="flex space-x-3 text-2xl font-semibold w-full">
            <label className="pl-2" htmlFor="name">
              Name :
            </label>
            <div className="relative">
              {editDetails && <p className="absolute">{profileName}</p>}

              {saveDetails && (
                <input
                  className="absolute"
                  type="text"
                  value={profileName}
                  onChange={(e) => {
                    setProfileName(e.target.value);
                  }}
                />
              )}
            </div>
          </div>
          <div className="flex space-x-3 text-2xl font-semibold">
            <label htmlFor="name">Course :</label>
            <div className="relative">
              {editDetails && <p className="absolute">{profileCourse}</p>}

              {saveDetails && (
                <input
                  className="absolute"
                  type="text"
                  value={profileCourse}
                  onChange={(e) => {
                    setProfileCourse(e.target.value);
                  }}
                />
              )}
            </div>
          </div>
          <div className="relative">
            {editDetails && (
              <button
                className={`absolute text-xl font-semibold w-full p-2 rounded-xl shadow-lg border-2 ${schedTheme}`}
                onClick={() => {
                  setSaveDetails(!saveDetails);
                  setEditDetails(!editDetails);
                }}
              >
                Edit details
              </button>
            )}
            {saveDetails && (
              <button
                className={`absolute text-xl font-semibold w-full p-2 rounded-xl shadow-lg border-2 ${schedTheme}`}
                onClick={() => {
                  const storeName = profileName;
                  const storeCourse = profileCourse;
                  localStorage.setItem("profileName", storeName);
                  localStorage.setItem("profileCourse", storeCourse);
                  setSaveDetails(!saveDetails);
                  setEditDetails(!editDetails);
                }}
              >
                Save details
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Schedule_day from "../micro_components/Schedule_day";

export default function Schedule() {
  const [modal, setModal] = useState(false);
  const [schedTheme, setSchedTheme] = useState("");

  const updateModal = (newValue) => {
    setModal(newValue);
  };

  useEffect(() => {
    const navThemeLocal = localStorage.getItem("navTheme");
    if (navThemeLocal === "citu") {
      setSchedTheme("bg-amber-400");
    }
    if (navThemeLocal === "uc") {
      setSchedTheme("bg-sky-600");
    }
    if (navThemeLocal === "swu") {
      setSchedTheme("bg-rose-800 text-white");
    }
  });
  return (
    <div>
      {modal && (
        <div>
          <div className="absolute h-full w-full z-50 flex justify-center items-center">
            <div className="flex flex-col bg-white h-32 w-56 p-2 rounded-md justify-center items-center space-y-5 shadow-lg">
              <p className="text-3xl font-bold">Invalid Input</p>
              <button
                className={`h-10 w-20 shadow-lg rounded font-bold ${schedTheme}`}
                onClick={() => {
                  setModal(false);
                }}
              >
                OK
              </button>
            </div>
          </div>
          <div className="absolute h-full w-full bg-slate-600 opacity-50"></div>
        </div>
      )}

      <Navbar />

      <div className="h-32 flex justify-center items-center">
        <h1 className="text-5xl font-bold">SCHEDULE</h1>
      </div>
      <Schedule_day weekDay="Monday" modalVisibility={updateModal} />
      <Schedule_day weekDay="Tuesday" />
      <Schedule_day weekDay="Wednesday" />
      <Schedule_day weekDay="Thursday" />
      <Schedule_day weekDay="Friday" />
      <Schedule_day weekDay="Saturday" />
      <Schedule_day weekDay="Sunday" />
    </div>
  );
}

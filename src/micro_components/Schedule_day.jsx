import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Schedule_day(props) {
  const [divCount, setDivCount] = useState(0);
  const [divElements, setDivElements] = useState([]);
  const [subName, setSubName] = useState("");
  const [subTimeStart, setSubTimeStart] = useState("");
  const [subTimeEnd, setSubTimeEnd] = useState("");
  const [subRoom, setSubRoom] = useState("");
  const [schedTheme, setSchedTheme] = useState("");

  const subjectSched = (
    <div className="flex h-16 font-semibold">
      <div className="w-1/3 m-auto text-center">{subName}</div>
      <div className="w-1/3 m-auto text-center">
        {subTimeStart}-{subTimeEnd}
      </div>
      <div className="w-1/3 m-auto text-center">{subRoom}</div>
    </div>
  );

  const handleAddDiv = () => {
    setDivCount(divCount + 1);
    setDivElements([
      ...divElements,
      <div key={divCount} className="new-div">
        {subjectSched}
      </div>,
    ]);
  };

  const handleAdd = (useStateHook, initialValue) => {
    const [isValue, setIsValue] = useStateHook(initialValue);
    const handleAdd = () => {
      setIsValue(true);
    };
    const handleAdded = () => {
      if (
        subName === "" ||
        subTimeStart === "" ||
        subTimeEnd === "" ||
        subRoom === ""
      ) {
        props.modalVisibility(true);
      } else {
        handleAddDiv();
        setSubName("");
        setSubTimeStart("");
        setSubTimeEnd("");
        setSubRoom("");
      }
      setIsValue(false);
    };
    return { handleAdd, handleAdded, isValue };
  };

  const mondayAdd = handleAdd(useState, false);
  const { weekDay } = props;

  const addSubButton = (
    <button
      className={`relative flex h-10 w-36  z-10 shadow rounded-md text-lg font-semibold space-x-2 ${schedTheme}`}
      onClick={mondayAdd.handleAdd}
    >
      <div className="absolute z-0 h-full flex items-center px-2">
        <p>Add Subject</p>
      </div>
      <div className="absolute z-0 h-full right-0 flex items-center px-2">
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </button>
  );

  const addSubEdit = (
    <div
      className={`relative z-30 h-42 border-2 shadow-md m-2 p-4 space-y-2 ${
        mondayAdd.isValue ? "" : "hidden"
      }`}
    >
      <div className="flex w-full">
        <div className="flex flex-col w-1/6 space-y-3 font-semibold">
          <label htmlFor="sub-name">Subject</label>
          <label htmlFor="sub-time">Time</label>
          <label htmlFor="sub-room">Room</label>
        </div>
        <div className="w-5/6 space-y-2">
          <input
            className="shadow border-2 px-2"
            type="text"
            value={subName}
            onChange={(e) => {
              setSubName(e.target.value);
            }}
          />
          <div>
            start{" "}
            <input
              className="shadow border-2 px-2 w-16"
              type="text"
              value={subTimeStart}
              onChange={(e) => {
                setSubTimeStart(e.target.value);
              }}
            />
            end{" "}
            <input
              className="shadow border-2 px-2 w-16"
              type="text"
              value={subTimeEnd}
              onChange={(e) => {
                setSubTimeEnd(e.target.value);
              }}
            />
          </div>

          <input
            className="shadow border-2 px-2"
            type="text"
            value={subRoom}
            onChange={(e) => {
              setSubRoom(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          className={`w-full font-semibold rounded-md p-2 shadow-md ${schedTheme}`}
          onClick={mondayAdd.handleAdded}
        >
          ADD
        </button>
      </div>
    </div>
  );

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
    <div className="p-5 space-y-2">
      <div className="relative text-3xl font-semibold">{weekDay}</div>
      {addSubButton}
      {addSubEdit}
      <div className="flex text-xl font-semibold pl-5">
        <div className="w-2/6 text-center">Subject</div>
        <div className="w-4/6 text-center pr-6">Time</div>
        <div className="w-2/6 text-center pr-8">Room</div>
      </div>
      {divElements}
    </div>
  );
}

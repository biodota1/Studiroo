import React from "react";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="p-10">
        <h1 className="text-4xl font-bold">ABOUT</h1>
        <h2 className="text-3xl font-semibold">Jamesmyer Q. Geonzon</h2>
        <h2 className="text-xl">Creator</h2>
      </div>
    </div>
  );
}

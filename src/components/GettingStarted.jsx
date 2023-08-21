import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function GettingStarted() {
  const navigate = useNavigate();

  const navToSetup = () => {
    navigate("/Studiroo/setup-user");
  };
  return (
    <main className="text-white">
      <section className="relative h-[60vh] bg-amber-400 px-5">
        <h1 className="absolute bottom-0 text-5xl font-bold pb-2">
          Create Your
        </h1>
      </section>
      <section className="relative h-[40vh] bg-rose-900 px-5">
        <h1 className="relative top-0 text-5xl font-bold pb-2">Schedule</h1>
        <p className="relative text-xl font-semibold">
          Easy-to-look schedule for you
        </p>
        <div className="relative flex flex-col justify-center p-16 space-y-2">
          <button
            className="btn bg-amber-400 w-full h-12 rounded-full text-xl font-semibold"
            onClick={navToSetup}
          >
            Get Started
          </button>
          <div className="text-center">
            <Link to="/Studiroo/profile" className="hover:text-blue-500">
              Already have an account?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

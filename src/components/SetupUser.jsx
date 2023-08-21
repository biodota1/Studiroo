import React from "react";
import { useNavigate } from "react-router-dom";

export default function SetupUser() {
  const navigate = useNavigate();

  const navToProfile = () => {
    navigate("/Studiroo/profile");
  };
  return (
    <main className="h-[100vh] flex justify-center p-16  bg-gradient-to-t from-amber-400 to-white text-white">
      <div className="bg-rose-900 h-full w-full rounded-2xl p-10 shadow-xl">
        <h1 className="text-3xl font-bold pb-10">Set-up Your Profile</h1>
        <form className="space-y-10">
          <div className="flex flex-col space-y-1">
            <label htmlFor="user-id" className="text-sm font-bold">
              ID NO.
            </label>
            <input
              type="text"
              className="input input-bordered input-primary w-full max-w-xs bg-neutral text-black font-semibold"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="user-name" className="text-sm font-bold">
              Name
            </label>
            <input
              type="text"
              className="input input-bordered input-primary w-full max-w-xs bg-neutral text-black font-semibold"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="user-course" className="text-sm font-bold">
              Course
            </label>
            <input
              type="text"
              className="input input-bordered input-primary w-full max-w-xs bg-neutral text-black font-semibold"
            />
          </div>
          <button
            className="btn btn-primary rounded-full w-full "
            onClick={navToProfile}
          >
            Next
          </button>
        </form>
      </div>
    </main>
  );
}

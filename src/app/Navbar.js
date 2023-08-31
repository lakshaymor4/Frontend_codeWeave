import React from "react";
import { ReactDOM } from "react-dom/client";
import { ReactComponent as Paperclip } from "../assets/bx-paperclip.svg";

const Navbar = () => {
  return (
    <>
    
      <div className="flex flex-row justify-between pl-4 pr-4 pt-4 pb-4 text-xl b text-white">
        <div className="flex flex-row align-middle ">
          <Paperclip />
          <p className="pl-2 text-white weave font-bold ">codeᨖeave</p>
        </div>
        <div className="text-base font-bold">
          <a href="/home" className="no-underline pr-4">
            Home
          </a>
          <a href="/about" className="no-underline pr-4">
            About
          </a>
          <button className="pr-2 bg-pur rounded-3xl pr-5 pl-5 py-2 ">
            <a href="/signup" className="no-underline">
              Sign Up
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

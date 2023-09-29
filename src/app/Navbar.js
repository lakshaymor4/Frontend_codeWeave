import React from "react";
import { ReactDOM } from "react-dom/client";

const Navbar = () => {
  return (
    <>
    
      <div className="flex flex-row justify-around pl-4 pr-4 pt-4 pb-4 text-xl b text-white">
        <div className="flex flex-row align-middle ">
         
          <p className="pl-2 text-white weave font-bold ">codeᨖeave</p>
        </div>
        <div className="text-base font-bold mt-2">
          <a href="/home" className="no-underline pr-8">
            Home
          </a>
          <a href="/about" className="no-underline pr-8">
            About
          </a>
          
            <a href="/signup" className="no-underline">
              Sign Up
            </a>
      
        </div>
      </div>
    </>
  );
};

export default Navbar;

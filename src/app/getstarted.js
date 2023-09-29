import React from "react";
import comp from "../assets/comp.png"
import But from "./button";
const Getstarted = () => {
  return (
    <>
      <div className="flex flex-row mt-32 justify-center   ">
        <div className="text-5.5xl font-medium ml-28  w-96   pl-18 ">
          <p className="text-white font-extrabold break-words leading-tight ">Elevate Your Code with</p>
          <span mb-0> </span>
          <p className="grad text-transparent leading-tight mt-0 font-extrabold bg-clip-text bg-[#F1A22B]">
            Seamless
          </p>
          <span> </span>
          <p className="grad text-transparent font-extrabold leading-tight bg-clip-text bg-[#F1A22B]">
            Collaboration
          </p>
          <p className="text-base font-normal pr-20  text-white">
            Start building instantly or sign up to save your progress for more than 24 hours
          </p>
        </div>
        <img src={comp} className="pl-12" />
      </div>
      <div className="flex flex-row mt-14 ml-28">
      <div className="bg-[#8E8CDA] text-white max-w-max text-base rounded-3xl pt-[.7rem] pb-[.7rem] pl-14 pr-14 mt-4 mb-4 text-center ml-24 font-semibold box">
      <But val="BUILD" />
      </div>
      <div className="text-white border-[#88D0D1] border-solid border-2 max-w-max text-base rounded-3xl pt-[.7rem] pb-[.7rem] pl-12 pr-12 mt-4 mb-4 text-center ml-24 font-medium box">
      <But val="SIGN UP" />
      </div>
      </div>
    </>
  );
};

export default Getstarted;

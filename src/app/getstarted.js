import React from "react";
import img1 from "../assets/img1.avif";
const Getstarted = () => {
  return (
    <>
      <div className="flex flex-row mt-36 justify-center  ">
        <div className="text-5.5xl font-medium ml-28     pl-18 ">
          <strong className="text-dpur  ">Elevate Your Code with</strong>
          <span> </span>
          <strong className="grad text-transparent bg-clip-text ">
            Seamless
          </strong>
          <span> </span>
          <strong className="grad text-transparent bg-clip-text">
            Collaboration.
          </strong>
          <p className="text-base font-light pr-20 kl">
            Are you ready to bring your ideas to life? Start by signing up and
            immerse yourself in a voyage of innovation, seamless collaboration,
            and coding mastery. Welcome to the future of collaborative coding at
            CodeWeave!
          </p>
        </div>
        <img src={img1} className="" />
      </div>
      <button
        type="submit"
        className="text-base bg-white rounded-3xl pt-3 pb-3 pl-4 pr-4 mt-4 mb-4 text-center ml-24 font-bold box  "
      >
        Get Started →
      </button>
    </>
  );
};

export default Getstarted;

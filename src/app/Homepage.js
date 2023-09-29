import React from "react";
import Navbar from "./Navbar";
import Getstarted from "./getstarted";
import Second from "./second_page";
import Sec from "./sec";
import Thir from "./thir";

const Home = () => {
  return (
    <>
     <div className="bg-[#010922]">
        <div className=" w-full h-full bg-[#9f9cd699] shadow-[304px_304px_304px_0px] rounded-full blur-[304px] ">

      </div>
        <div className="sticky top-0 z-20  pt-2 ">
          <Navbar />
        </div>
       
        <Getstarted />
        <Sec />
      <Thir />
      </div>
    </>
  );
};
export default Home;

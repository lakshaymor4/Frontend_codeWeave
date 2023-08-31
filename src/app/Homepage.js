import React from "react";
import Navbar from "./Navbar";
import Getstarted from "./getstarted";
import Second from "./second_page";


const Home = () => {
  return (
    <>
      <div className="gs" >
        
      
        <div className="sticky top-0 z-20  ">
          <Navbar />
        </div>
        
        <Getstarted />
        <Second  />
      </div>
      
    </>
  );
};
export default Home;

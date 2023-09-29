import React from "react";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

const Thir = ()=>{
    return(
        <>
        <div className="mt-12 flex flex-col justify-around items-center pb-12 ">
            <h1 className="text-[#89D0D1] text-2xl font-semibold text-center">TESTIMONIALS</h1>
            <h1 className="text-white font-bold text-[4.375rem] leading-none mt-12 text-center">Read What Others<br />Have To Say</h1>
           <div className="bg-[#9090dc6b] flex flex-col justify-around items-center pl-12 pr-8 mt-12">
            <div className="flex flex-row mt-32 ">
                <div className="">
            <img src={img3} className="rounded-full "/></div>
            <div className="-translate-x-9 z-40 -translate-y-8">
            <img src={img1}  className="rounded-full  "/></div>
            <div className="-translate-x-12 ">
            <img src={img2} className="rounded-full " /></div>
            </div>
        <h1 className="text-[#F1A22B] text-[1.563rem] font-semibold w-[40rem] pt-10 ">"Coding, collaborating and building has never been easier. Great experience with CodeWeave!"</h1>
        <h2 className="text-[#89D0D1] text-[1.563rem] font-semibold pt-8 pb-12">CodeWeave Users</h2>
        </div>
        </div>
        
        </>
    )
}
export default Thir
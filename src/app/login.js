import React from "react";
import imag from "../assets/imag.png"
const Log = ()=>{
    return(
        <>
        <div className=" bg-[#010922] min-h-screen pt-20 pl-44">
        <div className="flex flex-row justify-around  border-2 border-[#89D0D1] rounded-[1.125rem] max-w-max  pr-10" >
            <div className="pt-20 pb-20 ">
                <img src = {imag} className="pr-10 pl-10 absolute" />
            </div>
        <div className="border-l-2 border-[#89D0D1] ml-72 ">
            
        <div className="flex flex-col   text-white text-[1.125rem] font-semibold pt-20 pb-16 pl-28  pr-10 ">
            <h1 className="text-white text-[1.875rem] font-bold">Login</h1>
            <input type="email" placeholder="Email" className="mb-4 mt-4 bg-transparent border-[#89D0D1] border-b-[0.063rem] w-96 mb-10  focus:outline-none  placeholder:text-white" />
            <input type="password" placeholder="Password " className="bg-transparent border-[#89D0D1] border-b-[0.063rem] w-96 mb-4 focus:outline-none  placeholder:text-white" />
            <button type="submit" className="bg-[#8080D7] font-semibold text-[1.125rem] pt-2 pb-2 pl-8 pr-8 rounded-[2rem] mt-8 mb-8" >Create Account</button>
            <h2 className="font-semibold text-[1.125rem] text-center">New Here? <a href="/sign" className="text-[#5187D7]">SignUp</a></h2>
        </div>
        </div>
        </div>
        </div>
        
        </>
    )
}
export default Log
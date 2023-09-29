import React from "react";
import imag from "../assets/imag.png"
const Si = () => {
    return (
        <>
            <div className=" bg-[#010922] min-h-screen pt-20 pl-32">
                <div className="flex flex-row justify-around  border-2 border-[#89D0D1] rounded-[1.125rem] max-w-max  pr-10" >
                    <div className="pt-20 pb-10 ">
                        <img src={imag} className="pr-10 pl-10 absolute" />
                    </div>
                    <div className="border-l-2 border-[#89D0D1] ml-72">
                        <div className="flex flex-col   text-white text-[1.125rem] font-semibold pt-20 pb-10 pl-28  pr-10 ">
                            <h1 className="text-white text-[1.875rem] font-bold">Create Account</h1>
                            <div className="flex flex-row  mb-8 mt-8">
                                <input type="text" placeholder="FirstName" className="mr-10  bg-transparent border-[#89D0D1] border-b-[0.063rem]  focus:outline-none placeholder:text-white" />
                                <input type="text" placeholder="LastName " className="bg-transparent border-[#89D0D1] border-b-[0.063rem]   focus:outline-none  placeholder:text-white" />
                            </div>
                            <input type="email" placeholder="Email" className="mb-4 mt-4 bg-transparent border-[#89D0D1] border-b-[0.063rem] w-96 mb-10  focus:outline-none  placeholder:text-white" />
                            <input type="password" placeholder="Password " className="bg-transparent border-[#89D0D1] border-b-[0.063rem] w-96 mb-4 focus:outline-none  placeholder:text-white" />
                            <button type="submit" className="bg-[#8080D7] font-semibold text-[1.125rem] pt-2 pb-2 pl-8 pr-8 rounded-[2rem] mt-8 mb-8" >Create Account</button>
                            <h2 className="font-semibold text-[1.125rem] text-center">Already Have An Account? <a href="/login" className="text-[#5187D7]">Login</a></h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Si
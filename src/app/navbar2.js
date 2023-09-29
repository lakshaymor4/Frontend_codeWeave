import React from "react";
import save from "../assets/uil_save.png"
import invi from "../assets/invite.png"
const Naav = ()=>{
    return(
        <>
        <div className="flex flex-row justify-around mt-10 font-semibold text-white">
            
            <h1 className="font-bold text-xl">code<strong>∞</strong>weave</h1>
            <div className="flex flex-row justify-around">
            <h1 className="mr-10">Expires in 24 hrs</h1>
            <div className=" bg-[#303059] mr-10 pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] flex flex-row">
                <img src = {save} className="h-[1.2rem] mr-2 mt-[0.1rem]" />
            <button type="submit" className=" text-white "  >Save</button></div>
         <div className=" bg-[#303059] mr-10  pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] flex flex-row">
            <img src={invi} className="h-[0.8rem] mr-2 mt-[0.3rem]" />
               <button type="submit" className="  text-white"  >Invite</button></div>
            <button type="submit" className="mr-10 bg-[#F1A22B] text-white pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem]">Sign Up</button>
            </div>
            
        </div>
        
        </>
    )
}
export default Naav
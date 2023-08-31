import React from "react";
import img2 from "../assets/img2.avif"

const Second = ()=>{
    return(
        <>
        <div className="kll">
        <div className="pl-20 flex flex-row pt-64 pb-64 font-semibold ">
            <img src={img2} className="w-[33.438rem] h-[19.734rem]"/>
            <div className="text-4xl ml-10 mr-20 text-dpur">
                <strong className="">Code<span className="text-ppur">Weave</span>: Empowering <span className="text-ppur">effortless</span> code collaboration for solo projects or ambitious team endeavors.</strong>
               <div className="mt-12"> <strong>Seamlessly <span className="text-ppur">transform</span> ideas into reality.</strong></div>
            </div>
        </div>
        </div>
        
        </>

    )
}
export default Second
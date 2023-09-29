import React from "react";
import Se_ca from "./card_sec";
import mob from "../assets/mob.png"
const Sec = ()=>{
    return(
        <>
        <div className="text-white font-bold text-4xl text-center mt-24 "><span className="text-[#F1A22B]">Smooth</span> Process , <span className="text-[#89D0D1]">Flawless</span> Experience</div>
        <div className="flex flex-col justify-around items-center mt-8 ">
            <div className="bg-[#F1A22B] w-80 max-w-max pl-4 pr-4 pt-3 pb-3 rounded-[1.3rem] overflow-hidden h-44 hover:overflow-visible">
                <Se_ca head = "Real-Time Sharing" body = "Instantly share, edit, and debug code with peers worldwide, fostering seamless teamwork and accelerated development" />
               
            </div>
            <div className="bg-[#89D0D1] w-80 max-w-max pl-4 pr-4 pt-3 pb-3 mt-8 rounded-[1.3rem]">
                <Se_ca head = "Fully Secured" body = "With robust encryption, and stringent access controls, we ensure your collaborative coding experience remains private and protected from potential threats." />

            </div>
            <div className="bg-[#8E8CDA] w-80 max-w-max pl-4 pr-4 pt-3 pb-3 mt-8 rounded-[1.3rem]">
                <Se_ca head = "Seamless Process" body = "Elevate your efficiency as smart features streamline coding tasks, empowering you to focus on innovation." />

            </div>
        </div>
        </>
    )
}
export default Sec
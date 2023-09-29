import React from "react";

const Se_ca = (props)=>{
    const{head , body} = props
    return(
        <>
        <div>
            <h2 className="text-black text-xl font-semibold mb-4">{head}</h2>
            <p className="text-white ">{body}</p>
        </div>

        </>
    )
}
export default Se_ca
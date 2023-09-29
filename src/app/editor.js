import React, { useState, useEffect } from "react";
import save from "../assets/uil_save.png"
import invi from "../assets/invite.png"
import selec from "../assets/selec.png"
import Editor from '@monaco-editor/react';
const Edit = () => {
  const [co, setCo] = useState("");
  const [coo, setCoo] = useState("");
  const [cvp, setCvp] = useState("cpp");

  // Load initial code and language from localStorage
  useEffect(() => {
    const storedCode = localStorage.getItem("code");
    const storedLang = localStorage.getItem("lang");

    if (storedCode !== null) {
      setCo(storedCode);
      setCoo(storedCode); // Set both co and coo initially
    }

    if (storedLang !== null) {
      setCvp(storedLang);
    }
  }, []);

  const update = (e) => {
    const selectedLang = e.target.value;
    setCvp(selectedLang);
    localStorage.setItem("lang", selectedLang);
  };
  const hty = ()=>{
    console.log(document.querySelector("#hg").style.display )
    if(document.querySelector("#hg").style.display == "block"){
    document.querySelector("#hg").style.display = "none"
    }
    else{
      document.querySelector("#hg").style.display = "block"
    }
  }
  const upco = (value) => {
    setCo(value);
    localStorage.setItem("code", value);
  };

  return (
    <>
    <div className="bg-[#010922] pb-10">
      <div>
        <div className="flex flex-row justify-around pt-10 font-semibold text-white">
            
            <h1 className="font-bold text-xl">code<strong>∞</strong>weave</h1>
            <div className="flex flex-row justify-around">
            <h1 className="mr-10 mt-2">Expires in 24 hrs</h1>
            <div className=" bg-[#303059] mr-10 pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] flex flex-row">
                <img src = {save} className="h-[1.2rem] mr-2 mt-[0.1rem]" />
            <button type="submit" className=" text-white "  >Save</button></div>
         <div className=" bg-[#303059] mr-10  pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] flex flex-row">
            <img src={invi} className="h-[0.8rem] mr-2 mt-[0.3rem]" />
               <button type="submit" className="  text-white"  >Invite</button></div>
            <button type="submit" className="mr-10 bg-[#F1A22B] text-white pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem]">Sign Up</button>
            </div>
            
        </div>
        
      </div>

   
      <div className="m-20 ml-10 flex flex-row">
        <div className="bg-[#071B2D] mr-10 pr-4 pl-4 pt-4">
          <div>
            <img src ={selec} onClick={hty} className="pb-1" />
        <select value={cvp} onChange={update} className="" id="hg">
          <option value="cpp">C++</option>
          <option value="html">HTML</option>
          <option value="c">C</option>
          <option value="java">JAVA</option>
          <option value="jsx">JavaScript</option>
          <option value="css">CSS</option>
        </select>
        </div>
        </div>
       <Editor height="35rem" width="43rem" defaultLanguage="cpp" onChange={upco}language = {cvp} value = {co} defaultValue="// some comment" theme="vs-dark"/>
       <div className="bg-[#071B2D] h-[35rem] w-[16.5rem] ml-10 text-white pt-4 pl-4">You will get your Ouput here</div>
      </div>
      </div>
    </>
  );
};

export default Edit;

import { useState } from "react"
import "./Overview.css"

import {Warning,Success}from "./warning"
const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
export default function Overview({Name,Number,setNumber,warning,setWarning}){
    return(
        <div className="movie-component" id="ovr">
            {
            Name?<OverviewEle Name={Name} setNumber={setNumber} Number={Number} setWarning={setWarning}/>:""
            }
            <Warning warning={warning}/>
            <Success warning={warning}/>

        </div>
    )
}


function OverviewEle({Name,setNumber,Number,setWarning}){
    // delay function applied
    async function ADDbtn(){
        if (!Number){
            setWarning("warning")
            await delay(3000)
            setWarning("")
            return;
        }
        setWarning("success")
        await delay(3000)
        setWarning("")


    }
    return (
        <div id="overview-ele">
            <img src={Name.Poster} alt={Name.Title}/>
            <div id="yz-43">
                <span style={Name.Title.length <20 ?{fontSize:"1.5rem"}:{fontSize:"0.9rem"}}>{Name.Title}</span>
                <span>🗓️{Name.Year}</span>
            </div>
            <div id="star-container">
                <Star setNumber = {setNumber} Number={Number}/>
                <button onClick={ADDbtn}>Add Watchlist</button>
            </div>

        </div>
    )
}
function Star({setNumber,Number}){
    return(
        <div>
            {
                Array.from({length:5},(_,i)=>i+1).map((e,index)=> <StarEle index={index} setNumber = {setNumber} Number={Number}/>)

            }
        </div>

    )
}
function StarEle({index,setNumber,Number}){
    function updateNum(){
        setNumber(index+1)
    }
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" fill={ index<Number? "yellow":""} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={updateNum}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>


        </>

    )

}
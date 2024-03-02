import { useEffect, useRef } from "react"
import "./Header.css"


export default function Header({normal,Count,setDrop}){


    return (
        <div id="Header-nav" >
            <Logo/>
            <Search normal = {normal} />
            <Found Count={Count} setDrop={setDrop}/>

        </div>
    )
}
function Logo(){
    return (
        <div id="logo-container">
            <img src="img/pop.png" alt ="LOGO"id="pop-img"/>
            <span>usePopcorn</span>

        </div>
    )
}
function Search({normal}){
    const inputElement=useRef(null)
    useEffect(function(){
        inputElement.current.focus();

    },[])

    return(
        <div id="search-box">
            <input  
            placeholder="Search movie . . ." 
            onChange={(e)=>normal(e.target.value)} 
            ref={inputElement}
            />
        </div>
    )
}
function Found({Count,setDrop}){
    function Dp(){
        setDrop((e)=>!e)
    }

    return (
        <div id="found" onClick={Dp}>
            <img src="img/watchlist.png" alt="watch list"/>
            <div id="count">
                <span>{Count}</span>
            </div>
        </div>
    )
}
import { useState } from "react"
import "./movie.css"
import Overview from "./Overview"

export default function Movie({Series,Load}){
const [Name,setName]=useState()
const [Number,setNumber]=useState()
const [warning,setWarning]=useState("")


    return (
        <div id="movie">
            <RenderMovie Series={Series}  Load={Load} setName={setName} Name={Name} setNumber={setNumber}/>
            <Overview Name ={Name} setNumber={setNumber} Number={Number} warning={warning} setWarning={setWarning}/>
        </div>
    )
}
function RenderMovie({Series,Load,setName,Name,setNumber}){
    return(
        <div className="movie-component" >
            {Load && <Loading/>}
            { Series?<List Series={Series} setName={setName} Name={Name} setNumber={setNumber}/>: <Found/>}
        </div>
    )
}
function List({Series,setName,Name,setNumber}){

    return(
        <>
    { Series.map((e)=><Items Title ={e.Title} Poster={e.Poster} Year={e.Year} setName={setName} Name={Name} setNumber={setNumber}/>)

    }
    </>

    )
}
function Items({Title,Poster,Year,setName,Name,setNumber}){
    const Ftc ={
        Title:Title,
        Poster:Poster,
        Year:Year
    }
    function getName(){
        setName(Ftc)
        setNumber()
   
    }
    return(
        <div className="list" onClick={getName}>
        <div id="list-img">
            <img src={Poster} alt={Title}/>
        </div>
        <div id="move-name-year">
            <span>{Title}</span>
            <span>🗓️ {Year}</span>

        </div>

    </div>
    )
}
function Found(){
    return(
        <div id="not-found">
        <span style={{color:"white"}}>Movie Not Found</span>
        </div>
    )
}
function Loading(){
    return(
        <div id="not-found">
        <span style={{color:"white"}}>Loading . . .</span>
        </div>

    )
}

// let Check = Name.findIndex((it)=>it.Title===Ftc.Title)
// // if the condition is satisfied then it will returns 3 ,otherwise it returns -1
// if(Check == -1){
//     setName((e)=>[...e,Ftc])

// }
// else{
//     setName((e)=>[...e])
// }
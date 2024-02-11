import { useState } from "react"
import "./movie.css"
import Overview from "./Overview"

export default function Movie({Series,Load}){
    const [Name,setName]=useState([])
    return (
        <div id="movie">
            <RenderMovie Series={Series}  Load={Load} setName={setName} Name={Name}/>
            <Overview/>
        </div>
    )
}
function RenderMovie({Series,Load,setName,Name}){
    return(
        <div className="movie-component" >
            {Load && <Loading/>}
            { Series?<List Series={Series} setName={setName} Name={Name}/>: <Found/>}
        </div>
    )
}
function List({Series,setName,Name}){

    return(
        <>
    { Series.map((e)=><Items Title ={e.Title} Poster={e.Poster} Year={e.Year} setName={setName} Name={Name}/>)

    }
    </>

    )
}
function Items({Title,Poster,Year,setName,Name}){
    const Ftc ={
        Title:Title,
        Poster:Poster,
        Year:Year
    }
    function getName(){
        let Check = Name.findIndex((it)=>it.Title===Ftc.Title)
        // if the condition is satisfied then it will returns 3 ,otherwise it returns -1
        if(Check == -1){
            setName((e)=>[...e,Ftc])

        }
        else{
            setName((e)=>[...e])
        }
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

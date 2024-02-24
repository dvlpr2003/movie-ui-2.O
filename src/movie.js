import { useEffect, useState } from "react"
import "./movie.css"
import Overview from "./Overview"

export default function Movie({Series,Load,setCount,Drop,setDrop}){
const [Name,setName]=useState()
const [number,setnumber]=useState()
const [warning,setWarning]=useState("")


// const [Add,setAdd]=useState([])
const [Add,setAdd]=useState(function(){
    const Value = localStorage.getItem("items")
    return JSON.parse(Value);
})
console.log(Add)
useEffect(function(){
    localStorage.setItem("items",JSON.stringify(Add))
},[Add])

let addLength=Add.length;

function Close(){
    setDrop()
}
setCount(addLength)
// EventListerner Function
useEffect (function(){
    document.addEventListener("keydown",function(e){
      if (e.code === "Escape"){
      setName(null)
      }
    })


// 
  },[setName])
    return (
        <div id="movie" onClick={Close} >
            <RenderMovie 
            Series={Series}  
            Load={Load} 
            setName={setName}
            Name={Name} 
            setnumber={setnumber}
            />
            <Overview 
            Name ={Name} 
            setnumber={setnumber} 
            number={number} 
            warning={warning} 
            setWarning={setWarning}
            setAdd={setAdd}
            Add={Add}

            />
            <Added 
            Add={Add}
            Drop={Drop}
            />
        </div>
    )
}
function RenderMovie({Series,Load,setName,Name,setnumber}){
    return(
        <div className="movie-component" >
            {Load && <Loading/>}
            { Series?<List Series={Series} setName={setName} Name={Name} setnumber={setnumber}/>: <Found/>}
        </div>
    )
}
function List({Series,setName,Name,setnumber}){

    return(
        <>
    { Series.map((e)=><Items Title ={e.Title} Poster={e.Poster} Year={e.Year} setName={setName} Name={Name} setnumber={setnumber}/>)

    }
    </>

    )
}
function Items({Title,Poster,Year,setName,setnumber,Name}){
    const Ftc ={
        Title:Title,
        Poster:Poster,
        Year:Year
    }
    function getName(){
        setName(Ftc)
        setnumber()
   
    }

    // Title Update Effect
    useEffect(function(){
        if (!Name) return;
        document.title=`${Name.Title}`
    
    },[Name])



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
// fucking code !!!
function Added({Add,Drop}){
    return (
        <div style={Drop?{display:"block"}:{display:"none"}}>
        <div id="add" >
        <div id="container-1">

            {
                Add.map((e)=><AddList title={e.title} image ={e.image} rating={e.rating} year={e.year}/>)
            }
        </div>
        </div>
        </div>
    )
}


function AddList({title,image,rating,year}){
    return(
        <div id="add-list" >
            <img src={image} alt={title}/>
            <div id="add-list-item">
                <span>{title}</span>
                <span>{year}</span>
                <div id="add-rating">
                <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6" id="e-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
                    <span>

                        {rating}</span>
                </div>
            </div>
        </div>
    )
}
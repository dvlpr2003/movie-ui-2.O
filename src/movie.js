import "./movie.css"

export default function Movie({Series,error,Load}){
    return (
        <div id="movie">
            <RenderMovie Series={Series} error={error} Load={Load}/>
            <Rating/>
        </div>
    )
}
function RenderMovie({Series,error,Load}){
    return(
        <div className="movie-component" >
            {Load && <Loading/>}
            { Series?<List Series={Series}/>: <Found/>}

        </div>
    )
}
function List({Series}){
    return(
        <>
    { Series.map((e)=>
    <div className="list">
        <div id="list-img">
            <img src={e.Poster} alt={e.Title}/>
        </div>
        <div id="move-name-year">
            <span>{e.Title}</span>
            <span>🗓️ {e.Year}</span>

        </div>

    </div>)

    }
    </>

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
function Rating(){
    return(
        <div className="movie-component">

        </div>
    )
}
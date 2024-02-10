import "./movie.css"

export default function Movie({Series,error}){
    return (
        <div id="movie">
            <RenderMovie Series={Series} error={error}/>
            <Rating/>
        </div>
    )
}
function RenderMovie({Series,error}){
    return(
        <div className="movie-component" >
            { Series?<List Series={Series}/>: <notFound/>}

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
function notFound(){
    return(
        <>
        <span style={{color:"white"}}>Movie Not Found</span>
        </>
    )
}
function Rating(){
    return(
        <div className="movie-component">

        </div>
    )
}
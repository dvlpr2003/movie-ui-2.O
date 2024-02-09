import "./movie.css"

export default function Movie({Series}){
    return (
        <div id="movie">
            <RenderMovie Series={Series}/>
            <Rating/>
        </div>
    )
}
function RenderMovie({Series}){
    return(
        <div className="movie-component">
            {
                Series.map((li)=><List Title={li.Title} Poster={li.Poster} Year={li.Year}/>)
            }
            

        </div>
    )
}
function List({Poster,Title,Year}){
    return(
        <div className="list">
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
function Rating(){
    return(
        <div className="movie-component">

        </div>
    )
}
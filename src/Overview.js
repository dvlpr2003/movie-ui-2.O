import "./Overview.css"
export default function Overview({Name}){
    return(
        <div className="movie-component">
            <OverviewEle Name={Name}/>
        </div>
    )
}


function OverviewEle({Name}){
    return (
        <div id="overview-ele">
            <img src={Name.Poster} alt={Name.Title}/>
            <div>
                <span>{Name.Title}</span>
                <span>🗓️{Name.Year}</span>
            </div>

        </div>
    )
}
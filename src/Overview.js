import "./Overview.css"
export default function Overview({Name}){
    return(
        <div className="movie-component">
            {
            
            Name?<OverviewEle Name={Name}/>:""

            }
        </div>
    )
}


function OverviewEle({Name}){
    return (
        <div id="overview-ele">
            <img src={Name.Poster} alt={Name.Title}/>
            <div>
                <span style={Name.Title.length <20 ?{fontSize:"1.5rem"}:{fontSize:"0.9rem"}}>{Name.Title}</span>
                <span>🗓️{Name.Year}</span>
            </div>

        </div>
    )
}
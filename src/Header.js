import "./Header.css"


export default function Header({normal}){


    return (
        <div id="Header-nav">
            <Logo/>
            <Search normal = {normal} />
            <Found />

        </div>
    )
}
function Logo(){
    return (
        <div id="logo-container">
            <img src="img/pop.png" id="pop-img"/>
            <span>usePopcorn</span>

        </div>
    )
}
function Search({normal}){
   
    return(
        <div id="search-box">
            <input placeholder="Search movie . . ." onChange={(e)=>normal(e.target.value)}/>
        </div>
    )
}
function Found(){
    return (
        <div id="found">
            <span>Found 0 top results</span>
        </div>
    )
}
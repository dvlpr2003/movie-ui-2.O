import "./ws.css"
function Warning({warning}){
    return (
        <div id="whz" style={warning==="warning"?{display:"block"}:{display:"none"}}>
            <div>
            <p>Rating fields is empty</p>
            </div>

            
        </div>
    )
}
function Success({warning}){
    return(
        <div id="zhw" style={warning==="success"?{display:"block"}:{display:"none"}}>
        <div>
            
        <p>Success</p>
        </div>
    </div>

    )
}

export {Warning,Success};
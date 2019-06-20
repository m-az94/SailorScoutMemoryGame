import React from "react";

function Wrapper(props){
    return( 
    <div className="container wrapper">
        <div class="row">{props.children}</div>
    </div>)
}

export default Wrapper;
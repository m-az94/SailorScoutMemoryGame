import React from "react";
import "./style.css";


function Characters(props){
    return (
            <div className="img-container" id={props.id} onClick={()=>{props.handleOnClick(props.id)}}>
                <img src={props.image} alt={props.name} />   
            </div>
    )
}

export default Characters;
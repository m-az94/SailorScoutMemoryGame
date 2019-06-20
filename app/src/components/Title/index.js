import React from "react";
import "./style.css";

function Title(props){
    return (
        <div class="jumbotron title-bar">
            <h1 id="title">The Sailor Scout Memory Game</h1>
            <h5 id="tagline">Can you remember these 90s icons?</h5>
            <hr />
            <p>Click on the images below to earn points. But be careful, clicking on an image already clicked will make you lose points</p>
            <h5>Score: {props.score}</h5>
        </div>
    )
}

export default Title;
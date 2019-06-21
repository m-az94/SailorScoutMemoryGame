import React from "react";
import "./style.css";

function Title(props){
    return (
        <div class="jumbotron title-bar">
            <h1 id="title">The Sailor Scout Memory Game</h1>
            <h5 id="tagline">Can you remember these 90s icons?</h5>
            <hr />
            <p>Click on the images below to earn points. But be careful, clicking on an image already clicked will make you lose points</p>
            <div class="row">
                <h5 className="col-md-6 scoreboard">Score: {props.score}</h5>
                <h5 className="col-md-6 scoreboard">Wins: {props.wins}</h5>
            </div>

        </div>
    )
}

export default Title;
import React from "react";
import Title from "./components/Title/index";
import Wrapper from "./components/Wrapper/index";
import Characters from "./components/Characters/index";
import characters from "./characters.json";
import "./style.css";

    class App extends React.Component{
        state = {
            cardInfo: characters,
            clicked: [],
            score: 0,
            highscore: 0
        };
    

        //taken from https://javascript.info/task/shuffle
        shuffle = (arr) => {
            for (let i = arr.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1));
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        handleOnClick = (id) =>{
            let clicked = this.state.clicked;
            let score = this.state.score;
            let updateScore = 0;
            let highscore=this.state.highscore;
            let updateHighScore = 0;
            if (clicked.includes(id)){
                updateScore = 0;
                clicked = []
            }
            else{
                updateScore= score +1;
                clicked.push(id);
            }

            if(updateScore>highscore){
                updateHighScore=updateScore;
            }
            else{
                updateHighScore=highscore;
            }

            this.setState({
                highscore: updateHighScore,
                score: updateScore,
                clicked: clicked
            })
            console.log(this.state)
            
        }
    
    render(){
        return (
            <div className="background">
                <div className="container">
                    <Title score={this.state.score} highscore={this.state.highscore} />
                    <Wrapper>
                    {
                        this.shuffle(this.state.cardInfo)
                        .map(characters =>{
                            return(
                            <Characters 
                            key={characters.id}
                            id={characters.id}
                            image={characters.image}
                            name={characters.name}
                            handleOnClick={this.handleOnClick}
                            />
                        )})
                    }
                    </Wrapper>
                </div>
            </div>

        );
    }
}

export default App;
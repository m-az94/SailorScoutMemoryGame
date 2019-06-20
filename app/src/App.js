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
            score: 0
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
            alert("handleo")
            let clicked = this.state.clicked;
            let score = this.state.score;
            let updateScore = 0
            if (clicked.includes(id)){
                updateScore = score-1;
            }
            else{
                updateScore= score +1;
                clicked.push(id);
            }

            this.setState({
                score: updateScore,
                clicked: clicked
            })
            console.log(this.state)
            
        }
    
    render(){
        return (
            <div className="background">
                <div className="container">
                    <Title score={this.state.score} />
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
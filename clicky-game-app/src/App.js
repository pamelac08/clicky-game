import React, {Component} from 'react';
import './App.css';

import Wrapper from "./components/Wrapper";
import PictureCard from "./components/PictureCard";
import Score from "./components/Score";
import pictures from "./pictures.json";

var shuffle = require("shuffle-array");


class App extends Component {
  state = {
    pictures: pictures,
    currentScore: 0,
    topScore: 0,
    selectedCards: [],
    navDisplayText: "Click an image to begin!"
  };

  handleClick = event => {
      event.preventDefault();

      console.log("event.target.id: ", event.target.id);
      console.log("this.state.selectedCards: ", this.state.selectedCards);

      var selectedCardsArray = this.state.selectedCards;

      // ////////////////// if top score reaches 16, you win??

      // if event.target.id is included in selectedCards 
      if (this.state.selectedCards.length > 0) {
          if (selectedCardsArray.includes(event.target.id)) {
                // need to change text in navbar to incorrect, reset score, and empty selectedCards
                this.setState({
                  currentScore: 0,
                  selectedCards: [],
                  navDisplayText: "You've guessed incorrectly"
                })
                
                // ///////// if the top score is less than current score, change top score 
          } else {
                // add event.target.id to selectedCards array, increase score, shuffle pictures array
                this.state.selectedCards.push(event.target.id);

                shuffle(pictures);
                console.log("shuffle pictures: ", pictures);

                this.setState({
                  currentScore: this.state.currentScore + 1,
                  navDisplayText: "You've guessed correctly!",
                  pictures: pictures
                });
          };
      } else {
        this.state.selectedCards.push(event.target.id);
        console.log("initial: event.target.id: ", event.target.id);
        console.log("initial: this.state.selectedCards: ", this.state.selectedCards);

        shuffle(pictures);

        this.setState({
          currentScore: this.state.currentScore + 1,
          navDisplayText: "You've guessed correctly!",
          pictures: pictures
        });
      };
  };


  render() {
    return (
      <div>
          <nav className="navbar sticky-top navbar-light bg-light">
              <span className="navbar-brand mb-0 h1">Clicky Game</span>
              <span className="navbar-text">{this.state.navDisplayText}</span>
              <span className="navbar-text">
                <Score type="Your Score" score={this.state.currentScore}></Score> || <Score type="Top Score" score={this.state.topScore}></Score>
              </span>
          </nav>

          <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1 className="display-4">Clicky Game!</h1>
                <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
          </div>

          <Wrapper>
            <div className="pictureDiv">
              {this.state.pictures.map((picture, index) => (
                <PictureCard
                key={index}
                id={picture.id}
                name={picture.name}
                image={picture.image}
                handleClick={this.handleClick}
                />
              ))}
            </div>
          </Wrapper>


        {/* Add footer */}


      </div>
    );
  };
};

export default App;

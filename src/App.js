import React, { Component } from 'react';
import Header from "./components/Header";
import Buttons from "./components/Buttons";
// ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
// "https://wind-bow.glitch.me/twitch-api/streams/"
// "https://wind-bow.glitch.me/twitch-api/channels/"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="results-body">
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;

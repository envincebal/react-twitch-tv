import React, { Component } from 'react';
import Header from "./components/Header";
import User from "./components/User";
import Buttons from "./components/Buttons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
      userInfo: [],
      online: false,
      offline: false
    }
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers() {
    const url = "https://wind-bow.glitch.me/twitch-api/streams/";

    this.state.users.forEach(user => {
      fetch(url + user)
        .then(data => data.json())
        .then(response => {
            this.setState({
            userInfo: response
          });
          console.log(this.state.userInfo);

        })
    })
  }
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

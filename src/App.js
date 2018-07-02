import React, { Component } from 'react';
import Header from "./components/Header";
import User from "./components/User";
import Buttons from "./components/Buttons";
import axios from "axios";

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
    const streamURL = "https://wind-bow.glitch.me/twitch-api/streams/";
    const channelURL = "https://wind-bow.glitch.me/twitch-api/users/";

    this.state.users.forEach(user => {
      axios(streamURL + user)
        .then(response1 => {
          if (response1.data.stream !== null) {
            this.setState({
              userInfo: this.state.userInfo.concat(response1)
            });
          } else {
            axios(channelURL + user)
              .then(response2 => {
                this.setState({
                  userInfo: this.state.userInfo.concat(response2)
                });

              })
          }
        })
    })

  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="results-body">
          <Buttons />
          {console.log(this.state.userInfo)}
          {this.state.userInfo.map((info, i) => {

          })}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from "./components/Header";
import User from "./components/User";
import Buttons from "./components/Buttons";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      permanentInfo: []
    }
  }

  componentWillMount = () => {
    this.getUsers();
  }

  getUsers = () => {
    const streamURL = "https://wind-bow.glitch.me/twitch-api/streams/";
    const channelURL = "https://wind-bow.glitch.me/twitch-api/users/";
    const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    users.forEach(user => {
      axios(streamURL + user)
        .then(response1 => {
          if (response1.data.stream) {
            this.setState(prevState => ({
              userInfo: prevState.userInfo.concat(response1),
              permanentInfo: prevState.permanentInfo.concat(response1)
            }));
          } else {
            axios(channelURL + user)
              .then(response2 => {
                this.setState(prevState => ({
                  userInfo: prevState.userInfo.concat(response2),
                  permanentInfo: prevState.permanentInfo.concat(response2)
                }));
              })
          }
        })
    })
  }
  allButton = () => {
    this.setState(prevState => ({
      userInfo: prevState.permanentInfo
    }))
  }
  onlineButton = () => {
    const filtered = this.state.permanentInfo.filter((item) => {
      return item.data.stream;
    });
    this.setState({
      userInfo: filtered
    });
  }
  offlineButton = () => {
    const filtered = this.state.permanentInfo.filter((item) => {
      return !item.data.stream;
    });
    this.setState({
      userInfo: filtered
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="results-body">
          <Buttons
            all={this.allButton}
            online={this.onlineButton}
            offline={this.offlineButton}
          />
          <div className="user-container">
            {
              this.state.userInfo.map((info, i) => {
                if (info.data.stream) {
                  return <User
                    key={i}
                    displayName={info.data.stream.channel.display_name}
                    image={info.data.stream.channel.logo}
                    status={info.data.stream.game}
                    profileLink={info.data.stream.channel.url}
                  />
                } else {
                  return <User
                    key={i}
                    displayName={info.data.display_name}
                    image={info.data.logo}
                    status={"Offline"}
                    profileLink={"https://www.twitch.tv/" + info.data.display_name}
                  />
                }
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

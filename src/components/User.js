import React from 'react';

const User = (props) => {
  return (

    <a href="" className={"user-card " + (props.status === "Offline" ? "offline" : "online")}>
      <div className="img-container">
        <img className="profile-pic" src={props.image} alt="avatar" />
      </div>
      <div className="details-container">
        <p className="display-name">{props.displayName}</p>
        <p className="status">{props.status}</p>
      </div>
    </a>
  );
}

export default User;

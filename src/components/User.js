import React from 'react';

const User = (props) => {
  return (
    <a href={props.profileLink} className={"user-card " + (props.status.includes("Offline") ? "offline" : "online")}>
      <div className="img-container">
        <img className="profile-pic" src={props.image} alt="avatar" />
      </div>
      <div className="details-container">
        <p className="display-name">{props.displayName}</p>
        <p className="status">Current Activity: <br/><span>{props.status}</span></p>
      </div>
    </a>
  );
}

export default User;

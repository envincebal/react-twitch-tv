import React from 'react';

const User = (props) => {
  const { profileLink,
    status,
    image,
    displayName } = props;
  return (
    <a href={profileLink} className={"user-card " + (status.includes("Offline") ? "offline" : "online")} target="_blank">
      <div className="img-container">
        <img className="profile-pic" src={image} alt="avatar" />
      </div>
      <div className="details-container">
        <p className="display-name">{displayName}</p>
        <p className="status">Current Activity: <br /><span>{status}</span></p>
      </div>
    </a>
  );
}

export default User;

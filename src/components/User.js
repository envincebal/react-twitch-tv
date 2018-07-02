import React from 'react';

const User = (props) => {
  return (
    <div className="user-container">
      <div className="img-container">
        <img className="profile-pic" src={props.image} />
      </div>
      <div className="details-container">
        <p className="display-name">{props.displayName}</p>
        <p className="status">{props.status}</p>
      </div>
    </div>
  );
}

export default User;

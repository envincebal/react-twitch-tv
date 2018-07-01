import React from 'react';

const User = (props) => {
  return (
    <div className="user-container">
      <div className="img-container">
        <img className="profile-pic" src="" alt="" />
      </div>
      <div className="details-container">
        <p className="display-name"></p>
        <p className="status"></p>
      </div>
    </div>
  );
}

export default User;

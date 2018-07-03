import React from 'react';

const Buttons = (props) => {
  return (
    <div className="buttons-container">
     <button className="all-button button" onClick={props.all}>All</button>
     <button className="online-button button" onClick={props.online}>Online</button>
     <button className="offline-button button" onClick={props.offline}>Offline</button>
    </div>
  );
}

export default Buttons;

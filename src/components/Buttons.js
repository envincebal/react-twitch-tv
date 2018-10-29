import React from 'react';

const Buttons = (props) => {
  const {offlineToggle,
    onlineToggle,
    onlineHandler,
    offlineHandler,
    all} = props;
  return (
    <div className="buttons-container">
     <button className={"all-button button " + (!onlineToggle && !offlineToggle ? "focus" : "")} onClick={all}>All</button>
     <button className={"online-button button " + (onlineToggle && !offlineToggle ? "focus" : "")} onClick={onlineHandler}>Online</button>
     <button className={"offline-button button " + (!onlineToggle && offlineToggle ? "focus": "")} onClick={offlineHandler}>Offline</button>
    </div>
  );
}

export default Buttons;

import React from 'react';

const Buttons = (props) => {
  return (
    <div className="buttons-container">
     <button className={"all-button button " + (!props.onlineToggle && !props.offlineToggle ? "focus" : "")} onClick={props.all}>All</button>
     <button className={"online-button button " + (props.onlineToggle && !props.offlineToggle ? "focus" : "")} onClick={props.onlineHandler}>Online</button>
     <button className={"offline-button button " + (!props.onlineToggle && props.offlineToggle ? "focus": "")} onClick={props.offlineHandler}>Offline</button>
    </div>
  ); 
}

export default Buttons;

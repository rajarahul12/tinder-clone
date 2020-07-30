import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chat.css";
import { Link } from "react-router-dom";

function Chat({ name, message, timestamp, profilePic }) {
  const newTo = {
    pathname: `/chat/${name}`,
    profilePic: profilePic,
    message: message,
  };
  return (
    <Link to={newTo}>
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;

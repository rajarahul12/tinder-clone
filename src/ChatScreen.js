import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen(props) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: `${props.match.params.person}`,
      image: props.location.profilePic,
      message: props.location.message,
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        message: input,
      },
    ]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH {props.match.params.person.toUpperCase()} ON{" "}
        {props.match.params.person == "Katherine" ? "10/8/20" : "22/6/20"}
      </p>
      <div className="chatScreen__messages">
        {messages.map((message) =>
          message.name ? (
            <div className="chatScreen__message">
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{message.message}</p>
            </div>
          )
        )}
      </div>

      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;

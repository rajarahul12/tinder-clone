import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Katherine"
        message="Hey! how are you 🙂"
        timestamp="35 minutes ago"
        profilePic="https://www.mindfood.com/wp-content/themes/mindfood-theme/timthumb.php?src=/wp-content/uploads/2017/06/kathlang.jpg&w=700&h=700&zc=1"
      />
      <Chat
        name="Amber Heard"
        message="Whats up?"
        timestamp="50 minutes ago"
        profilePic="https://pmcvariety.files.wordpress.com/2020/07/amber-heard-1.jpg?w=1000"
      />
    </div>
  );
}

export default Chats;

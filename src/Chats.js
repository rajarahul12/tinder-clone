import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <h1>Chat Page</h1>
      <Chat
        name="Katherine"
        message="Hey! how are you 🙂"
        timestamp="35 minutes ago"
        profilePic="https://www.mindfood.com/wp-content/themes/mindfood-theme/timthumb.php?src=/wp-content/uploads/2017/06/kathlang.jpg&w=700&h=700&zc=1"
      />
      <Chat
        name="Ellen"
        message="Whats up?"
        timestamp="35 minutes ago"
        profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879"
      />
    </div>
  );
}

export default Chats;

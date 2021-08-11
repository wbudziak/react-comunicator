import React from "react";
import { useState } from "react";
import styled from "./ChatWindow.module.css";
import UserMessage from "./UserMessage";
function ChatWindow(props) {
  const [isTheSamePerson, setIsTheSamePerson] = useState(true);

  const renderChatData = props.chatData.map((chatData) => (
    <UserMessage
      user={chatData.user}
      userMessage={chatData.userMessage}
      theSamePerson={isTheSamePerson}
    ></UserMessage>
  ));

  return (
    <div className={styled.chatWindow}>
      {!props.isLoading ? <p>Loading...</p> : renderChatData}
    </div>
  );
}

export default ChatWindow;

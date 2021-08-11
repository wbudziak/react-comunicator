import React from "react";
import { useState } from "react";
import styled from "./ChatWindow.module.css";
import UserMessage from "./UserMessage";
function ChatWindow(props) {
  const [isTheSamePerson, setIsTheSamePerson] = useState(true);
  const [direction, setDirection] = useState(false);
  const [localName, setLocalName] = useState(props.username);

  const renderChatData = props.chatData.map((chatData) => (
    <UserMessage
      user={chatData.user}
      userMessage={chatData.userMessage}
      theSamePerson={isTheSamePerson}
      localName={localName}
    ></UserMessage>
  ));

  return (
    <React.Fragment>
      <div className={styled.chatWindow}>{renderChatData}</div>
    </React.Fragment>
  );
}

export default ChatWindow;

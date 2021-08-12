import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import UserMessage from "./UserMessage";
const ChatWindowContainer = styled.div`
  width: 100%;
  height: 600px;
  max-height: 600px;
  overflow-y: scroll;
  margin-bottom: 20px;
  border-radius: 10px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(130, 70, 219, 0.42);
  }
`;
function ChatWindow(props) {
  const scrollRef = useRef(null);
  const [isTheSamePerson, setIsTheSamePerson] = useState(true);
  const [isHost, setIsHost] = useState(false);
  const renderChatData = props.chatData.map((chatData) => (
    <UserMessage
      user={chatData.user}
      userMessage={chatData.userMessage}
      theSamePerson={isTheSamePerson}
      isHost={chatData.user === props.hostName ? true : false}
    ></UserMessage>
  ));
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (flag !== false) {
      scrollRef.current.scrollIntoView();
      setTimeout(() => {
        setFlag(false);
      }, 500);
    }
  });

  useEffect(() => {
    if (props.canScroll) {
      scrollRef.current.scrollIntoView();
      setTimeout(() => {
        props.canScrollCallback();
      }, 500);
    }
  });

  return (
    <ChatWindowContainer>
      {renderChatData}
      <div ref={scrollRef}></div>
    </ChatWindowContainer>
  );
}

export default ChatWindow;

import React, { useCallback, useState, useEffect, useRef } from "react";
import Wrapper from "./Wrapper";
import ChatWindow from "./Chatwindow";
import InputsSection from "./InputsSection";
function Chat(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hostName, setHostName] = useState(props.username);
  const [canScroll, setCanScroll] = useState(false);

  const fetchChatData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://comunicator-74c17-default-rtdb.europe-west1.firebasedatabase.app/chatData.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedDatas = [];
      for (const key in responseData) {
        loadedDatas.push({
          id: key,
          user: responseData[key].user,
          userMessage: responseData[key].userMessage,
        });
      }
      setData(loadedDatas);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchChatData();
  }, [addChatDataHandler]);

  async function addChatDataHandler(chatData) {
    setCanScroll(true);
    const response = await fetch(
      "https://comunicator-74c17-default-rtdb.europe-west1.firebasedatabase.app/chatData.json",
      {
        method: "POST",
        body: JSON.stringify(chatData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();
  }
  const canScrollFalse = () => {
    setCanScroll(false);
  };
  return (
    <Wrapper>
      <ChatWindow
        chatData={data}
        isLoading={isLoading}
        hostName={hostName}
        canScroll={canScroll}
        canScrollCallback={canScrollFalse}
      ></ChatWindow>
      <InputsSection
        chatData={addChatDataHandler}
        hostName={hostName}
      ></InputsSection>
    </Wrapper>
  );
}

export default Chat;

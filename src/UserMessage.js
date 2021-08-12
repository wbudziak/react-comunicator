import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UserMessageContainerWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.host ? "flex-end" : "flex-start")};
  justify-content: center;
`;
const UserNameWrapper = styled.p`
  display: ${(props) => props.host && "none"};
  margin: 0 !important;
  color: gray;
  font-size: 16px;
  line-height: 26px;
  margin-right: 10px !important;
`;
const UserMessageWrapper = styled.p`
  margin: 0 !important;
  margin-right: ${(props) => (props.host ? "20px !important" : "0 !important")};
  font-size: 19px;
  line-height: 29px;
  word-break: break-all;
  background-color: rgba(130, 70, 219, 0.42);
  border-radius: ${(props) => (props.host ? "20px" : "20px 20px 20px 20px")};
  padding: 5px 10px;
  max-width: 75%;
  color: white;
`;

function UserMessage(props) {
  return (
    <UserMessageContainerWrapper host={props.isHost}>
      <UserNameWrapper host={props.isHost}>{`${props.user} :`}</UserNameWrapper>
      <UserMessageWrapper host={props.isHost}>
        {props.userMessage}
      </UserMessageWrapper>
    </UserMessageContainerWrapper>
  );
}

export default UserMessage;

import React, { useState } from "react";
import styled from "./UserMessage.module.css";
function UserMessage(props) {
  const userName = <p className={styled.user}>{`${props.user} :`}</p>;
  const userMessage = <p className={styled.userMessage}>{props.userMessage}</p>;
  return (
    <React.Fragment>
      {props.localName === props.user && (
        <div className={styled.userMessageContainerRight}>{userMessage}</div>
      )}
      {props.localName !== props.user && (
        <div className={styled.userMessageContainerLeft}>
          {userName}
          {userMessage}
        </div>
      )}
    </React.Fragment>
  );
}

export default UserMessage;

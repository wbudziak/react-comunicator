import React, { useState } from "react";
import styled from "./UserMessage.module.css";
function UserMessage(props) {
  const userName = <p className={styled.user}>{`${props.user} :`}</p>;
  const userMessage = <p className={styled.userMessage}>{props.userMessage}</p>;
  return (
    <div className={styled.userMessageContainer}>
      {props.theSamePerson ? userName : ""}
      {userMessage}
    </div>
  );
}

export default UserMessage;

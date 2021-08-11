import React, { useRef } from "react";
import { useState } from "react";
import styled from "./InputsSection.module.css";
function InputsSection(props) {
  const [inputValue, setInputValue] = useState("");
  const userMessageRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (userMessageRef.current.value === "") return;
    setInputValue("");
    const data = {
      user: props.username,
      userMessage: userMessageRef.current.value,
    };
    props.chatData(data);
  };
  return (
    <div className={styled.inputsSection}>
      <form className={styled.form} onSubmit={submitHandler}>
        <input
          className={styled.text}
          type="text"
          id="message"
          ref={userMessageRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={styled.button}>
          <i class="far fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default InputsSection;

import React, { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

const InputSectionWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const InputTextWrapper = styled.input`
  flex: 1;
  height: 100%;
  font-size: 24px;
  padding-left: 25px;
  padding-right: 25px;
  color: rgb(154, 154, 154);
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: #f1f1f1;
`;
const ButtonWrapper = styled.button`
  cursor: pointer;
  padding-left: 25px;
  padding-right: 25px;
  height: 100%;
  border: none;
  outline: none;
  color: white;
  background-color: white;
  border-radius: 20px;
  font-size: 24px;
  margin-left: 20px;
  background-color: rgba(130, 70, 219, 0.42);
`;

function InputsSection(props) {
  const [inputValue, setInputValue] = useState("");
  const userMessageRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (userMessageRef.current.value === "") return;
    setInputValue("");
    const data = {
      user: props.hostName,
      userMessage: userMessageRef.current.value,
    };
    props.chatData(data);
  };
  return (
    <InputSectionWrapper>
      <FormWrapper onSubmit={submitHandler}>
        <InputTextWrapper
          type="text"
          id="message"
          ref={userMessageRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></InputTextWrapper>
        <ButtonWrapper>
          <i class="fas fa-paper-plane"></i>
        </ButtonWrapper>
      </FormWrapper>
    </InputSectionWrapper>
  );
}

export default InputsSection;

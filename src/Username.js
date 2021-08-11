import React from "react";
import { useState } from "react";
import styled from "./Username.module.css";
function Username(props) {
  const [inputValue, setInputValue] = useState("");
  const setNameHandler = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    if (inputValue.length <= 3) {
      alert("more than 3 chars");
      return;
    }
    if (inputValue.length >= 15) return;
    props.username(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <form onSubmit={setNameHandler}>
        <input
          className={styled.form}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button className={styled.btn}>set name</button>
      </form>
    </div>
  );
}

export default Username;

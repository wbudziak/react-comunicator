import React from "react";
import styled from "./Wrapper.module.css";
function Wrapper(props) {
  return (
    <React.Fragment>
      <div className={styled.wrapper}>{props.children}</div>
    </React.Fragment>
  );
}

export default Wrapper;

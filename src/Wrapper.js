import React from "react";
import styled from "styled-components";

const WrapperContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: auto;

  background-color: white;
  padding: 20px;
  border-radius: 20px;
`;

function Wrapper(props) {
  return (
    <React.Fragment>
      <WrapperContainer>{props.children}</WrapperContainer>
    </React.Fragment>
  );
}

export default Wrapper;

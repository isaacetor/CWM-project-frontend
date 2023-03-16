import React from "react";
import styled from "styled-components";

const MakePayment = () => {
  return (
    <div>
      <Container>
        <Wrapper></Wrapper>
      </Container>
    </div>
  );
};

export default MakePayment;

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  background: pink;
`;

const Container = styled.div`
  width: calc(100vw - 280px);
  height: 100vh;
  /* background-color: #000b9d; */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

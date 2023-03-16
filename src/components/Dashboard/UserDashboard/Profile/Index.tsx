import React from "react";
import styled from "styled-components";

const Index = () => {
  return (
    <div>
      <Container>
        <Wrapper></Wrapper>
      </Container>
    </div>
  );
};

export default Index;

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  background: #2aa5a5;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: calc(100vw - 280px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f8fc9e;
`;

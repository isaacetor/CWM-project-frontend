import React from "react";
import styled from "styled-components";

const MessageAdmin = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>
            Have Questions?
            <p>we'd love to answer them.</p>
          </Text>
          <Main>
            <First>
              <Top></Top>
            </First>
            <Second></Second>
          </Main>
        </Wrapper>
      </Container>
    </div>
  );
};

export default MessageAdmin;

const Top = styled.div`
  width: 95%;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.027) 1.95px 1.95px 2.6px;
`;

const Second = styled.div`
  width: 35%;
  height: 100%;
`;

const First = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  width: 100%;
  color: #1d1d41;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 15px;

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: calc(100vw - 270px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff2ec92;
`;

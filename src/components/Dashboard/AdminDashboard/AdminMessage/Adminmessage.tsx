import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import styled from "styled-components";
import AdminDashboardSidebar from "../AdminDashboardSidebar";

const Adminmessage = () => {
  const [showOne, setShowOne] = useState(true);
  const [showMany, setShowMany] = useState(false);

  const showOnee = () => {
    setShowOne(!showOne);
    setShowMany(false);
  };
  const showManyy = () => {
    setShowMany(!showMany);
    setShowOne(false);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          {/* title */}
          <Text>
            Send Broadcast or Message A Client
            <BsPerson style={{ fontSize: "25px" }} />
          </Text>
          <Main>
            <First>
              {/* where to create message form field */}
              <Analytics>
                <ButtonHold>
                  <One onClick={showOnee}>Send Message to One Client?</One>
                  <Many onClick={showManyy}>Send Message to All Client?</Many>
                </ButtonHold>
                {showOne ? (
                  <MessageOne>
                    <input placeholder="Enter client email" />
                    <input placeholder="Enter message title" />
                    <textarea />
                    <button>Send message</button>
                  </MessageOne>
                ) : null}
                {showMany ? (
                  <MessageMany>
                    <input placeholder="Enter message title" />
                    <textarea />
                    <button>Send Broadcast</button>
                  </MessageMany>
                ) : null}
              </Analytics>
            </First>
            {/* sidebar */}
            <AdminDashboardSidebar />
          </Main>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Adminmessage;

const ButtonHold = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;
`;

const One = styled.button`
  padding: 15px 50px;
  background-color: #fff;
  color: #1d1d41;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }
`;
const Many = styled.button`
  padding: 15px 50px;
  background-color: #fff;
  color: #1d1d41;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }
`;

const MessageMany = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    width: 90%;
    height: 7vh;
    padding: 10px;
    border: 0;
    font-size: 20px;
    margin-bottom: 20px;
    margin: auto;
  }

  textarea {
    width: 90%;
    height: 30vh;
    padding: 10px;
    border: 0;
    font-family: poppins;
    font-size: 16px;
    margin-bottom: 20px;
    margin: auto;
  }

  button {
    margin: auto;
    padding: 15px 20px;
    width: 200px;
  }
`;
const MessageOne = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    width: 90%;
    height: 7vh;
    padding: 10px;
    border: 0;
    outline: 0;
    font-size: 20px;
    margin-bottom: 20px;
    margin: auto;
  }

  textarea {
    width: 90%;
    height: 30vh;
    padding: 10px;
    outline: 0;
    border: 0;
    font-family: poppins;
    font-size: 16px;
    margin-bottom: 20px;
    margin: auto;
  }

  button {
    margin: auto;
    padding: 15px 20px;
    width: 200px;
  }
`;

const Analytics = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1d1d41;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const Income = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #ea06ee;
  margin-bottom: 20px;
`;

const First = styled.div`
  width: 70%;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const Text = styled.div`
  width: 100%;
  color: #fff;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
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
  background-color: #141332;
  display: flex;
  justify-content: center;
  align-items: center;
`;

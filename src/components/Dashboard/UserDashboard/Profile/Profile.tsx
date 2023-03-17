import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Main>
            <First>
              <Title>
                <h2>General Details</h2>
                <p>Update your personal details here</p>
              </Title>
            </First>
            <Second>
              <Title2>
                <h2>Personal Information</h2>
              </Title2>
              <Details>
                <NameHold>
                  <h3>Full Name/Company Name</h3>
                  <p>your name</p>
                </NameHold>
                <NameHold>
                  <h3>Email Address</h3>
                  <p>your Email</p>
                </NameHold>
              </Details>
              <Details>
                <NameHold>
                  <h3>ClientType</h3>
                  <p>your name</p>
                </NameHold>
                <NameHold>
                  <h3>Location</h3>
                  <p>Apapa</p>
                </NameHold>
              </Details>
              <Details>
                <NameHold>
                  <h3>Full Name/Company Name</h3>
                  <p>your name</p>
                </NameHold>
                <NameHold>
                  <h3>Email Address</h3>
                  <p>your Email</p>
                </NameHold>
              </Details>
            </Second>
          </Main>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Profile;

const NameHold = styled.div``;

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 130px;
  margin-bottom: 30px;

  h3 {
    margin: 0;
    margin-top: 20px;
    font-weight: 500;
  }
  p {
    margin: 0;
    margin-top: 20px;
    border-bottom: 1px solid #00000051;
    padding-bottom: 10px;
    width: 300px;
  }
`;

const Title2 = styled.div`
  width: 100%;
  height: 7vh;
  border-bottom: 1px solid #03001c11;

  h2 {
    margin: 0;
    font-weight: 600;
  }
  p {
    margin: 0;
    margin-top: 5px;
    color: #03001c6e;
  }
`;
const Title = styled.div`
  width: 100%;
  /* height: 10vh; */

  h2 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-top: 5px;
    color: #03001c6e;
  }
`;

const Second = styled.div`
  width: 80%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.122) 0px 1px 4px;
  margin-top: 30px;
  padding: 40px;
`;

const First = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
`;

const Main = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  /* background: #2aa5a5; */

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
  color: #03001c;
`;

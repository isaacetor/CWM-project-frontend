import React from "react";
import UserDashboardSidebar from "./UserDashboardSidebar";
import styled from "styled-components";

import TransactionHistory from "./TransactionHistory";
import UserNotification from "./UserNotification";

const UserDashboardHome = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>Welcome Back , Esther 👋</Text>
          <Main>
            <First>
              <UserNotification />
              <TransactionHistory />
            </First>
            <Second>
              <UserDashboardSidebar />
            </Second>
          </Main>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserDashboardHome;

const Second = styled.div`
  width: 35%;
  height: 100%;
`;

const First = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  width: 100%;
  /* height: 10%; */
  /* background-color: blue; */
  color: #1d1d41;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 15px;
`;

const Wrapper = styled.div`
  width: 95%;
  /* height: 95%; */
  /* background: brown; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: calc(100vw - 270px);
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ecf2ff92;
`;

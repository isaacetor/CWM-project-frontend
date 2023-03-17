import React from "react";
import styled from "styled-components";
import AdminDashboardSidebar from "../AdminDashboardSidebar";

const AdminNotification = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>Your Notifications</Text>
          <Main>
            <First>
              <Transaction></Transaction>
            </First>
            <AdminDashboardSidebar />
          </Main>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AdminNotification;

const Transaction = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
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
  color: #1d1d1d;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 15px;
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
  background-color: #f6f8fc9e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

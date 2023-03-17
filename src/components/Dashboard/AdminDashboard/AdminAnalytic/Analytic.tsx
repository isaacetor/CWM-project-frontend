import React from "react";
import styled from "styled-components";
import AdminDashboardSidebar from "../AdminDashboardSidebar";

const Analytic = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>See Data Statistics</Text>
          <Main>
            <First>
              <Income></Income>
              <Analytics></Analytics>
              <Transaction></Transaction>
            </First>
            {/* sidebar */}
            <AdminDashboardSidebar />
          </Main>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Analytic;

const Transaction = styled.div`
  width: 100%;
  height: 45vh;
  background-color: #1d1d41;
  border-radius: 20px;
`;

const Analytics = styled.div`
  width: 100%;
  height: 45vh;
  background-color: #1d1d41;
  margin-bottom: 20px;
  border-radius: 20px;
`;

const Income = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #3a0080;
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

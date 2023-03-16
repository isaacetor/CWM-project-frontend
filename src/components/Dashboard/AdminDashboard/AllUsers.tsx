import React from "react";
import { BsPerson } from "react-icons/bs";
import styled from "styled-components";
import AdminSidebar from "./AdminDashboardSidebar";

const AllUsers = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          {/* title */}
          <Text>
            View All Clients <BsPerson style={{ fontSize: "25px" }} />
          </Text>

          <Main>
            <First>
              {/* where to select users by location */}
              <Income></Income>

              {/* where to see all the users in selected location */}
              <Analytics></Analytics>
            </First>
            {/* sidebar */}
            <AdminSidebar />
          </Main>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AllUsers;

const Analytics = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #1d1d41;
  margin-bottom: 20px;
  border-radius: 20px;
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

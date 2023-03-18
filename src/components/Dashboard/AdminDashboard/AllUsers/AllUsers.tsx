import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsPerson } from "react-icons/bs";
import styled from "styled-components";
import { getAllClients } from "../../../Api/Endpoints";
import AdminDashboardSidebar from "../AdminDashboardSidebar";

const AllUsers = () => {
  const allClients = useQuery({
    queryKey: ["viewClients"],
    queryFn: getAllClients,
  });

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
              {allClients?.data?.data?.map((props: any) => (
                <Msg1>
                  <Holder>
                    <CoverImg> {props?.name.charAt().toUpperCase()}</CoverImg>
                    <P1>{props?.name} </P1>
                  </Holder>
                  <P2>{props?.address} </P2>
                  <P3>{props?.email} </P3>
                  <P4>{props?.phoneNumber} </P4>
                </Msg1>
              ))}
              <Analytics> </Analytics>
            </First>
            {/* sidebar */}
            <AdminDashboardSidebar />
          </Main>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AllUsers;
const P4 = styled.button`
  margin: 0;
  /* color: black; */
  font-size: 12px;
  margin-right: 20px;
  font-weight: 500;
  background-color: lightgreen;
  color: rgb(0, 100, 0);
  width: 100px;
  height: 25px;
  border-radius: 30px;
  border: none;
  outline: none;
`;

const P3 = styled.div`
  margin: 0;
  color: black;
  font-size: 12px;
  margin-right: 50px;
  width: 180px;
  font-weight: 500;
`;
const P2 = styled.div`
  margin: 0;
  color: black;
  font-size: 12px;
  margin-right: 60px;
  font-weight: 500;
  width: 180px;
`;
const P1 = styled.div`
  margin: 0;
  color: black;
  font-size: 12px;
  margin-right: 18px;
  width: 120px;
  font-weight: 500;
`;

const Msg1 = styled.div`
  width: calc(100% - 20px);
  height: 10vh;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
`;

const CoverImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #8b008b97;
  color: darkmagenta;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 500;
  margin-left: 10px;
  margin-right: 5px;
`;

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

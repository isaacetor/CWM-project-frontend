import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { getOneAdmin } from "../../Api/adminApi";
import { UseAppSelector } from "../../Global/Store";
import AdminDashboardSidebar from "./AdminDashboardSidebar";
import chart from "../../../Assets/chart.png";
import TransactionHistory from "../UserDashboard/TransactionHistory";

const AdminDashboardHome = () => {
  const admin = UseAppSelector((state) => state.Admin);

  console.log(admin);

  const fetchUser = useQuery({
    queryKey: ["Admins"],
    queryFn: () => getOneAdmin(admin?._id),
  });

  console.log(fetchUser);
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>Welcome Back , {admin?.name?.toUpperCase()} 👋</Text>
          <Main>
            <First>
              <Income>
                <TodayIncome>
                  <One></One>
                  <Two>
                    <span>Total Income</span>
                    <h3>N20000</h3>
                  </Two>
                </TodayIncome>
                <TodayIncome>
                  <One></One>
                  <Two>
                    <span>Total Outcome</span>
                    <h3>N20000</h3>
                  </Two>
                </TodayIncome>
              </Income>
              <Analytic>
                <Top>
                  <h3>Analytic</h3>
                </Top>
                <Down>
                  <img src={chart} alt="" />
                </Down>
              </Analytic>
              <Transaction>
                <Bottom1>
                  <Notify>
                    <Ones>Transaction History</Ones>
                  </Notify>
                  <Record>
                    <p>Title</p>
                    <p>Date</p>
                    <p>Amount</p>
                    <p>Status</p>
                  </Record>
                  <MsgHold>
                    <Msg1>
                      <Holder>
                        <CoverImg>E</CoverImg>
                        <P1>January 2023 Bill</P1>
                      </Holder>
                      <P2>Sat,20 Jan 2023</P2>
                      <P3>30,000</P3>
                      <P4>PAID</P4>
                    </Msg1>
                    <Msg></Msg>
                    <Msg></Msg>
                    <Msg></Msg>
                    <Msg></Msg>
                    <Msg></Msg>
                    <Msg></Msg>
                    <Msg></Msg>
                    <Msg></Msg>
                  </MsgHold>
                </Bottom1>
              </Transaction>
            </First>
            {/* sidebar */}
            <AdminDashboardSidebar />
          </Main>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AdminDashboardHome;

const Msg = styled.div`
  width: calc(100% - 20px);
  height: 10vh;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow-x: hidden;

  white-space: nowrap;
  max-width: calc(100% - 20px);
  text-overflow: ellipsis;

  p {
    margin: 0;
    color: #aaa9b8;
    font-size: 12px;
    margin-left: 5px;
  }
  span {
    margin-left: 5px;
    color: #45454b;
    font-size: 13px;
  }
`;

const MsgHold = styled.div`
  /* background-color: red; */

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #121111;
    border-radius: 5px;
  }
  width: calc(100% - 20px);
  height: 70%;
  margin-left: 10px;
`;

const Ones = styled.div`
  width: 40%;
  height: 100%;
  font-weight: 500;
  font-size: 18px;
  /* margin-bottom: 20px; */
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const Notify = styled.div`
  width: 100%;
  height: 7vh;
  margin-bottom: 10px;
  display: flex;
`;

const P4 = styled.button`
  margin: 0;

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

  font-size: 12px;
  margin-right: 50px;
  width: 180px;
  font-weight: 500;
`;
const P2 = styled.div`
  margin: 0;

  font-size: 12px;
  margin-right: 60px;
  font-weight: 500;
  width: 180px;
`;
const P1 = styled.div`
  margin: 0;
  font-size: 12px;
  margin-right: 18px;
  width: 120px;
  font-weight: 500;
`;

const Msg1 = styled.div`
  width: calc(100% - 20px);
  height: 10vh;

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

const Record = styled.div`
  width: calc(100% - 50px);
  /* width: 100%; */
  height: 3vh;
  /* background-color: red; */
  margin-left: 30px;

  border-radius: 5px;
  margin-bottom: 2px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  p {
    margin: 0;
    color: #aaa9b8;
    font-size: 12px;
    margin-left: 5px;
    font-weight: 600;
    width: 100px;
    /* margin-right: 15px; */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Bottom1 = styled.div`
  width: 95%;
  height: 45vh;
  background-color: transparent;
  color: #fff;
  border-radius: 10px;
  margin: 10px;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.027) 1.95px 1.95px 2.6px;
`;

const One = styled.div`
  width: 70px;
  height: 60%;
  background-color: aqua;
  border-radius: 10px;
`;
const Two = styled.div`
  width: 100%;
  height: 80%;

  span {
    margin: 0;
  }

  h3 {
    margin: 0;
  }
`;

const TodayIncome = styled.div`
  width: 300px;
  height: 10vh;
  background-color: #1d1d41;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
`;

const Transaction = styled.div`
  width: 100%;
  height: 45vh;
  background-color: #1d1d41;
  border-radius: 20px;
`;

const Down = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Top = styled.div`
  width: 95%;
  height: 5vh;
  margin-top: 10px;

  h3 {
    margin: 0;
    color: #fff;
    font-weight: 500;
  }
`;

const Analytic = styled.div`
  width: 100%;
  height: 45vh;
  background-color: #1d1d41;
  margin-bottom: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const Income = styled.div`
  width: 100%;
  gap: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const First = styled.div`
  width: 67%;
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

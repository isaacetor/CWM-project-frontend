import React from "react";
import styled from "styled-components";
import UserDashboardSidebar from "../UserDashboardSidebar";

const MakePayment = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>Payments</Text>
          <Main>
            <First>
              <Details>
                <h2>Balance</h2>
                <MoneyHolder>
                  <FundsHold>
                    <h4>Arrears</h4>
                    <h1>₦20000</h1>
                  </FundsHold>
                  <FundsHold>
                    <h4>current payment</h4>
                    <h1>₦20000</h1>
                  </FundsHold>
                </MoneyHolder>
              </Details>
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

export default MakePayment;

const MoneyHolder = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
`;

const FundsHold = styled.div`
  width: 300px;
  /* height: 16vh; */
  /* background-color: #ecf2ff80; */
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 20px;

  h4 {
    font-weight: 500;
    margin: 0;
    text-transform: capitalize;
    opacity: 0.5;
  }

  h1 {
    margin: 0;
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

const Details = styled.div`
  width: 93%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.122) 0px 1px 4px;
  border-radius: 20px;
  padding: 20px;
  gap: 50px;

  h2 {
    margin: 0;
    font-weight: 600;
  }
`;

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
  color: #03001c;
`;

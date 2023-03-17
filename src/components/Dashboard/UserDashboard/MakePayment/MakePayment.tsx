import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import styled from "styled-components";
import TransactionHistory from "../TransactionHistory";
import UserDashboardSidebar from "../UserDashboardSidebar";

const MakePayment = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(20000);
  const [areas, setArears] = useState(10000);
  const [total, setTotal] = useState<number>();

  const config = {
    reference: new Date().getTime().toString(),
    email: "isaacetor@g.com",
    amount,
    publicKey: "pk_test_602d7f18b319ff579007ec297f03f2fb139ce402",
  };

  const onSuccess: any = (reference: string) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  // const totalAmount = () => {
  //   setTotal(areas + amount);
  // };

  const initializePayment = usePaystackPayment(config);

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
                    <h1>₦{areas}</h1>
                  </FundsHold>
                  <FundsHold>
                    <h4>current payment</h4>
                    <h1>₦{amount}</h1>
                  </FundsHold>
                  <FundsHold>
                    <h4>Total amount</h4>
                    <h1>₦{amount + areas}</h1>
                  </FundsHold>
                </MoneyHolder>
                <Button>
                  <button
                    type="submit"
                    onClick={() => {
                      initializePayment(onSuccess, onClose);
                    }}
                  >
                    Pay Now
                  </button>
                </Button>
              </Details>

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

export default MakePayment;

const Button = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;

  button {
    padding: 15px 25px;
    border: 0;
    background-color: #ff731d;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease;

    :hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;

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
    font-size: 1.3rem;
  }
`;

const Details = styled.div`
  width: 91%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.027) 1.95px 1.95px 2.6px;
  border-radius: 10px;
  padding: 20px;
  gap: 50px;

  h2 {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
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

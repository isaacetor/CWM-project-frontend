import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import hero from "../../Assets/Payment_Information.svg";
import support from "../../Assets/customer_support.svg";
import bill from "../../Assets/Printing_invoices.svg";

const Features = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <h1>
              a Waste Management platform that offers seamless{" "}
              <span>navigation processes for all your needs</span>
            </h1>
          </Top>
          <Bottom>
            <One>
              <Text>
                <h1>Online Payment you can trust.</h1>
                <p>
                  You shouldn't bother yourself going to the bank to pay your
                  waste bill, you can do that in your dashboard.
                </p>
                <NavLink to="/signin" style={{ textDecoration: "none" }}>
                  <button>
                    Get Started <FiArrowUpRight />
                  </button>
                </NavLink>
              </Text>
              <Image src={hero} alt="" />
            </One>
            <Two>
              <Right>
                <Up src={support} />
                <Down>
                  <h1>Quick Customer Support</h1>
                  <p>
                    All of your questions would be answered in the <br /> app
                  </p>
                </Down>
              </Right>
              <Left>
                <Up src={bill} alt="" />
                <Down>
                  <h1>on Time Billing System</h1>
                  <p>
                    All of your questions would be answered in the <br /> app
                  </p>
                </Down>
              </Left>
            </Two>
          </Bottom>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Features;

const Up = styled.img`
  width: 100%;
  height: 210px;
`;
const Down = styled.div`
  height: 150px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 0;
    font-weight: 600;
    opacity: 0.9;
    font-size: 1.39rem;
    padding-left: 30px;
    text-transform: capitalize;
  }

  p {
    margin: 0;
    font-size: 14px;
    padding-left: 30px;
    padding-top: 10px;
  }
`;

const Text = styled.div`
  width: 50%;

  button {
    padding: 13px 27px;
    margin-top: 25px;
    font-size: 14.5px;
    background-color: #1c1c1c;
    color: #f2f2f2;
    border-radius: 20px;
    text-transform: capitalize;
    transition: all ease-in-out 0.2s;
    border: 0;
    display: flex;
    align-items: center;
    gap: 5px;

    :hover {
      cursor: pointer;
      gap: 10px;
    }

    @media screen and (max-width: 768px) {
      padding: 10px 20px;
      margin-top: 20px;
    }

    @media screen and (min-width: 320px) {
      margin-top: 4px;
      padding: 5px 10px;
    }
  }

  h1 {
    font-weight: 600;
    width: 80%;
    line-height: 2.4rem;
    margin: 0;
    font-size: 1.6rem;

    @media screen and (max-width: 768px) {
      width: 80%;
      line-height: 1.7rem;
    }
    @media screen and (max-width: 500px) {
      width: 90%;
      line-height: 1.7rem;
    }
  }

  p {
    width: 80%;
    opacity: 0.9;
    margin-top: 22px;
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 80%;
  width: 40%;
  object-fit: contain;

  @media screen and (max-width: 530px) {
    display: none;
  }
`;

const Right = styled.div`
  box-shadow: rgba(33, 35, 38, 0.058) 0px 10px 10px -10px;
  width: 470px;
  height: 50vh;
  background-color: #5057fd;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    /* border-radius: 0; */
    width: 95%;
  }
`;

const Left = styled.div`
  width: 390px;
  height: 50vh;
  background-color: #0d0d0d;
  overflow: hidden;
  color: #fff;
  border-radius: 20px;
  box-shadow: rgba(33, 35, 38, 0.058) 0px 10px 10px -10px;
`;

const One = styled.div`
  width: 69%;
  padding: 20px;
  margin: auto;
  color: #f2f2f2;
  margin-top: 40px;
  margin-bottom: 20px;
  background-color: #0d0d0d;
  box-shadow: rgba(33, 35, 38, 0.058) 0px 10px 10px -10px;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    border-radius: 0;
    padding: 30px;
  }
`;

const Two = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
  gap: 20px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 80%;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Top = styled.div`
  width: 50%;
  margin-top: 90px;

  h1 {
    text-align: center;
    margin: 0;
    font-size: 2.3rem;
    font-weight: 700;
    text-transform: capitalize;
    color: #f2f2f2;
    line-height: 2.8rem;

    @media screen and (max-width: 768px) {
      font-size: 1.43rem;
    }

    span {
      color: #353535;
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  background-color: #000000;
`;

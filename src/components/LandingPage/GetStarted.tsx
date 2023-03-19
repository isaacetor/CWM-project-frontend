import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bg from "../../Assets/scatteredForcefields.svg";

const GetStarted = () => {
  return (
    <div>
      <Container>
        <h1>
          It's easy to get started. <br /> click the button! <br />
        </h1>{" "}
        <span>👇🏼</span>
        <NavLink to="/signin" style={{ textDecoration: "none" }}>
          <button>
            get started <FiArrowUpRight />
          </button>
        </NavLink>
      </Container>
    </div>
  );
};

export default GetStarted;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${bg});
  background-color: #010116fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #ffffff24;

  h1 {
    margin: 0;
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    font-weight: 600;
    opacity: 0.9;
    line-height: 2.9rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 375px) {
      font-size: 1.2rem;
    }
  }

  span {
    font-size: 40px;
    margin-top: 10px;
  }

  button {
    padding: 13px 27px;
    font-size: 18px;
    margin-top: 20px;
    background-color: #e21818;
    transition: all 0.3s ease;
    border: 1px solid #e21818;
    border-radius: 25px;
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: capitalize;

    :hover {
      border: 1px solid #e21818;
      color: #e21818;
      cursor: pointer;
      background-color: transparent;
      gap: 15px;
    }

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media screen and (max-width: 375px) {
      font-size: 14px;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../Assets/continental_logo.svg";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const [toTopshow, settoTopShow] = React.useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 80) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const showBacktoTop = () => {
    if (window.scrollY >= 400) {
      settoTopShow(true);
    } else {
      settoTopShow(false);
    }
  };
  const backToTop = () => {
    scroll.scrollToTop();
  };

  window.addEventListener("scroll", showBacktoTop);
  window.addEventListener("scroll", changeHeaderColor);

  const toHero = () => {
    scroll.scrollTo(750);
  };
  const toInterface = () => {
    scroll.scrollTo(1110);
  };
  const toFeatures = () => {
    scroll.scrollTo(2300);
  };
  const toSupport = () => {
    scroll.scrollTo(2950);
  };
  return (
    <div>
      <Container
        boxShadow={show ? "value" : ""}
        bg={
          show
            ? "#fff"
            : "linear-gradient(90deg, #fff 50.01%, #000000 49.99%, #000000 100%)"
        }
      >
        <Wrapper>
          <Logo onClick={backToTop}>
            <img src={logo} alt="" />
          </Logo>
          <Nav color={show ? "#000" : "#ffffffc3"}>
            <Navigation onClick={toHero}>Trustees</Navigation>
            <Navigation onClick={toInterface}>Interface</Navigation>
            <Navigation onClick={toFeatures}>Features</Navigation>
            <Navigation onClick={toSupport}>Customer support</Navigation>
            <NavLink to="/signin" style={{ textDecoration: "none" }}>
              <Button color={show ? "#000" : "#fff"}>
                Get Started <FiArrowUpRight />
              </Button>
            </NavLink>
          </Nav>
        </Wrapper>
        {toTopshow ? (
          <BackToTop onClick={backToTop}>
            <AiOutlineArrowUp />
          </BackToTop>
        ) : null}
      </Container>
    </div>
  );
};

export default Header;

const BackToTop = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 50px;
  position: absolute;
  position: fixed;
  bottom: 20px;
  right: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  font-size: 20px;
  transition: all 0.5s ease;

  :hover {
    cursor: pointer;
  }
`;

const Navigation = styled.p`
  margin: 0;
  margin-left: 40px;
  font-size: 13px;
  transition: all 0.2s ease;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    display: none;
  }

  :hover {
    cursor: pointer;
    color: #ff5f08;
  }
`;

const Button = styled.button<{ color: string }>`
  padding: 10px 25px;
  font-size: 14px;
  background-color: transparent;
  border: 0;
  color: ${({ color }) => color};
  margin-left: 40px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s ease;

  @media screen and (min-width: 320px) {
    padding: 5px 10px;
  }

  :hover {
    cursor: pointer;
    color: #ff5f08;
  }
`;

const Nav = styled.div<{ color: string }>`
  height: 70%;
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #000;

  img {
    width: 150px;
    object-fit: contain;

    @media screen and (max-width: 425px) {
      width: 100px;
    }
  }
  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div<{
  boxShadow: string;
  bg: string;
}>`
  width: 100%;
  height: 70px;
  background: ${({ bg }) => bg};
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: all 350ms ease;

  color: ${({ color }) => color};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? "rgba(99, 99, 99, 0.079) 0px 2px 8px 0px" : "none"};
`;

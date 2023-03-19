import React from "react";
import styled from "styled-components";
import hero from "../../Assets/one.jpg";
// import hero3 from "../../Assets/two.jpg";
import hero4 from "../../Assets/three.jpg";
// import hero from "../../Assets/Waste_management.svg";
import hero3 from "../../Assets/Waste_management3.svg";
// import hero4 from "../../Assets/waste-management4.svg";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const settings = {
    fade: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <LeftWrapper height="70%">
              <Caption>waste management platform</Caption>
              <Title>
                See garbage pick-up schedule and make payment for your waste
                bill
              </Title>
              <Desc>
                one place to manage everything relating to how your manage your
                waste
              </Desc>
              <NavLink to="/signin" style={{ textDecoration: "none" }}>
                <Button>
                  get started <FiArrowUpRight />
                </Button>
              </NavLink>
            </LeftWrapper>
          </Left>
          <Right>
            <LeftWrapper2>
              <Slider {...settings}>
                <img src={hero} alt="" />

                <img src={hero3} alt="" />
                <img src={hero4} alt="" />
              </Slider>
            </LeftWrapper2>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Desc = styled.p`
  color: #00002d86;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 14.5px;
  }
`;
const Button = styled.button`
  padding: 17px 35px;
  margin-top: 40px;
  font-size: 14.5px;
  border: 0;
  background-color: #e21818;
  text-transform: capitalize;
  transition: all ease-in-out 0.2s;
  color: #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #e21818;

  :hover {
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #e21818;
    color: #e21818;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  width: 70%;
  font-weight: 600;
  margin: 0;
  margin-top: 30px;
  font-size: 2.3rem;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    width: 85%;
    margin-top: 20px;
  }
`;

const Caption = styled.div`
  padding: 10px 20px;
  width: 250px;
  background-color: #fff6f5;
  color: #e21818;
  border-radius: 10px;
  font-weight: 500;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 300px;
  }
`;

const LeftWrapper = styled.div<{ height: string }>`
  width: 90%;
  margin: auto;

  @media screen and (max-width: 768px) {
    height: ${({ height }) => height};
  }
`;
const LeftWrapper2 = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgb(226, 24, 24);
  background: linear-gradient(
    159deg,
    rgba(226, 24, 24, 1) 63%,
    rgba(253, 132, 31, 1) 100%
  );

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  height: 95vh;
  background-color: #942b2b;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 55vh;
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }
`;

const Left = styled.div`
  width: 50%;
  height: calc(100vh - 10vh);
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 60vh;
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  color: #00002d;
  margin-top: 70px;
`;

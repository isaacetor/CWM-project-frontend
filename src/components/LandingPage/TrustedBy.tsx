import React from "react";
import styled from "styled-components";
import dangote from "../../Assets/Dangote.png";
import dhl from "../../../Assets/dhl.png";
import globus from "../../../Assets/globus.png";
import stanbic from "../../../Assets/Stanbic-Bank.jpg";
import wema from "../../../Assets/Wema-Bank.jpg";
import zenith from "../../../Assets/zenith.png";

const TrustedBy = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            Continental waste managers, is trusted by the awesome companies
          </Top>
          <Clients>
            <img src={dangote} alt="" />
            <img src={zenith} alt="" />
            <img src={stanbic} alt="" />
            <img src={dhl} alt="" />
            <img src={globus} alt="" />
            <img src={wema} alt="" />
          </Clients>
        </Wrapper>
      </Container>
    </div>
  );
};

export default TrustedBy;

const Clients = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 10px;
  }

  img {
    width: 130px;
    height: 100%;
    object-fit: contain;
    filter: grayscale(1);

    @media screen and (max-width: 800px) {
      width: 20%;
    }
  }

  @media screen and (max-width: 800px) {
    gap: 40px;
  }
`;

const Top = styled.p`
  margin: 0;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

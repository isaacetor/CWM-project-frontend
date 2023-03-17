import React from "react";
import styled from "styled-components";
import curveChart from "../../../Assets/curveChart.png";

const AdminDashboardSidebar = () => {
  return (
    <div>
      <Container>
        <Activity>
          <Top>Activity</Top>
        </Activity>
        <Activity>
          <Top>Activity</Top>
          <ImgHold>
            <img src={curveChart} alt="" />
          </ImgHold>
        </Activity>
      </Container>
    </div>
  );
};

export default AdminDashboardSidebar;

const ImgHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Bottom = styled.div``;

const Top = styled.div`
  color: #fff;
`;

const Activity = styled.div`
  width: 86%;
  height: 40vh;
  background-color: #1d1d41;
  border-radius: 20px;
  padding: 10px;
`;

const Container = styled.div`
  width: 23.2vw;
  height: 90vh;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 20px;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
`;

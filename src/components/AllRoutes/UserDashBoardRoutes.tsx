import React from "react";
import styled from "styled-components";
import { useNavigate, useRoutes } from "react-router-dom";
import UserDashboardHeader from "../Dashboard/UserDashboard/UserDashboardHeader";

const UserDashBoardRoutes = () => {
  const elements = useRoutes([
    {
      path: "/userdashboard",
    },
  ]);
  return (
    <Container>
      <UserDashboardHeader />
      {elements}
    </Container>
  );
};

export default UserDashBoardRoutes;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

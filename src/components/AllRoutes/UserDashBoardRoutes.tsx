import React from "react";
import styled from "styled-components";
import { useNavigate, useRoutes } from "react-router-dom";
import UserDashboardHeader from "../Dashboard/UserDashboard/UserDashboardHeader";
import UserDashboardSidebar from "../Dashboard/UserDashboard/UserDashboardSidebar";
import UserDashboardHome from "../Dashboard/UserDashboard/UserDashboardHome";
import MakePayment from "../Dashboard/UserDashboard/MakePayment/MakePayment";

const UserDashBoardRoutes = () => {
  const elements = useRoutes([
    {
      path: "/userdashboard",
      element: <UserDashboardHome />,
    },
    {
      path: "/payment",
      element: <MakePayment />,
    },
  ]);
  return (
    <Container>
      <UserDashboardHeader />
      {elements}
      <UserDashboardSidebar />
    </Container>
  );
};

export default UserDashBoardRoutes;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

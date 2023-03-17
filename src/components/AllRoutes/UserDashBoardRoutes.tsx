import React from "react";
import styled from "styled-components";
import { useNavigate, useRoutes } from "react-router-dom";
import UserDashboardHeader from "../Dashboard/UserDashboard/UserDashboardHeader";
import UserDashboardSidebar from "../Dashboard/UserDashboard/UserDashboardSidebar";
import UserDashboardHome from "../Dashboard/UserDashboard/UserDashboardHome";
import MakePayment from "../Dashboard/UserDashboard/MakePayment/MakePayment";
import ClickWhatsApp from "../Dashboard/UserDashboard/ClickWhatsApp";
import WasteBill from "../Dashboard/UserDashboard/WasteBill/WasteBill";
import Profile from "../Dashboard/UserDashboard/Profile/Profile";

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
    {
      path: "/invoices",
      element: <WasteBill />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return (
    <Container>
      <UserDashboardHeader />
      {elements}
      <ClickWhatsApp />
    </Container>
  );
};

export default UserDashBoardRoutes;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

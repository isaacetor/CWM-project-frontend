import React from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";
import AdminDashboardHeader from "../Dashboard/AdminDashboard/AdminDashboardHeader";
import AdminDashboardHome from "../Dashboard/AdminDashboard/AdminDashboardHome";

const AdminDashboardRoutes = () => {
  const element = useRoutes([
    {
      path: "/admin",
      element: <AdminDashboardHome />,
    },
    {
      path: "/analytic",
      element: <AdminDashboardHome />,
    },
    {
      path: "/message",
      element: <AdminDashboardHome />,
    },
    {
      path: "/notifications",
      element: <AdminDashboardHome />,
    },
  ]);

  return (
    <div>
      <Container>
        <AdminDashboardHeader />
        {element}
      </Container>
    </div>
  );
};

export default AdminDashboardRoutes;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

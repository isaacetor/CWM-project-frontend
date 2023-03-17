import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";
import AdminLogin from "../Auth/AdminLogin";
import AdminRegister from "../Auth/AdminRegister";
import Analytic from "../Dashboard/AdminDashboard/AdminAnalytic/Analytic";
import AdminDashboardHeader from "../Dashboard/AdminDashboard/AdminDashboardHeader";
import AdminDashboardHome from "../Dashboard/AdminDashboard/AdminDashboardHome";
import Adminmessage from "../Dashboard/AdminDashboard/AdminMessage/Adminmessage";
import AdminNotification from "../Dashboard/AdminDashboard/AdminNotifications/AdminNotification";
import AllUsers from "../Dashboard/AdminDashboard/AllUsers/AllUsers";
import MessageAdmin from "../Dashboard/UserDashboard/MessageAdmin/MessageAdmin";
import UserNotification from "../Dashboard/UserDashboard/UserNotification";
import Notification from "../Dashboard/UserDashboard/WasteBill/Notification";
import { UseAppSelector } from "../Global/Store";

const AdminDashboardRoutes = () => {
  const navigate = useNavigate();

  const adminSelector = UseAppSelector((state) => state.Admin);

  useEffect(() => {
    if (adminSelector?.name) {
      navigate("/admin/dashboard");
    }
  }, []);

  const element = useRoutes([
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/admin/register",
      element: <AdminRegister />,
    },
    {
      path: "/admin/dashboard",
      element: <AdminDashboardHome />,
    },
    {
      path: "/analytics",
      element: <Analytic />,
    },
    {
      path: "/send-message",
      element: <Adminmessage />,
    },
    {
      path: "/notifications",
      element: <AdminNotification />,
    },
    {
      path: "/users",
      element: <AllUsers />,
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
  justify-content: space-between;
`;

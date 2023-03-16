import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import Register from "../AuthPage/Register";
import SignIn from "../AuthPage/SignIn";
import HomeScreen from "../HomeScreen";
import Header from "../LandingPage/Header";

const HomeRoutes = () => {
  const navigate = useNavigate();

  const element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);
  return (
    <div>
      <Header />
      {element}
    </div>
  );
};

export default HomeRoutes;

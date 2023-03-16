import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import HomeScreen from "../HomeScreen";
import Header from "../LandingPage/Header";

const HomeRoutes = () => {

const navigate = useNavigate()


  const element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
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

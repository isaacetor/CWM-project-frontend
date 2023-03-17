import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import Register from "../AuthPage/Register";
import SignIn from "../AuthPage/SignIn";
import HomeScreen from "../HomeScreen";
import Header from "../LandingPage/Header";
import { UseAppSelector } from "../Global/Store";

const HomeRoutes = () => {
  const navigate = useNavigate();
  const selector = UseAppSelector((state) => state.Client);

  useEffect(() => {
    if (selector?.name) {
      navigate("/userdashboard");
    }
  }, []);

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
      {/* {selector?.name ? null : <Header />} */}
      {/* <Header /> */}
      {element}
    </div>
  );
};

export default HomeRoutes;

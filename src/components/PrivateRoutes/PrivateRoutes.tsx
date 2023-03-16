import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { UseAppSelector } from "../Global/Store";

const PrivateRoutes = ({ children }: any) => {
  const selector = UseAppSelector((state) => state.Client);

  if (selector?.name) {
    return children;
  } else {
    <Navigate to="/" replace></Navigate>;
  }
};

export default PrivateRoutes;

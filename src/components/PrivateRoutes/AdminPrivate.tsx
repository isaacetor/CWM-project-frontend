import React from "react";
import { Navigate } from "react-router-dom";
import HomeRoutes from "../AllRoutes/HomeRoutes";
import { UseAppSelector } from "../Global/Store";

const AdminPrivateRoutes = ({ children }: any) => {
  const adminSelector = UseAppSelector((state) => state.Admin);

  if (adminSelector?.name) {
    return children;
  } else {
    <Navigate to="/admin/dashboard" replace></Navigate>;
  }
};

export default AdminPrivateRoutes;

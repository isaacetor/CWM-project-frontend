import React from "react";
import AdminDashboardRoutes from "./components/AllRoutes/AdminDashboardRoutes";
import HomeRoutes from "./components/AllRoutes/HomeRoutes";
import UserDashBoardRoutes from "./components/AllRoutes/UserDashBoardRoutes";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";

function App() {
  return (
    <div>
      <HomeRoutes />
      <PrivateRoutes>
        <UserDashBoardRoutes />
      </PrivateRoutes>

      <PrivateRoutes>
        <AdminDashboardRoutes />
      </PrivateRoutes>
    </div>
  );
}

export default App;

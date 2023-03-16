import React from "react";
import AdminDashboardRoutes from "./components/AllRoutes/AdminDashboardRoutes";
import HomeRoutes from "./components/AllRoutes/HomeRoutes";
import UserDashBoardRoutes from "./components/AllRoutes/UserDashBoardRoutes";

function App() {
  return (
    <div>
      <HomeRoutes />
      <UserDashBoardRoutes />
      <AdminDashboardRoutes />
    </div>
  );
}

export default App;

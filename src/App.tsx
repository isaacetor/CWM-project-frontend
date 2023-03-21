import React from "react";
import AdminDashboardRoutes from "./components/AllRoutes/AdminDashboardRoutes";
import HomeRoutes from "./components/AllRoutes/HomeRoutes";
import UserDashBoardRoutes from "./components/AllRoutes/UserDashBoardRoutes";
import AdminPrivateRoutes from "./components/PrivateRoutes/AdminPrivate";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";

function App() {
  return (
    <div>
      <HomeRoutes />
      {/* <PrivateRoutes> */}
      <UserDashBoardRoutes />
      {/* </PrivateRoutes> */}

      <AdminPrivateRoutes>
        <AdminDashboardRoutes />
      </AdminPrivateRoutes>
    </div>
  );
}

export default App;

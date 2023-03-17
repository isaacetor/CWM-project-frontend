import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
const AdminSidebar = () => {
  return (
    <div>
      <SideBar></SideBar>
=======
const AdminDashboardSidebar = () => {
  return (
    <div>
      <Container></Container>
>>>>>>> 4500de0d74a5835be2daaa90b6e90992deea08d1
    </div>
  );
};

<<<<<<< HEAD
export default AdminSidebar;

const SideBar = styled.div`
=======
export default AdminDashboardSidebar;

const Container = styled.div`
>>>>>>> 4500de0d74a5835be2daaa90b6e90992deea08d1
  width: 23.3vw;
  height: 90vh;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 20px;
  position: sticky;
  top: 0;
  left: 0;
`;

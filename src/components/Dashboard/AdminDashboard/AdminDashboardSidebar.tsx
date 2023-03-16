import React from "react";
import styled from "styled-components";

const AdminSidebar = () => {
  return (
    <div>
      <SideBar></SideBar>
    </div>
  );
};

export default AdminSidebar;

const SideBar = styled.div`
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

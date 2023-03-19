import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { getAllAdminMsg } from "../../Api/adminApi";

const UserNotification = () => {
  const [show, setShow] = useState<boolean>(false);
  const allAdminMsg = useQuery({
    queryKey: ["viewAdminMsg"],
    queryFn: getAllAdminMsg,
  });

  const toggleShow = () => {
    setShow(!show);
  };

  // console.log(`this is all client message ${allAdminMsg}`);
  return (
    <div>
      <Top1>
        <Notify>
          <One>Notifications</One>
        </Notify>
        <MsgHold>
          {allAdminMsg?.data?.data?.map((props: any) => (
            <Msg onClick={toggleShow}>
              <p style={{ fontWeight: "600" }}>sender: {props?.sender} </p>
              <p>{props?.date} </p>
              <span>{props?.desc}</span>
            </Msg>
          ))}
        </MsgHold>
      </Top1>
      {show ? (
        <OpenMessage>
          <span onClick={toggleShow}>
            <GrClose style={{ color: "#fff" }} />
          </span>
          <MessageBox>
            <h2>Message</h2>
            <h3>From: Admin</h3>
            <h4>Date:</h4>
            <p>hdjhdjhjhd</p>
          </MessageBox>
        </OpenMessage>
      ) : null}
    </div>
  );
};

export default UserNotification;

const MessageBox = styled.div`
  width: 40%;
  height: 50vh;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 88%;
  }

  h2 {
    margin: 0;
    font-weight: 600;
    border-bottom: 1px solid #00000021;
  }

  h3 {
    font-weight: 500;
    margin: 0;
    margin-top: 20px;
  }

  h4 {
    margin: 0;
    margin-top: 5px;
    font-weight: 500;
    font-size: 15px;
  }
`;

const OpenMessage = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #0000003c;
  top: 0;
  left: 0;
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    width: 50%;
    right: 0;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
  }
`;

const MsgHold = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #131313;
    border-radius: 5px;
  }

  width: calc(100% - 20px);
  height: 70%;
  margin-left: 10px;
`;

const Unread = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  color: #64cff6;
  display: flex;
  align-items: center;
  font-size: 23px;
  p {
    color: black;
    margin: 0;
    font-weight: 600;
    margin-left: 5px;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Read = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  color: #6359e9;
  display: flex;
  align-items: center;
  font-size: 23px;
  p {
    color: black;
    margin: 0;
    font-weight: 600;
    margin-left: 5px;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Two = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const One = styled.div`
  width: 95%;
  height: 100%;
  color: black;
  font-weight: 600;
  font-size: 18px;
  /* margin-bottom: 20px; */
  margin-left: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(226, 24, 24, 0.133);

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Msg = styled.div`
  width: calc(100% - 20px);
  height: 10vh;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow-x: hidden;
  background-color: #ff440018;
  transition: all 0.2s ease;
  white-space: nowrap;
  max-width: calc(100% - 10px);
  text-overflow: ellipsis;
  padding-top: 5px;

  p {
    margin: 0;
    color: #aaa9b8;
    font-size: 12px;
    margin-left: 5px;

    @media screen and (max-width: 768px) {
      font-size: 11px;
    }
  }
  span {
    margin-left: 5px;
    color: #45454b;
    font-size: 13px;
  }

  :hover {
    cursor: pointer;
    background-color: #ff440025;
  }
`;

const Notify = styled.div`
  width: 100%;
  height: 7vh;
  margin-bottom: 10px;
  display: flex;
`;

const Top1 = styled.div`
  width: 95%;
  height: 42vh;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.027) 1.95px 1.95px 2.6px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 95vw;
  }
`;

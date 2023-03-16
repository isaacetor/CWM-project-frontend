import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import styled from "styled-components";

const Notification = () => {
  return (
    <div>
      <Top1>
        <Notify>
          <One>Notification</One>
          <Two>
            <Read>
              <GoPrimitiveDot />
              <p> Read</p>
            </Read>
            <Unread>
              <GoPrimitiveDot />
              <p> Unread</p>
            </Unread>
          </Two>
        </Notify>
        <MsgHold>
          <Msg>
            <p>sender:CWM Admin</p>
            <p>12/03/2023</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              doloremque molestias iure cum repudiandae ut vitae harum, placeat
              rerum dignissimos ea laudantium minima, quibusdam neque. At
              excepturi voluptas asperiores error!
            </span>
          </Msg>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
        </MsgHold>
      </Top1>
    </div>
  );
};

export default Notification;

const MsgHold = styled.div`
  /* background-color: red; */

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  width: calc(100% - 20px);
  height: 80%;
  margin-left: 10px;
`;
const Msg = styled.div`
  width: calc(100% - 20px);
  height: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow-x: hidden;
  white-space: nowrap;
  max-width: calc(100% - 20px);
  text-overflow: ellipsis;

  p {
    margin: 0;
    color: #aaa9b8;
    font-size: 12px;
    margin-left: 5px;
  }
  span {
    margin-left: 5px;
    color: #45454b;
    font-size: 12px;
  }
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
`;

const One = styled.div`
  width: 40%;
  height: 100%;
  color: black;
  font-weight: 600;
  font-size: 20px;
  /* margin-bottom: 20px; */
  margin-left: 20px;
  display: flex;
  align-items: center;
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
`;

const Two = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Notify = styled.div`
  width: 100%;
  height: 7vh;
  margin-bottom: 10px;
  display: flex;
`;

const Top1 = styled.div`
  width: 95%;
  height: 35%;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.027) 1.95px 1.95px 2.6px;
`;

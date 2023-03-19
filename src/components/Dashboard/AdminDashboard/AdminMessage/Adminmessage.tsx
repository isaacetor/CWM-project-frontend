import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import styled from "styled-components";
import AdminDashboardSidebar from "../AdminDashboardSidebar";
import { liveURI2, sendMsg } from "../../../Api/adminApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UseAppSelector } from "../../../Global/Store";
import axios from "axios";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getAllClients } from "../../../Api/Endpoints";

const Adminmessage = () => {
  const schema = yup
    .object({
      desc: yup.string().required("field must be filled"),
    })
    .required();
  type formData = yup.InferType<typeof schema>;
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const adminID = UseAppSelector((state) => state.Admin);
  // const clientID = UseAppSelector((state) => state.Client);

  const allClients = useQuery({
    queryKey: ["viewClients"],
    queryFn: getAllClients,
  });

  const onSubmit = handleSubmit(async (data) => {
    await axios
      .post(
        `${liveURI2}/admintoclient/${adminID?._id}/${allClients?.data?.data?._id}`,
        data
      )

      .then((res) => {
        Swal.fire({
          title: "successful",
          icon: "success",
        });
      })

      .catch((err) => {
        Swal.fire({
          title: "an error occured",
          icon: "error",
          text: `${err.response?.data?.message}`,
        });
        console.log(err);
        console.log(
          `these are the ids ${adminID?._id} and ${allClients?.data?.data?._id}`
        );
      });
  });

  const [showOne, setShowOne] = useState(true);
  const [showMany, setShowMany] = useState(false);

  const showOnee = () => {
    setShowOne(!showOne);
    setShowMany(false);
  };
  const showManyy = () => {
    setShowMany(!showMany);
    setShowOne(false);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          {/* title */}
          <Text>
            Send Broadcast or Message A Client
            <BsPerson style={{ fontSize: "25px" }} />
          </Text>
          <Main>
            <First>
              {/* where to create message form field */}
              <Analytics>
                <ButtonHold>
                  <One onClick={showOnee}>Send Message to One Client?</One>
                  <Many onClick={showManyy}>Send Message to All Client?</Many>
                </ButtonHold>
                {showOne ? (
                  <MessageOne onSubmit={onSubmit}>
                    {/* <input placeholder="Enter client email" /> */}
                    <input
                      placeholder="Enter message title"
                      {...register("desc")}
                    />
                    <p>{errors?.desc?.message}</p>
                    <textarea />
                    <button type="submit">Send message</button>
                  </MessageOne>
                ) : null}
                {showMany ? (
                  <MessageMany>
                    <input placeholder="Enter message title" />
                    <textarea />
                    <button>Send Broadcast</button>
                  </MessageMany>
                ) : null}
              </Analytics>
            </First>
            {/* sidebar */}
            <AdminDashboardSidebar />
          </Main>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Adminmessage;

const ButtonHold = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;
`;

const One = styled.button`
  padding: 15px 50px;
  background-color: #fff;
  color: #1d1d41;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }
`;
const Many = styled.button`
  padding: 15px 50px;
  background-color: #fff;
  color: #1d1d41;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }
`;

const MessageMany = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    width: 90%;
    height: 7vh;
    padding: 10px;
    border: 0;
    font-size: 20px;
    margin-bottom: 20px;
    margin: auto;
  }

  textarea {
    width: 90%;
    height: 30vh;
    padding: 10px;
    border: 0;
    font-family: poppins;
    font-size: 16px;
    margin-bottom: 20px;
    margin: auto;
  }

  button {
    margin: auto;
    padding: 15px 20px;
    width: 200px;
  }
`;
const MessageOne = styled.form`
  width: 100%;
  height: 60vh;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    width: 90%;
    height: 7vh;
    padding: 10px;
    border: 0;
    outline: 0;
    font-size: 20px;
    margin-bottom: 20px;
    margin: auto;
  }

  textarea {
    width: 90%;
    height: 30vh;
    padding: 10px;
    outline: 0;
    border: 0;
    font-family: poppins;
    font-size: 16px;
    margin-bottom: 20px;
    margin: auto;
  }

  button {
    margin: auto;
    padding: 15px 20px;
    width: 200px;
  }
`;

const Analytics = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1d1d41;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const Income = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #ea06ee;
  margin-bottom: 20px;
`;

const First = styled.div`
  width: 70%;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const Text = styled.div`
  width: 100%;
  color: #fff;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: calc(100vw - 270px);
  background-color: #141332;
  display: flex;
  justify-content: center;
  align-items: center;
`;

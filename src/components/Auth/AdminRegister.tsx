import React from "react";
import styled from "styled-components";
import wave from "../../Assets/wave.svg";
import hero from "../../Assets/Waste_management2.svg";
import dangote from "../../Assets/Dangote.png";
import dhl from "../../Assets/dhl.png";
import stanbic from "../../Assets/Stanbic-Bank.jpg";
import zenith from "../../Assets/zenith.png";
import { NavLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createClient } from "../Api/Endpoints";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UseAppDispatch } from "../Global/Store";
import { useNavigate } from "react-router-dom";
import { registerClient } from "../Global/ReduxState";

const AdminRegister = () => {
  const dispatch = UseAppDispatch();

  const navigate = useNavigate();

  const userSchema = yup
    .object({
      name: yup.string().required("please enter a name"),
      email: yup.string().required("please enter a email"),
      password: yup.string().required("please enter a password"),
      phoneNumber: yup.number().required("please enter a phone number"),
      address: yup.string().required("please enter a address"),
    })
    .required();
  type formData = yup.InferType<typeof userSchema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(userSchema),
  });

  const newClient = useMutation({
    mutationFn: (data: any) => createClient(data),
    mutationKey: ["registerClients"],

    onSuccess: (data: any) => {
      console.log("my data", data);
      dispatch(registerClient(data.data));
    },
  });
  const submit = handleSubmit((data) => {
    newClient.mutate(data);
    console.log("this is yup data", data);
    reset();
    Swal.fire({
      title: "registration succesful",
      // html: "redirecting to login",
      timer: 2000,
      timerProgressBar: true,

      willClose: () => {
        navigate("/userdashoard");
      },
    });
  });

  return (
    <div>
      <Container>
        <Top>
          <h2>eWaste Management Platform</h2>
          <p>
            one place to manage everything relating to how your manage your
            waste
          </p>
        </Top>
        <Bottom>
          <Right>
            <Image>
              <img src={hero} alt="" />
            </Image>
            <Message>
              <p>Trusted by over 1,000 people in Lagos</p>
              <Clients>
                <img src={dangote} alt="" />
                <img src={zenith} alt="" />
                <img src={stanbic} alt="" />
                <img src={dhl} alt="" />
              </Clients>
            </Message>
          </Right>
          <Left>
            <Form onSubmit={submit}>
              <h2>create an account</h2>
              <InputWrapper>
                <InputHold>
                  <input
                    {...register("name")}
                    type="text"
                    required
                    placeholder="FullName"
                  />
                  <p>{errors?.name && errors?.name?.message} </p>
                </InputHold>
                <InputHold>
                  <input
                    {...register("email")}
                    type="text"
                    required
                    placeholder="email"
                  />
                  <p>{errors?.email && errors?.email?.message} </p>
                  <span>{errors?.address && errors?.address?.message}</span>
                </InputHold>
                <InputHold>
                  <input
                    {...register("phoneNumber")}
                    type="number"
                    required
                    placeholder="Phone Number"
                    maxLength={11}
                  />
                  <span>
                    {errors?.phoneNumber && errors?.phoneNumber?.message}
                  </span>
                </InputHold>
                <InputHold>
                  <input
                    {...register("address")}
                    type="text"
                    required
                    placeholder="enter address"
                  />
                  <span>{errors?.address && errors?.address?.message}</span>
                </InputHold>
                {/* <InputHold2>
                  <p style={{ marginBottom: "5px" }}>Select clientType</p>
                  <div style={{ display: "flex" }}>
                    <label>
                      Residential
                      <input
                        type="radio"
                        name="options"
                        value="residential"
                        ref={() => {
                          register("clientType");
                        }}
                      />
                    </label>
                    <label>
                      Commercial
                      <input
                        type="radio"
                        name="options"
                        value="commercial"
                        ref={() => {
                          register("clientType");
                        }}
                      />
                    </label>
                  </div>
                  {errors?.clientType && (
                    <span>{errors?.clientType?.message}</span>
                  )}
                </InputHold2> */}
                {/* <InputHold2>
                  <p style={{ marginTop: "10px", marginBottom: "5px" }}>
                    Select Location
                  </p>
                  <div style={{ display: "flex" }}>
                    <input type="radio" name="location" value="apapa" />
                    <p>Apapa</p>
                    <input type="radio" name="location" value="sari" />
                    <p>sari</p>
                  </div>
                </InputHold2> */}
                <InputHold>
                  <input
                    {...register("password")}
                    type="password"
                    required
                    placeholder="Enter Password"
                    minLength={8}
                    aria-hidden="true"
                  />
                  <span>{errors?.name && errors?.name?.message}</span>
                </InputHold>
                {/* <InputHold>
                  <p>Confirm password</p>

                  <input {...register("password")} />
                  <span>{errors?.name && errors?.name?.message}</span>
                </InputHold> */}
                <Button type="submit">create account</Button>
                <span style={{ marginTop: "8px" }}>eWaste by I.E.F</span>
                <span style={{ marginTop: "8px", marginBottom: "10px" }}>
                  Already have have an account?
                  <NavLink
                    to="/signin"
                    style={{
                      marginLeft: "5px",
                      textDecoration: "none",
                      color: "#337eff",
                    }}
                  >
                    Sign in
                  </NavLink>
                </span>
              </InputWrapper>
            </Form>
          </Left>
        </Bottom>
      </Container>
    </div>
  );
};

export default AdminRegister;

const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px 25px;
  width: 100%;
  background-color: #334cd2;
  color: #fff;
  font-size: 1rem;
  border: 0;
  transition: all 350ms ease;

  :hover {
    cursor: pointer;
    background-color: #166afa;
  }

  span {
    margin: 0;
  }
`;

const InputHold2 = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;

  p {
    margin: 0;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
    color: #000000ab;
    margin-right: 10px;
  }

  input {
    margin-right: 10px;
    font-size: 15px;
    color: #000000da;
    outline: 0;
    border-radius: 5px;
    border: 2px solid #0000001d;

    :focus {
      border: 2px solid #337eff;
    }
  }
`;

const InputHold = styled.div`
  width: 100%;
  /* margin-bottom: 10px; */
  /* margin-top: 10px; */

  p {
    margin: 0;
    margin-bottom: 3px;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
    color: #000000ab;
  }

  input {
    margin: 0;
    width: 95%;
    height: 4.5vh;
    font-size: 15px;
    color: #000000da;
    outline: 0;
    border-radius: 5px;
    border: 2px solid #00000016;

    :focus {
      border: 2px solid #337eff;
    }
  }
`;

const InputWrapper = styled.div`
  width: 85%;
  gap: 20px;
  /* margin-top: 20px; */

  span {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: #00000094;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Form = styled.form`
  width: 80%;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    margin: 0;
    margin-top: 20px;
    font-size: 25px;
    margin-bottom: 5px;
    font-weight: 600;
    color: #010101c1;

    @media screen and (max-width: 768px) {
      font-size: 1.5em;
    }
    @media screen and (max-width: 480px) {
      font-size: 1.2em;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Clients = styled.div`
  width: 100%;
  gap: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 120px;

    height: 100%;
    object-fit: contain;
    filter: grayscale(1);
    opacity: 0.4;
  }

  @media screen and (max-width: 800px) {
    gap: 40px;
  }
`;

const Message = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    color: #000;
    margin: 0;
    margin-top: 10px;
    font-size: 18px;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20%;
    width: 70%;
    object-fit: cover;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap-reverse;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
const Top = styled.div`
  height: 35vh;
  width: 100%;
  background-image: url(${wave});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* position: absolute; */
  text-align: center;

  h2 {
    margin: 0;
    margin-top: 20px;
    font-size: 25px;
    margin-bottom: 5px;
    font-weight: 600;
    color: #ffffffe4;

    @media screen and (max-width: 768px) {
      font-size: 1.5em;
    }
    @media screen and (max-width: 480px) {
      font-size: 1.2em;
    }
  }

  p {
    margin: 0;
    color: #ffffffd6;
    font-size: 16px;

    @media screen and (max-width: 768px) {
      font-size: 1em;
    }
    @media screen and (max-width: 480px) {
      font-size: 0.8em;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #ecf2ff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

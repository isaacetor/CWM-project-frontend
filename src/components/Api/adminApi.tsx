import axios from "axios";
import { adminData } from "../AllInterface/AllInterface";

const localURL: string = "http://localhost:8000/api/adminauth";
// const liveURI = "https://serversideoncwm.onrender.com/"
export const liveURI = "https://cwmendpoint-server.onrender.com/api/adminauth";

export const liveURI2 =
  "https://cwmendpoint-server.onrender.com/api/admindasboard";

export interface login {
  email: string;
  password: string;
}

export const createAdmin = async ({ name, email, password }: adminData) => {
  return await axios
    .post(`${liveURI}/adminregister`, {
      name,
      email,
      password,
    })
    .then((res) => res.data);
};

export const loginAdmin = async ({ email, password }: login) => {
  return await axios
    .post(`${liveURI}/adminlogin`, { email, password })
    .then((res) => res.data);
  // .catch((err) => console.log(`this is api consumption error`, err));
};

// ("http://localhost:8000/api/adminauth/adminlogin/");

export const getOneAdmin = async (id: any) => {
  return await axios.get(`${liveURI}/${id}`).then((res) => res.data);
};

export const sendMsg = async (
  desc: string,
  AdminId: string,
  Userid: string
) => {
  return await axios
    .post(`${liveURI2}/admintoclient/${AdminId}/${Userid}`, { desc })
    .then((res) => res.data);
};

//dashboard

//this will be mapped on the clientdashboard
export const getAllAdminMsg = async () => {
  return await axios
    .get(
      `https://cwmendpoint-server.onrender.com/admindasboard/alladminmessages`
    )
    .then((res) => res.data);
};

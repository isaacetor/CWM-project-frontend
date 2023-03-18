import axios from "axios";
import { userData } from "../AllInterface/AllInterface";

const localURL: string = "http://localhost:8000/api/clientauth";
const liveURI = "https://cwmendpoint-server.onrender.com/api/clientauth";

export interface login {
  email: string;
  password: string;
}

export const createClient = async ({
  name,
  email,
  password,
  phoneNumber,
  address,
}: userData) => {
  return await axios
    .post(`${liveURI}/clientregister`, {
      name,
      email,
      password,
      phoneNumber,
      address,
    })
    .then((res) => res.data);
};

export const loginClient = async ({ email, password }: login) => {
  return await axios
    .post(`${liveURI}/clientlogin`, { email, password })
    .then((res) => res.data);
  // .catch((err) => console.log(`this is api consumption error`, err));
};

// ("http://localhost:8000/api/adminauth/adminlogin/");

export const getOneClient = async (id: any) => {
  return await axios.get(`${liveURI}/${id}`).then((res) => res.data);
};

//get all clients

export const getAllClients = async () => {
  return axios.get(`${liveURI}/`).then((res) => res.data);
};

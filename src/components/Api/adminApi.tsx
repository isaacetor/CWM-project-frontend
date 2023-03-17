import axios from "axios";
import { adminData } from "../AllInterface/AllInterface";

const localURL: string = "http://localhost:8000/api/adminauth";
// const liveURI = "https://serversideoncwm.onrender.com/"
const liveURI = "https://cwmendpoint-server.onrender.com/api/adminauth";

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

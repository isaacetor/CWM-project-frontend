import axios from "axios";
import { userData } from "../AllInterface/AllInterface";

const localURL: string = "http://localhost:8000/api/clientauth";
// const liveURI = "https://serversideoncwm.onrender.com/"

export const createClient = async ({
  name,
  email,
  password,
  phoneNum,

  address,
}: userData) => {
  await axios
    .post(`${localURL}/clientregister`, {
      name,
      email,
      password,
      phoneNum,

      address,
    })
    .then((res) => {
      return res.data;
    });
};

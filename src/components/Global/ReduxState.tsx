import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { userData } from "../AllInterface/AllInterface";

interface loginClient {
  email: string;
  password: string;
}
interface loginAdmin {
  email: string;
  password: string;
}

interface adminData {
  name: string;
  email: string;
  password: string;
}

const initialState = {
  Client: {} as userData | null,
  login: {} as loginClient | null,
  Admin: {} as adminData | null,
  loginAdmin: {} as loginAdmin | null,
};

const ReduxState = createSlice({
  name: "E_Waste",
  initialState,
  reducers: {
    registerClient: (state, { payload }: PayloadAction<userData>) => {
      state.Client = payload;
    },

    registerAdmin: (state, { payload }: PayloadAction<adminData>) => {
      state.Admin = payload;
    },
  },
});

export const { registerClient, registerAdmin } = ReduxState.actions;

export default ReduxState.reducer;

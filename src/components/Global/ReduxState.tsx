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
  Admin: {} as adminData | null,
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
    logOut: (state) => {
      state.Client = null;
    },
    logoutAdmin: (state) => {
      state.Admin = null;
    },
  },
});

export const { registerClient, registerAdmin } = ReduxState.actions;

export default ReduxState.reducer;

import { register, logIn, logOut, userCurrent } from './operation';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  loading: false,
  isLoggedIn: false,
  isCurrent: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: handleRejected,
    [logIn.pending]: handlePending,
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: handleRejected,
    [logOut.pending]: handlePending,
    [logOut.fulfilled](state) {
      state.loading = false;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: handleRejected,
    [userCurrent.pending](state) {
      state.isCurrent = true;
      state.error = null;
    },
    [userCurrent.pending]: handlePending,
    [userCurrent.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isCurrent = false;
    },
    [userCurrent.rejected](state, { payload }) {
      state.isCurrent = false;
      state.loading = false;
      state.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
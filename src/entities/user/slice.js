import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    email: '',
    password: '',
    nickname: '',
    realName: '',
    phoneNum: '',
    address: '',
    gender: '',
    role: 'GUEST',
  },
  isInitialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state.userData, ...action.payload, isInitialized: true };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectIsUserInitialized = (rootState) => rootState.user.isInitialized;

export const selectUserData = (rootState) => rootState.user.userData;

export const selectUserRole = (rootState) => rootState.user.userData.role;

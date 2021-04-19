import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  token: '',
  dataLoaded: false,
};
export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    signIn: (state, action) => {},
    logOut: state => {
      state.name = '';
      state.token = '';
    },
    signUp: (state, action) => {},
    setDataLoaded: (state, action) => {
      state.dataLoaded = action.payload;
    },
    signInSuccess: (state, action) => {},
    signInReject: (state, action) => {},
  },
});

export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;

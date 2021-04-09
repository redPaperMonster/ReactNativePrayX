import {AxiosResponse} from 'axios';

const axios = require('axios');

const config = {
  headers: {
    Authorization: `Bearer 4135aa9dc1b842a653dea846903ddb95bfb8c5a10c504a7fa16e10bc31d1fdf0`,
  },
};

export const getColumns = (token: string) => {
  axios
    .get('https://prayer.herokuapp.com/columns', {
      headers: {Authorization: `Bearer ${token}`},
    })
    .then(function (response: AxiosResponse) {
      console.log(response.data);
    })
    .catch(function (error: any) {
      console.log(error);
    })
    .then(function () {});
};

export const signIn = (email: string, password: string) => {
  axios
    .post('https://prayer.herokuapp.com/auth/sign-in', {
      email: email,
      password: password,
    })
    .then(function (response: AxiosResponse) {
      console.log(response.data);
    })
    .catch(function (error: any) {
      console.log(error);
    })
    .then(function () {});
};

export const signUp = (name: string, email: string, password: string) => {
  axios
    .post('https://prayer.herokuapp.com/auth/sign-up', {
      email: email,
      name: name,
      password: password,
    })
    .then(function (response: AxiosResponse) {
      console.log(response.data);
    })
    .catch(function (error: any) {
      console.log(error);
    })
    .then(function () {});
};

import {AxiosResponse} from 'axios';
import {AsyncAPI} from '.';

const axios = require('axios');

export enum urls {
  getColumns = 'https://prayer.herokuapp.com/columns',
  signIn = 'https://prayer.herokuapp.com/auth/sign-in',
  signUp = 'https://prayer.herokuapp.com/auth/sign-up',
}
const config = {
  headers: {
    Authorization: '',
  },
};
export class Service {
  static service = axios.create();

  static async get(url: string, token: string) {
    config.headers.Authorization = `Bearer ${token}`;
    const responseData: AxiosResponse = this.service
      .get(url, config)
      .catch((error: any) => {
        switch (error.response.status) {
          case 401:
            console.log(`401`, error.response);
            break;
        }
        return Promise.reject(error);
      });
    return responseData;
  }
  static async post(
    url: string,
    email: string,
    password: string,
    name?: string,
  ) {
    return await this.service.post(url, {
      email,
      name,
      password,
    });
  }
}

import axios from 'axios';

const config = {
  headers: {
    Authorization: '',
  },
};
export class Service {
  static service = axios.create();

  static async get(url: string, token: string) {
    config.headers.Authorization = `Bearer ${token}`;
    const responseData = this.service.get(url, config).catch((error: any) => {
      switch (error.response.status) {
        case 401:
          console.log(`401`, error.response);
          break;
      }
      return Promise.reject(error);
    });
    return responseData;
  }
  static async post(url: string, payload: any) {
    return await this.service.post(url, payload);
  }
}

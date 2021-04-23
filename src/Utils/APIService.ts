import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const config = {
  headers: {
    Authorization: '',
  },
};
export class APIService {
  static service = axios.create();

  static async get(url: string) {
    const token = await AsyncStorage.getItem('token');
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
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return await this.service
      .post(url, payload, config)
      .catch(error => console.log(`error??????`, error));
  }
  static async put(url: string, payload: any) {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return await this.service
      .put(url, payload, config)
      .catch(error => console.log(`error`, error));
  }
  static async delete(url: string) {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return await this.service
      .delete(url, config)
      .catch(error => console.log(`error`, error));
  }
}

import {SignUpPayload} from '../Store/Authorization/types';
import {Service} from './APIService';

const API_URL = 'https://prayer.herokuapp.com/';
export default {
  getColumns: async (token: string) => {
    return await Service.get(`${API_URL}columns`, token);
  },
  signIn: (email: string, password: string) => {
    return Service.post(`${API_URL}auth/sign-in`, email, password);
  },
  signUp: (payload: SignUpPayload) => {
    return Service.post(`${API_URL}auth/sign-up`, payload);
  },
};

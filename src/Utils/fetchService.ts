import {SignInPayload, SignUpPayload} from '../Store/Authorization/types';
import {Service} from './APIService';

const API_URL = 'https://prayer.herokuapp.com';
export default {
  getColumns: async (token: string) => {
    return await Service.get(`${API_URL}/columns`, token);
  },
  signIn: (payload: SignInPayload) => {
    return Service.post(`${API_URL}/auth/sign-in`, payload);
  },
  signUp: (payload: SignUpPayload) => {
    return Service.post(`${API_URL}/auth/sign-up`, payload);
  },
};

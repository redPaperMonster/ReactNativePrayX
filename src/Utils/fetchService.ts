import {SignInPayload, SignUpPayload} from '../Store/Authorization/types';
import {createColumnPayload, editColumnPayload} from '../Store/Columns/types';
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
  createColumn: async (payload: createColumnPayload) => {
    return Service.post(`${API_URL}/columns`, payload);
  },
  editColumn: async ({id, title, description}: editColumnPayload) => {
    return Service.put(`${API_URL}/columns/${id}`, {
      title,
      description,
    });
  },
  deleteColumn: async (id: string) => {
    return Service.delete(`${API_URL}/columns/${id}`);
  },
};

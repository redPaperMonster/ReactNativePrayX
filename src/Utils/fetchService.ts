import {SignInPayload, SignUpPayload} from '../Store/Authorization/types';
import {createColumnPayload, editColumnPayload} from '../Store/Columns/types';
import {createTaskPayload} from '../Store/Tasks/types';
import {Service} from './APIService';

const API_URL = 'https://prayer.herokuapp.com';
export default {
  signIn: (payload: SignInPayload) => {
    return Service.post(`${API_URL}/auth/sign-in`, payload);
  },
  signUp: (payload: SignUpPayload) => {
    return Service.post(`${API_URL}/auth/sign-up`, payload);
  },
  getColumns: async (token: string) => {
    return await Service.get(`${API_URL}/columns`);
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
  deleteColumn: async (id: number) => {
    return Service.delete(`${API_URL}/columns/${id}`);
  },
  getTasks: async () => {
    return await Service.get(`${API_URL}/prayers`);
  },
  createTask: async (payload: createTaskPayload, columnId: number) => {
    return Service.post(`${API_URL}/columns/${columnId}/prayers`, payload);
  },
  deleteTask: async (id: number) => {
    const resp = await Service.delete(`${API_URL}/prayers/${id}`);
    return resp;
  },
  editTask: async (payload: createTaskPayload, id: number) => {
    return Service.put(`${API_URL}/prayers/${id}`, payload);
  },
};

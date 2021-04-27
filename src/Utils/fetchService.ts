import {AxiosResponse} from 'axios';
import {normalize, schema} from 'normalizr';
import {SignInPayload, SignUpPayload} from '../Store/Authorization/types';
import {createColumnPayload, editColumnPayload} from '../Store/Columns/types';
import {
  createCommentPayload,
  editCommentPayload,
} from '../Store/Comments/types';
import {createTaskPayload} from '../Store/Tasks/types';
import {APIService} from './APIService';

const API_URL = 'https://prayer.herokuapp.com';
export default {
  signIn: (payload: SignInPayload) => {
    return APIService.post(`${API_URL}/auth/sign-in`, payload);
  },
  signUp: (payload: SignUpPayload) => {
    return APIService.post(`${API_URL}/auth/sign-up`, payload);
  },
  getColumns: async (token: string) => {
    return await APIService.get(`${API_URL}/columns`);
  },
  createColumn: async (payload: createColumnPayload) => {
    return APIService.post(`${API_URL}/columns`, payload);
  },
  editColumn: async ({id, title, description}: editColumnPayload) => {
    return APIService.put(`${API_URL}/columns/${id}`, {
      title,
      description,
    });
  },
  deleteColumn: async (id: number) => {
    return APIService.delete(`${API_URL}/columns/${id}`);
  },
  getTasks: async () => {
    return await APIService.get(`${API_URL}/prayers`);
  },
  createTask: async (payload: createTaskPayload, columnId: number) => {
    return APIService.post(`${API_URL}/columns/${columnId}/prayers`, payload);
  },
  deleteTask: async (id: number) => {
    return await APIService.delete(`${API_URL}/prayers/${id}`);
  },
  editTask: async (payload: createTaskPayload, id: number) => {
    return await APIService.put(`${API_URL}/prayers/${id}`, payload);
  },
  getComments: async () => {
    return await APIService.get(`${API_URL}/comments`);
  },
  createComment: async ({id, data}: createCommentPayload) => {
    return await APIService.post(`${API_URL}/prayers/${id}/comments`, {
      body: data.body,
    });
  },
  deleteComment: async (id: number) => {
    return await APIService.delete(`${API_URL}/comments/${id}`);
  },
  editComment: async ({id, body}: editCommentPayload) => {
    return await APIService.put(`${API_URL}/comments/${id}`, {
      body: body,
    });
  },
};

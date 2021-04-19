import {Service, urls} from './APIService';

export default {
  getColumns: async (token: string) => {
    return await Service.get(urls.getColumns, token);
  },
  signIn: (email: string, password: string) => {
    return Service.post(urls.signIn, email, password);
  },
  signUp: (name: string, email: string, password: string) => {
    return Service.post(urls.signUp, email, password, name);
  },
};

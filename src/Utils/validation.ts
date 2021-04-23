import {AxiosResponse} from 'axios';
import {userActions} from '../Store/Authorization/userSlice';
import fetchAPI from './fetchService';
export const validation = {
  required: (value: string) => {
    if (typeof value === 'string') {
      return value.trim() ? undefined : 'Required';
    }
    return 'Required';
  },
  emailValidate: (value: string) => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (typeof value === 'string') {
      return pattern.test(value) ? undefined : 'Email is not correct';
    }
    return 'Email required';
  },
  passwordValidation: (value: string) => {
    if (typeof value === 'string') {
      if (value.length < 6) {
        return 'password is too short';
      } else if (value.length > 18) {
        return 'password is too long';
      }
      return undefined;
    }
    return 'Password required!';
  },
  nameValidation: (value: string) => {
    if (typeof value === 'string') {
      if (value.length < 2) {
        return 'name is too short';
      } else if (value.length > 24) {
        return 'name is too long';
      }
      return undefined;
    }
    return 'Name required';
  },
};

const submit = async (response: AxiosResponse) => {
  if (response.data.message) {
    throw {formError: 'data is incorrect, please try again'};
  }
  return response;
};

export const asyncSubmissionMiddleware = (store: {
  dispatch: (arg0: {type: string; payload: any}) => any;
}) => (next: (arg0: any) => any) => async (action: {
  type: string;
  payload: {email: string; password: string};
}) => {
  if (action && action.type === userActions.signIn.type) {
    const response: AxiosResponse = await fetchAPI.signIn({
      email: action.payload.email,
      password: action.payload.password,
    });
    submit(response)
      .then(res =>
        store.dispatch({
          type: userActions.signInSuccess.type,
          payload: res,
        }),
      )
      .catch(error =>
        store.dispatch({type: userActions.signInSuccess.type, payload: error}),
      );
  }
  return next(action);
};

export const validation = {
  fieldRequired: (value: string) => {
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

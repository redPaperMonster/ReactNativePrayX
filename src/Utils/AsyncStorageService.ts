import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  setToken: async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {}
  },

  getToken: async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        return value;
      }
    } catch (error) {}
  },
  setName: async (name: string) => {
    try {
      await AsyncStorage.setItem('name', name);
    } catch (error) {}
  },
  getName: async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        return value;
      }
    } catch (error) {}
  },
};

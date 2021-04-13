import {StyleSheet} from 'react-native';
import {AppColors} from '../../Utils';

export const InputFieldStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    padding: 0,
    color: AppColors.red,
  },
  errorText: {
    fontWeight: 'bold',
    color: AppColors.red,
    textAlign: 'center',
  },
  inputWrapper: {
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    color: AppColors.black,
    textAlign: 'center',
  },
});

import {StyleSheet} from 'react-native';
import {AppColors} from '../../Utils';

export const CustomButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.navigation,
    marginTop: 5,
    borderRadius: 2,
  },
  text: {
    color: AppColors.white,
    marginVertical: 4,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

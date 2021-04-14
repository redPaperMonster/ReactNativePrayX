import {StyleSheet} from 'react-native';
import {colors} from '../../Utils';

export default StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    padding: 0,
    color: colors.black,
    flex: 99,
    fontFamily: 'PoppinsRegular',
  },
  errorText: {
    fontWeight: 'bold',
    color: colors.red,
    textAlign: 'center',
  },
  inputWrapper: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
  },
  icon: {flex: 1, right: 30},
});

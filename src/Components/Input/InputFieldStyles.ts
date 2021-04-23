import {StyleSheet} from 'react-native';
import {colors} from '../../Utils';

export default StyleSheet.create({
  container: {},
  input: {
    padding: 0,
    color: colors.black,
    flex: 99,
    fontFamily: 'PoppinsRegular',
    marginBottom: 5,
  },
  errorText: {
    fontWeight: 'bold',
    color: colors.red,
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
    paddingTop: 16,
  },
  icon: {flex: 1, right: 30},
});

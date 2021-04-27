import {StyleSheet} from 'react-native';
import {colors} from '../../../../../Utils';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    borderColor: colors.gray,
    alignItems: 'center',
  },
  formContainer: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  fieldWrapper: {
    flex: 10,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 0,
  },
});

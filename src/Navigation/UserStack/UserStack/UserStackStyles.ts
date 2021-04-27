import {StyleSheet} from 'react-native';
import {colors} from '../../../Utils';

export default StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    alignSelf: 'center',
  },
  taskStackHeader: {
    backgroundColor: colors.main,
  },
  settingsIcon: {
    marginRight: 20,
  },
  handsIcon: {
    backgroundColor: colors.red,
  },
  title: {
    alignSelf: 'center',
  },
});

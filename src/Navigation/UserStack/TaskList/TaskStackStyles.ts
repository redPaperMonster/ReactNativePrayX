import {StyleSheet} from 'react-native';
import {colors} from '../../../Utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: colors.white,
  },
  tabContainer: {
    flex: 3,
  },
  tabIndicator: {
    backgroundColor: colors.lightBlue,
  },
  tabLabel: {},
});

import {StyleSheet} from 'react-native';
import {colors} from '../../../../../Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingLeft: 10,
    paddingVertical: 20,
  },
  text: {
    fontSize: 17,
    paddingLeft: 20,
    width: 150,
  },
  leftPartContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightPartContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

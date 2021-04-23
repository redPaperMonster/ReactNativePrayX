import {StyleSheet} from 'react-native';
import {colors} from '../../../../../Utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: colors.white,
  },
  formWrapper: {
    height: 64,
  },
  listWrapper: {
    flex: 3,
    flexGrow: 1,
  },

  task: {
    backgroundColor: colors.white,
    flex: 1,
  },
  rowsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 64,
    paddingHorizontal: 10,
  },
  backTextWhite: {
    color: colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: colors.red,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 60,
    paddingRight: 20,
  },
  editButton: {
    flex: 1,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    height: 60,
    marginVertical: 2,
  },
});

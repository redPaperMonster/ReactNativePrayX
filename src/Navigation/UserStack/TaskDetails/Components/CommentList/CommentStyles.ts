import {StyleSheet} from 'react-native';
import {colors} from '../../../../../Utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: colors.white,
  },
  listContainer: {},
  buttonContainer: {
    alignSelf: 'center',
  },
  formWrapper: {
    height: 64,
  },
  listWrapper: {
    maxHeight: '80%',
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
  },
  deleteButton: {
    flex: 1,
    backgroundColor: colors.red,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 15,
  },
  editButton: {
    flex: 1,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  decoratedText: {
    textDecorationLine: 'line-through',
  },
});

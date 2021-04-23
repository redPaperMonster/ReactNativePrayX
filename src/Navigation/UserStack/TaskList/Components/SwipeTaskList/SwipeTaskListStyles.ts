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
  button: {
    backgroundColor: colors.main,
    borderRadius: 15,
    paddingHorizontal: 20,
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
    textAlignVertical: 'center',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: colors.red,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 60,
    paddingRight: 15,
  },

  decoratedText: {
    textDecorationLine: 'line-through',
  },
});

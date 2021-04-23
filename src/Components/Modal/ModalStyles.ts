import {StyleSheet} from 'react-native';
import {colors} from '../../Utils';

export default StyleSheet.create({
  container: {},
  modalView: {
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: colors.black,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
    height: '50%',
    width: '70%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    flex: 2,
    alignSelf: 'flex-end',
    marginRight: 9,
  },
  children: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 10,
  },
});

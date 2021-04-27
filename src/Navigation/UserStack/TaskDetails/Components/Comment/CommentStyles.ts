import {StyleSheet} from 'react-native';
import {colors} from '../../../../../Utils';

export default StyleSheet.create({
  avatar: {
    alignSelf: 'center',
  },
  avatarImage: {
    borderRadius: 50,
  },
  container: {
    flexDirection: 'row',
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 10,
  },
  comment: {
    paddingLeft: 20,
  },
  head: {
    flexDirection: 'row',
  },
  author: {
    fontSize: 14,
    fontFamily: 'PoppinsBold',
  },
  date: {
    fontSize: 14,
    color: colors.secondary,
    fontFamily: 'PoppinsRegular',
    paddingLeft: 20,
  },
  body: {
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
  },
});

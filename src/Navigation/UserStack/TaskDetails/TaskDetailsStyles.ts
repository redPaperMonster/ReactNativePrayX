import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../Utils';

export default StyleSheet.create({
  topSection: {
    backgroundColor: colors.main,
  },

  textTopSection: {
    color: colors.white,
    fontFamily: 'PoppinsRegular',
    fontSize: 17,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontFamily: 'PoppinsRegular',
    fontSize: 17,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  lastPrayContainer: {
    marginVertical: 10,
    paddingLeft: 10,
    borderLeftColor: colors.red,
    borderLeftWidth: 5,
    marginLeft: 20,
    borderRadius: 3,
  },
  centerSectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  centerSectionItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gray,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  centerSectionTitle: {
    fontSize: 20,
    color: colors.main,
    fontFamily: 'PoppinsRegular',
  },
  centerSectionCount: {
    fontSize: 24,
    color: colors.main,
    fontFamily: 'PoppinsRegular',
  },
  centerSectionText: {
    fontSize: 13,
    fontFamily: 'PoppinsRegular',
  },
  centerSectionSecondText: {
    fontSize: 13,
    fontFamily: 'PoppinsRegular',
    color: colors.lightBlue,
  },
  membersContainer: {
    padding: 20,
  },
  secondTitle: {
    color: colors.lightBlue,
    fontSize: 14,
    fontFamily: 'PoppinsBold',
  },
  membersList: {
    flexDirection: 'row',
    marginTop: 10,
  },
  membersItem: {
    marginHorizontal: 5,
    borderRadius: 50,
    height: 36,
  },
  addMember: {
    marginHorizontal: 5,
    borderRadius: 50,
    backgroundColor: colors.main,
    padding: 10,
  },
  commentTitle: {paddingLeft: 20},
  commentList: {
    maxHeight: 200,
  },
});

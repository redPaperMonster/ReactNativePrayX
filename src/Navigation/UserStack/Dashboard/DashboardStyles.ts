import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../Utils';

export default StyleSheet.create({
  sectionText: {
    alignSelf: 'flex-start',
    fontSize: 14,
    textAlign: 'left',
    color: colors.black,
    fontFamily: 'PoppinsRegular',
    paddingLeft: 20,
  },
  titleContainer: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  column: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    flex: 1,
  },
  standaloneRowFront: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.gray,
    marginBottom: 20,
  },
  standaloneRowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  rowsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 64,
    paddingHorizontal: 20,
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
    marginVertical: 2,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'PoppinsRegular',
    paddingRight: '35%',
    fontSize: 17,
  },
});

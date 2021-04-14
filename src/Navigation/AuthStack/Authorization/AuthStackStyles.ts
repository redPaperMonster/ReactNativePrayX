import {StyleSheet} from 'react-native';
import {colors} from '../../../Utils';

export default StyleSheet.create({
  sectionText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#514D47',
    marginTop: 40,
    fontFamily: 'PoppinsRegular',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    flex: 1,
  },
  tabContainer: {
    flex: 3,
  },
  tabLabel: {
    textTransform: 'none',
  },
  tab: {
    backgroundColor: colors.lightBlue,
  },
});

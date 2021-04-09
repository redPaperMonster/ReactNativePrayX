import {StyleSheet} from 'react-native';

export const MyDeskStyles = StyleSheet.create({
  sectionText: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: '#514D47',
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 64,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  titleContainer: {
    flexGrow: 1,
  },
  todoContainer: {},
});

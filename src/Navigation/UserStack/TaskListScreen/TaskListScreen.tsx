import React from 'react';
import {Text, View} from 'react-native';
import {TaskListScreenProps} from '../../ScreensTypes';

const TaskListScreen: React.FC<TaskListScreenProps> = ({navigation, route}) => {
  return (
    <View>
      <Text>TaskList Here!</Text>
    </View>
  );
};

export default TaskListScreen;

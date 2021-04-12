import React from 'react';
import {Text, View} from 'react-native';
import {TaskListProps} from '../../ScreensTypes';

const TaskList: React.FC<TaskListProps> = ({navigation, route}) => {
  return (
    <View>
      <Text>TaskList Here!</Text>
    </View>
  );
};

export default TaskList;

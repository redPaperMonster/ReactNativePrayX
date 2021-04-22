import React from 'react';
import {Text, View} from 'react-native';
import {TaskListProps} from '../../ScreensTypes';

const TaskList: React.FC<TaskListProps> = ({navigation, route}) => {
  return (
    <View>
      <Text>TaskList Here!</Text>
      <Text>{route.params.column.title}</Text>
    </View>
  );
};

export default TaskList;

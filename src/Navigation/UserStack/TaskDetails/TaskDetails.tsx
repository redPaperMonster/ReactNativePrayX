import React from 'react';
import {Text, View} from 'react-native';
import {TaskDetailsProps} from '../../ScreensTypes';

const TaskDetails: React.FC<TaskDetailsProps> = ({navigation, route}) => {
  return (
    <View>
      <Text>{route.params.task.title}</Text>
    </View>
  );
};

export default TaskDetails;

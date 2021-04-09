import React from 'react';
import {Text, View} from 'react-native';
import {TaskProps} from '../../ScreensTypes';

const TaskScreen: React.FC<TaskProps> = ({navigation, route}) => {
  return (
    <View>
      <Text>TASK SCREEN</Text>
    </View>
  );
};

export default TaskScreen;

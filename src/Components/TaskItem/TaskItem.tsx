import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Checkbox from '../Checkbox/Checkbox';
import style from './TaskItemStyles';
const TaskItem = () => {
  return (
    <View style={style.container}>
      <Checkbox checked onChange={() => {}} />
      <TouchableOpacity>
        <Text>some task!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

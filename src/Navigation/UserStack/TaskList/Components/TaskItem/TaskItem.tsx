import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity, TextStyle} from 'react-native';
import {useDispatch} from 'react-redux';
import {HandsIcon, MessageIcon} from '../../../../../Assets/icons';
import {Checkbox} from '../../../../../Components';
import {taskActions, TaskType} from '../../../../../Store';
import Counter from '../Counters/Counter';
import style from './TaskItemStyle';
interface TaskItemProps {
  task: TaskType;
  customStyle?: TextStyle;
}
const TaskItem: React.FC<TaskItemProps> = ({task, customStyle = {}}) => {
  const checked = task.checked;
  const dispatch = useDispatch();
  const handleChange = () => {
    const payload = {
      task: {
        title: task.title,
        description: task.description,
        checked: !checked,
      },
      id: task.id,
    };
    dispatch(taskActions.editTask(payload));
  };
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.leftPartContainer}>
        <Checkbox checked={checked} onChange={handleChange} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TaskDetails', {task: task});
          }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={[style.text, customStyle]}>
            {task.title}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.rightPartContainer}>
        <Counter icon={<MessageIcon />} />
        <Counter icon={<HandsIcon />} />
      </View>
    </View>
  );
};

export default TaskItem;

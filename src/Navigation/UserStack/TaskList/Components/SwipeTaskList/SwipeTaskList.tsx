import React, {useState} from 'react';
import {ListRenderItemInfo, Text, TouchableOpacity, View} from 'react-native';
import style from './SwipeTaskListStyles';
import {SwipeListView, RowMap} from 'react-native-swipe-list-view';
import {useDispatch} from 'react-redux';
import {TaskItem} from '..';
import {taskActions, TaskType} from '../../../../../Store';
import {Button} from '../../../../../Components';

interface SwipeTaskListProps {
  checkedTasks: TaskType[];
  uncheckedTasks: TaskType[];
}
const SwipeTaskList: React.FC<SwipeTaskListProps> = ({
  checkedTasks,
  uncheckedTasks,
}) => {
  const dispatch = useDispatch();
  const [showChecked, setShowChecked] = useState<boolean>(true);

  const renderHiddenItem = (
    {item}: ListRenderItemInfo<any>,
    rowMap: RowMap<any>,
  ) => (
    <View style={style.rowsContainer}>
      <TouchableOpacity
        style={style.deleteButton}
        onPress={() => dispatch(taskActions.deleteTask(item.id))}>
        <Text style={[style.backTextWhite]}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={style.container}>
      <View style={style.listWrapper}>
        <SwipeListView
          data={uncheckedTasks}
          renderItem={({item}, rowMap) => (
            <View style={style.task} key={item.id}>
              <TaskItem task={item} />
            </View>
          )}
          renderHiddenItem={renderHiddenItem}
          disableRightSwipe
          rightOpenValue={-75}
          stopRightSwipe={-75}
        />
      </View>

      <View style={style.buttonContainer}>
        <Button
          title={`${showChecked ? 'hide' : 'show'} Answered Prayers`}
          onPress={() => setShowChecked(!showChecked)}
          customStyle={style.button}
        />
      </View>
      {showChecked && (
        <View style={style.listWrapper}>
          <SwipeListView
            data={checkedTasks}
            renderItem={({item}, rowMap) => (
              <View style={style.task} key={item.id}>
                <TaskItem task={item} customStyle={style.decoratedText} />
              </View>
            )}
            renderHiddenItem={renderHiddenItem}
            disableRightSwipe
            rightOpenValue={-75}
            stopRightSwipe={-75}
          />
        </View>
      )}
    </View>
  );
};

export default SwipeTaskList;

import React from 'react';
import {Text, View} from 'react-native';
import style from './PrayerStyle';
import {AddPrayer} from '../../Components';
import {useDispatch, useSelector} from 'react-redux';
import {PrayersProps} from '../../../../ScreensTypes';
import {SwipeTaskList} from '../../Components/SwipeTaskList';
import {taskActions, taskSelectors} from '../../../../../Store';

const Prayers: React.FC<PrayersProps> = ({navigation, route}) => {
  const dispatch = useDispatch();

  const checkedTasks = useSelector(
    taskSelectors.getCheckedTasksByColumnId(route.params.columnId),
  );

  const uncheckedTasks = useSelector(
    taskSelectors.getUncheckedTasksByColumnId(route.params.columnId),
  );

  const dataLoaded = useSelector(taskSelectors.getDataLoaded());

  React.useEffect(() => {
    !dataLoaded && dispatch(taskActions.loadData());
  }, []);

  if (!dataLoaded) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={style.container}>
      <View style={style.formWrapper}>
        <AddPrayer columnId={route.params.columnId} />
      </View>

      <View style={style.listWrapper}>
        <SwipeTaskList
          checkedTasks={checkedTasks}
          uncheckedTasks={uncheckedTasks}
        />
      </View>
    </View>
  );
};

export default Prayers;

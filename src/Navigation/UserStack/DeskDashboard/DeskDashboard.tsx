import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {userActions} from '../../../Store/Authorization/userSlice';
import {userRoutes} from '../../routes';
import {DeskDashboardProps} from '../../ScreensTypes';
import style from './DeskDashboardStyles';

const DeskDashboard: React.FC<DeskDashboardProps> = ({navigation, route}) => {
  const dispatch = useDispatch();

  return (
    <View>
      <View style={style.container}>
        <View style={style.titleContainer}>
          <Text style={style.sectionText}>My Desk</Text>
        </View>
      </View>
      <View style={style.todoContainer}></View>
      <Button
        title="open some TaskList"
        onPress={() => navigation.navigate(userRoutes.TaskList)}></Button>
      <Button
        title="open Task details"
        onPress={() => navigation.navigate(userRoutes.TaskDetails)}></Button>
      <Button
        title="log out"
        onPress={() => {
          dispatch(userActions.logOut());
        }}></Button>
    </View>
  );
};
export default DeskDashboard;

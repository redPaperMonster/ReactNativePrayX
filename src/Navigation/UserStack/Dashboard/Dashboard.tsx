import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../../../Components';
import {userActions} from '../../../Store/Authorization/userSlice';
import {userRoutes} from '../../routes';
import {DashboardProps} from '../../ScreensTypes';
import style from './DashboardStyles';

const Dashboard: React.FC<DashboardProps> = ({navigation, route}) => {
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
        title="log out"
        onPress={() => {
          dispatch(userActions.logOut());
        }}
      />
    </View>
  );
};
export default Dashboard;

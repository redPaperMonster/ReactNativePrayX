import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {userRoutes} from '../../routes';
import {DeskDashboardProps} from '../../ScreensTypes';
import {DeskDashboardStyles} from './DeskDashboardStyles';

const DeskDashboard: React.FC<DeskDashboardProps> = ({navigation, route}) => {
  return (
    <View>
      <View style={DeskDashboardStyles.container}>
        <View style={DeskDashboardStyles.titleContainer}>
          <Text style={DeskDashboardStyles.sectionText}>My Desk</Text>
        </View>
        <Image source={require('../../../Assets/icons/Union.png')} />
      </View>
      <View style={DeskDashboardStyles.todoContainer}></View>
      <Button
        title="open some TaskListScreen"
        onPress={() => navigation.navigate(userRoutes.TaskListScreen)}></Button>
      <Button
        title="open Task details"
        onPress={() =>
          navigation.navigate(userRoutes.TaskDetailsScreen)
        }></Button>
    </View>
  );
};
export default DeskDashboard;

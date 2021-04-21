import React, {useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import style from './UserStackStyles';
import {UserStackProps} from '../../ScreensTypes';
import {userRoutes} from '../../routes';
import Dashboard from '../Dashboard/Dashboard';
import TaskDetails from '../TaskDetails/TaskDetails';
import TaskList from '../TaskListScreen/TaskListScreen';

const UserStack: React.FC<UserStackProps> = ({route, navigation}) => {
  const Stack = createStackNavigator();

  return (
    <View>
      <NavigationContainer independent>
        <View style={style.container}>
          <Stack.Navigator initialRouteName={userRoutes.Dashboard}>
            <Stack.Screen
              name={userRoutes.Dashboard}
              component={Dashboard}
              options={{headerShown: false}}
            />
            <Stack.Screen name={userRoutes.TaskList} component={TaskList} />
            <Stack.Screen
              name={userRoutes.TaskDetails}
              component={TaskDetails}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </View>
  );
};

export default UserStack;

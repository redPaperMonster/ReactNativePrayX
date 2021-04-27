import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import style from './UserStackStyles';
import {UserStackProps} from '../../ScreensTypes';
import {userRoutes} from '../../routes';
import Dashboard from '../Dashboard/Dashboard';
import TaskDetails from '../TaskDetails/TaskDetails';
import TaskList from '../trash/TaskList';
import {HandsIcon, SettingsIcon, UserIcon} from '../../../Assets/icons';
import {useDispatch} from 'react-redux';
import {userActions} from '../../../Store';
import {colors} from '../../../Utils';

const UserStack: React.FC<UserStackProps> = ({route, navigation}) => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

  return (
    <NavigationContainer independent>
      <View style={style.container}>
        <Stack.Navigator initialRouteName={userRoutes.Dashboard}>
          <Stack.Screen
            name={userRoutes.Dashboard}
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={userRoutes.TaskStack}
            component={TaskList}
            options={{
              headerTitleStyle: style.header,
              headerRight: () => (
                <TouchableOpacity
                  style={style.settingsIcon}
                  onPress={() => dispatch(userActions.logOut())}>
                  <SettingsIcon />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name={userRoutes.TaskDetails}
            component={TaskDetails}
            options={{
              title: '',
              headerTintColor: colors.white,
              headerStyle: style.taskStackHeader,
              headerRight: () => (
                <TouchableOpacity style={style.settingsIcon} onPress={() => {}}>
                  <HandsIcon fill={colors.white} />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default UserStack;

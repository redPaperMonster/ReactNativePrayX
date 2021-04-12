import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {UserStackStyles} from './UserStackStyles';
import {UserStackProps} from '../../ScreensTypes';
import {userRoutes} from '../../routes';
import DeskDashboard from '../DeskDashboard/DeskDashboard';
import TaskDetails from '../TaskDetails/TaskDetails';
import TaskList from '../TaskListScreen/TaskListScreen';

const UserStack: React.FC<UserStackProps> = ({route, navigation}) => {
  const Stack = createStackNavigator();

  return (
    <View>
      <NavigationContainer independent>
        <View style={UserStackStyles.sectionContainer}>
          <Stack.Navigator initialRouteName={userRoutes.DeskDashboard}>
            <Stack.Screen
              name={userRoutes.DeskDashboard}
              component={DeskDashboard}
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

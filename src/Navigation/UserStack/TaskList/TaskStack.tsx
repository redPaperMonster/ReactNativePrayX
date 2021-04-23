import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {View} from 'react-native';
import {colors} from '../../../Utils';
import {TasksRoutes} from '../../routes';
import {TaskStackProps, TaskTabsStackParamList} from '../../ScreensTypes';
import {Prayers, Subscribed} from './Screens';
import style from './TaskStackStyles';

const Tab = createMaterialTopTabNavigator<TaskTabsStackParamList>();

const TaskList: React.FC<TaskStackProps> = ({navigation, route}) => {
  React.useEffect(() => {
    navigation.setOptions({headerTitle: route.params.column.title});
  }, []);

  return (
    <View style={style.container}>
      <View style={style.tabContainer}>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: style.tabLabel,
            indicatorStyle: style.tabIndicator,
            activeTintColor: colors.lightBlue,
            inactiveTintColor: colors.black,
            scrollEnabled: false,
          }}
          swipeEnabled={false}>
          <Tab.Screen
            name={TasksRoutes.Prayers}
            component={Prayers}
            options={{title: 'MY PRAYERS'}}
            initialParams={{
              columnId: route.params.column.id,
            }}
          />
          <Tab.Screen name={TasksRoutes.Subscribed} component={Subscribed} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default TaskList;

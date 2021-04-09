import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MyDesk, PrayerDetails, TaskScreen} from '..';
import {createStackNavigator} from '@react-navigation/stack';
import {UserStackStyles} from './UserStackStyles';
import {UserStackProps} from '../../ScreensTypes';

const UserStack: React.FC<UserStackProps> = ({route, navigation}) => {
  const Stack = createStackNavigator();

  return (
    <View>
      <NavigationContainer independent>
        <View style={UserStackStyles.sectionContainer}>
          <Stack.Navigator initialRouteName="MyDesk">
            <Stack.Screen name="MyDesk" component={MyDesk} />
            <Stack.Screen name="TaskScreen" component={TaskScreen} />
            <Stack.Screen name="PrayerDetails" component={PrayerDetails} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </View>
  );
};

export default UserStack;

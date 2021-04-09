import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {UserStack, AuthStack} from '.';
import {MainNavigationStyles} from './MainNavigationStyles';
import {RootStackParamList} from './ScreensTypes';

const MainNavigation = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <View>
      <NavigationContainer>
        <View style={MainNavigationStyles.sectionContainer}>
          <Stack.Navigator initialRouteName="Authorization">
            <Stack.Screen name="Authorization" component={AuthStack} />
            <Stack.Screen
              name="UserStack"
              component={UserStack}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </View>
  );
};

export default MainNavigation;

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {UserStack, AuthStack} from '.';
import {MainNavigationStyles} from './MainNavigationStyles';
import {RootStackParamList} from './ScreensTypes';
import {RootRoutes} from './routes';

const MainNavigation = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <View>
      <NavigationContainer>
        <View style={MainNavigationStyles.sectionContainer}>
          <Stack.Navigator initialRouteName={RootRoutes.AuthStack}>
            <Stack.Screen name={RootRoutes.AuthStack} component={AuthStack} />
            <Stack.Screen
              name={RootRoutes.UserStack}
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

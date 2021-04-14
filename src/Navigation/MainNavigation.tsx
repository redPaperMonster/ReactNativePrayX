import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import style from './MainNavigationStyles';
import {RootStackParamList} from './ScreensTypes';
import {RootRoutes} from './routes';

const MainNavigation = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <View>
      <NavigationContainer>
        <View style={style.container}>
          <Stack.Navigator
            initialRouteName={RootRoutes.AuthStack}
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name={RootRoutes.AuthStack} component={AuthStack} />
            <Stack.Screen name={RootRoutes.UserStack} component={UserStack} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </View>
  );
};

export default MainNavigation;

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import style from './MainNavigationStyles';
import {RootStackParamList} from './ScreensTypes';
import {RootRoutes} from './routes';
import {useDispatch, useSelector} from 'react-redux';
import {userSelectors} from '../Store';

const MainNavigation = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  const dispatch = useDispatch();
  const isLoaded = useSelector(userSelectors.getDataLoaded());
  const token = useSelector(userSelectors.getToken());

  return isLoaded ? (
    <View>
      <NavigationContainer>
        <View style={style.container}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {token === '' ? (
              <Stack.Screen name={RootRoutes.AuthStack} component={AuthStack} />
            ) : (
              <Stack.Screen name={RootRoutes.UserStack} component={UserStack} />
            )}
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </View>
  ) : (
    <Text>LOADING</Text>
  );
};
export default MainNavigation;

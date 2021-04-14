import React from 'react';
import {Button, Text, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import style from './AuthStackStyles';
import {AuthProps, TabsStackParamList} from '../../ScreensTypes';
import {authRoutes} from '../../routes';

const Tab = createMaterialTopTabNavigator<TabsStackParamList>();

const AuthStack: React.FC<AuthProps> = ({route, navigation}) => {
  return (
    <View style={style.container}>
      <Button
        title="next"
        onPress={() => {
          navigation.navigate('UserStack');
        }}></Button>
      <View style={style.textContainer}>
        <Text style={style.sectionText}>
          To continue using the app log in or register
        </Text>
      </View>
      <View style={style.tabContainer}>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {...style.tabLabel},
            indicatorStyle: {...style.tab},
          }}>
          <Tab.Screen
            name={authRoutes.SignIn}
            component={SignIn}
            options={{title: 'Sign in'}}
          />
          <Tab.Screen
            name={authRoutes.SignUp}
            component={SignUp}
            options={{title: 'Sign up'}}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default AuthStack;

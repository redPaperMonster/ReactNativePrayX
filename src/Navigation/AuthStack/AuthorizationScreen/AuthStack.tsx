import React from 'react';
import {Text, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SignIn, SignUp} from '..';
import {AuthStackStyles} from './AuthStackStyles';
import {AuthProps, TabsStackParamList} from '../../ScreensTypes';
import {authRoutes} from '../../routes';

const Tab = createMaterialTopTabNavigator<TabsStackParamList>();

const AuthStack: React.FC<AuthProps> = ({route, navigation}) => {
  return (
    <View style={AuthStackStyles.container}>
      <View style={AuthStackStyles.textContainer}>
        <Text style={AuthStackStyles.sectionText}>Hello!</Text>
        <Text style={AuthStackStyles.sectionText}>
          To continue using the app log in or register
        </Text>
      </View>
      <View style={AuthStackStyles.tabContainer}>
        <Tab.Navigator>
          <Tab.Screen name={authRoutes.SignIn} component={SignIn} />
          <Tab.Screen name={authRoutes.SignUp} component={SignUp} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default AuthStack;

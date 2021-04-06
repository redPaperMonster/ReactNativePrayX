import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Authorization, MainScreen } from './src/Navigation';
import { createStackNavigator } from '@react-navigation/stack'

const App = () => {

  const Stack = createStackNavigator();

  return (
    <View>
      <NavigationContainer>
        <View style={styles.sectionContainer}>
          {/* state.userToken ? initialRouteName = "Authorization": initialRouteName = "MainScreen"
             <Stack.Navigator initialRouteName={initialRouteName}> */}

          <Stack.Navigator initialRouteName="Authorization">
            {/* {state.userToken ? <Stack.Screen name="Authorization" component={Authorization}:
             <Stack.Screen name="MainScreen" component={MainScreen} />)} */}
            <Stack.Screen
              name="Authorization"
              component={Authorization}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{ headerShown: false }} />
          </Stack.Navigator></View>
      </NavigationContainer>

    </View>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: "column",
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#FFFFFF'
  },

  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

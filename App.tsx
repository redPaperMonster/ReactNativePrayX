import React from 'react';
import {Text, View} from 'react-native';
import {MainNavigation} from './src/Navigation';
import DeskDashboard from './src/Navigation/UserStack/DeskDashboard/DeskDashboard';

const App = () => {
  return (
    <View>
      <MainNavigation />
    </View>
  );
};

export default App;

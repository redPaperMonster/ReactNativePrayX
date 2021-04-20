import React from 'react';
import {Text, View} from 'react-native';
import {MainNavigation} from './src/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/Store/store';

const App = () => {
  return (
    <View>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </View>
  );
};

export default App;

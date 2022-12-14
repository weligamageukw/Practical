import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import store from './src/redux/Store'
import Navigator from './src/navigation/navigator';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
  );
};

export default ()=>{
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Home from '../screen/Home';

const RootStack = createNativeStackNavigator();
const Navigators = () => {
  return (
    <RootStack.Navigator
    // initialRouteName='OvulationDetail'
    >

      <RootStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <RootStack.Screen name="Home" component={Home} options={{ headerShown: false }} />

     
    </RootStack.Navigator>
  );
};

export default Navigators
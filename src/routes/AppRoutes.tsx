import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import UserCard from '../components/UserCard';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserDetails" component={UserCard} />
    </Stack.Navigator>
  );
};

export default AppRoutes;

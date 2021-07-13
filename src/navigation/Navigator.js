import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Home from '../screens/Home/Home';
import DetailsOfBook from '../screens/DetailsOfBook';



const Stack = createStackNavigator();

export default Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="DetailsOfBook" component={DetailsOfBook} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

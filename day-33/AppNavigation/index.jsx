import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Home } from '../screens/Home';
import { Contact } from '../screens/Contact';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown:false
        }} name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default index

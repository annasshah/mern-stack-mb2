import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Login } from '../screens/Login';
import { Signup } from '../screens/Signup';
import Dashboard from '../screens/Dashboard';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
   >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen options={{
          headerShown:false
        }} name="Dashboard" component={Dashboard} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default index

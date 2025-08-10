import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react'
import { screenList } from '../utils/screensList';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { styles } from '../utils/stylesSheet';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const index = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  function handleAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  console.log('user', user)

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);



  if(initializing){

    return <View style={[styles.container, styles.center]}>
      <Text>
        Loading....
      </Text>
    </View>

  }



  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        {/* <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} /> */}

        
{/* true statement */}
{/* !true === false  */}
        {
          screenList.map(({ name, Component, headerShown, authRequired }) => {
            return !!user === authRequired ? <Stack.Screen
              options={{
                headerShown: headerShown
              }}
              name={name} component={Component} /> : null
          })
        }
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default index

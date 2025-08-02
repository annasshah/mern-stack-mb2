import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './dashboard/Home';
import { Profile } from './dashboard/Profile';
import { Settings } from './dashboard/Settings';
import Notifications from './dashboard/Notifications';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Tab = createBottomTabNavigator()

const tabScreens = [
    {
        name:'',
        title: '',
        icon:<></>,
        
    }
]

const Dashboard = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'gray',

        tabBarActiveBackgroundColor:'green',
        tabBarInactiveBackgroundColor:'lightgray'

    }}
    
    >
        <Tab.Screen 
        options={{
            tabBarIcon:({ focused, color, size }) => {

                return <Feather size={20} color={color} name='home' />
            }
        }} 
        name="Home" component={Home} />
        <Tab.Screen
         options={{
            tabBarIcon:({ focused, color, size }) => {

                return <Ionicons size={20} color={color} name='person-outline' />
            }
        }}
        
        name="Profile" component={Profile} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default Dashboard


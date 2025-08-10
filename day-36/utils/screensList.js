import Home from '../screens/Home';
import { Login } from '../screens/Login';
import { Signup } from '../screens/Signup';


export const screenList = [
    {
        name:'Signup',
        Component:Signup,
        headerShown: false,
        authRequired: false
    },
    {
        name:'Login',
        Component:Login,
        headerShown: false,
        authRequired: false
    },
    {
        name:'Home',
        Component:Home,
        headerShown: false,
        authRequired: true
    },
]
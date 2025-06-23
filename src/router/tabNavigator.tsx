
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Favorite from '../screens/favorite';
import Profile from '../screens/profile';
import { FAVORITE, HOME, PROFILE, SEARCH } from '../utils/routes';
import { Colors } from '../theme/colors';
import TabIcon from '../components/router/tabIcon';
import Header from '../components/router/header';




const TabNavigator:React.FC = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
        headerTintColor: Colors.BLACK,
        headerTitleAlign:"center",
        headerShadowVisible:false,
        tabBarIcon:({focused,color,size}) => (
            <TabIcon
            name={route?.name}
            focused={focused}
            color={color}
            size={size}
         />
        ),
        header: () => <Header/>,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.BLACK,
        /*
headerRight: (props) => (
  <HeaderRight {...props} navigation={navigation} />
),
*/
    })}
    >
    <Tab.Screen name={HOME} component={Home} />
    <Tab.Screen name={SEARCH} component={Search} />
    <Tab.Screen name={FAVORITE} component={Favorite} />
    <Tab.Screen name={PROFILE} component={Profile} />


  </Tab.Navigator>
  )
}

export default TabNavigator
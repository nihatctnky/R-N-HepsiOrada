import React, { useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {CART, CATEGORIES, PRODUCTDETAIL, PRODUCTSLISTSCREEN, REGISTER, SIGNIN, TABBAR} from '../utils/routes';
import CategoriesScreen from '../screens/categories';
import {Colors} from '../theme/colors';
import ProductsListScreen from '../screens/products';
import ProductDetail from '../screens/products/productDetail';
import Cart from '../screens/cart';
import Signin from '../screens/auth/signin';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { checkUser } from '../store/actions/authActions';
import Register from '../screens/register/register';

const RootNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator()
  const dispatch:AppDispatch=useDispatch()
  useEffect (()=>{
    dispatch(checkUser())
  },[])
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: Colors.BLACK,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TABBAR}
        component={TabNavigator}
      />

      <Stack.Screen name={CATEGORIES} component={CategoriesScreen} />
      <Stack.Screen name={PRODUCTSLISTSCREEN} component={ProductsListScreen} />
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name={PRODUCTDETAIL} component={ProductDetail} />

<Stack.Screen name={CART} component={Cart} />
<Stack.Screen name={SIGNIN} component={Signin} />
<Stack.Screen name={REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Exhibitions from '.';
import Exhibition from './Moduls/Exhibitions';
import Purchase from './Moduls/Purchase';
import Checkout from './Moduls/Checkout';

const ExhibitionsStack = () => {
  let Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Exhibitions} name={Routes.Exhibitions} />
      <Stack.Screen component={Exhibition} name={Routes.Exhibition} />
      <Stack.Screen component={Purchase} name={Routes.Purchase} />
      <Stack.Screen component={Checkout} name={Routes.Checkout} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default ExhibitionsStack;

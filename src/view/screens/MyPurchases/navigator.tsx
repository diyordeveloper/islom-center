import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyBooks from '../MyBooks';
import MyPurchases from '.';
import MyPurchasesSheet from './Moduls/MyPurchasesTourSheet';
import MyPurchasesBook from './Moduls/MyPurchasesBook/book';
import MyPurchasesBookRead from './Moduls/MyPurchasesBookRead/bookRead';

const MyPurchasesStack = () => {
  let Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={MyPurchases} name={Routes.MyPurchases} />
      <Stack.Screen
        component={MyPurchasesSheet}
        name={Routes.MyPurchasesSheet}
      />
      <Stack.Screen component={MyPurchasesBook} name={Routes.MyPurchasesBook} />
      <Stack.Screen
        component={MyPurchasesBookRead}
        name={Routes.MyPurchasesBookRead}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default MyPurchasesStack;

const styles = StyleSheet.create({});

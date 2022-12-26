import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorites from '.';
import FavoriteTourSheet from './Moduls/Tour/TourSheet';

const FavoritesStack = () => {
  let Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Favorites} name={Routes.Favorites} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default FavoritesStack;

const styles = StyleSheet.create({});

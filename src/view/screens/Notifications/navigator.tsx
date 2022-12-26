import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notifications from '.';
import BottomNavigator from '../../controller/BottomNavigator';

const NotificationsStack = () => {
  let Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen component={BottomNavigator} name={Routes.BottomNavigator} /> */}
      <Stack.Screen component={Notifications} name={Routes.Notifications} />
    </Stack.Navigator>
  );
};

export default NotificationsStack;

const styles = StyleSheet.create({});

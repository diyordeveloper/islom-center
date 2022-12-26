import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notifications from '.';
import BottomNavigator from '../../controller/BottomNavigator';
import News from '.';
import NewsRead from './Moduls/newsRead';

const NewsStack = () => {
  let Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen component={BottomNavigator} name={Routes.BottomNavigator} /> */}
      <Stack.Screen component={News} name={Routes.News} />
      <Stack.Screen component={NewsRead} name={Routes.NewsRead} />
    </Stack.Navigator>
  );
};

export default NewsStack;

const styles = StyleSheet.create({});

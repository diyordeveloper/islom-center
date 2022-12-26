import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Museum from '.';
import TimeWork from './Moduls/TimeWork/TimeWork';
import IntroMuseum from './Moduls/Intro/IntroMuseum';
import LocationMuseum from './Moduls/Location/LocationMuseum';
import Personal from './Moduls/Personal/Personal';
import PersonalCard from './Moduls/Personal/PersonalCard/PersonalCard';
import DocumentsMuseum from './Moduls/Documents/documents';
import Exhibits from './Moduls/Exhibits/Exhibits';
import ExhibitsCard from './Moduls/Exhibits/ExhibitsCard/ExhibitsCard';
import Cooperation from './Moduls/Cooperation/Cooperation';
import Departments from './Moduls/Departments/Departments';
import DepartmentsCard from './Moduls/Departments/DepartmentsCard/DepartmentsCard';
import AboutMuseum from './Moduls/About/AboutMuseum';

const MuseumStack = () => {
  let Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Museum} name={Routes.Museum} />
      <Stack.Screen component={AboutMuseum} name={Routes.AboutMuseum} />
      <Stack.Screen component={Exhibits} name={Routes.Exhibits} />
      <Stack.Screen component={ExhibitsCard} name={Routes.ExhibitsCard} />
      <Stack.Screen component={Departments} name={Routes.Departments} />
      <Stack.Screen component={DepartmentsCard} name={Routes.DepartmentsCard} />
      <Stack.Screen component={Cooperation} name={Routes.Cooperation} />
      <Stack.Screen component={TimeWork} name={Routes.TimeWork} />
      <Stack.Screen component={IntroMuseum} name={Routes.IntroMuseum} />
      <Stack.Screen component={LocationMuseum} name={Routes.LocationMuseum} />
      <Stack.Screen component={Personal} name={Routes.Personal} />
      <Stack.Screen component={PersonalCard} name={Routes.PersonalCard} />
      <Stack.Screen component={DocumentsMuseum} name={Routes.DocumentsMuseum} />
    </Stack.Navigator>
  );
};

export default MuseumStack;

const styles = StyleSheet.create({});

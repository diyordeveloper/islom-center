import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Centre from '.';
import AboutCentre from './Moduls/AboutCentre/AboutCentre';
import TasksCentre from './Moduls/TasksCentre/tasksCentre';
import AdviceCentre from './Moduls/AdviceCentre/AdviceCentre';
import StaffCentre from './Moduls/Staff/staffCentre';
import StaffCard from './Moduls/Staff/StaffCard/StaffCard';
import Documents from './Moduls/Documents/documents';
import Media from '../Media/media';
import Resume from './Moduls/Resume/resume';

const CentreStack = () => {
  let Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Centre} name={Routes.Centre} />
      <Stack.Screen component={AboutCentre} name={Routes.AboutCentre} />
      <Stack.Screen component={TasksCentre} name={Routes.TasksCentre} />
      <Stack.Screen component={AdviceCentre} name={Routes.AdviceCentre} />
      <Stack.Screen component={StaffCentre} name={Routes.StaffCentre} />
      <Stack.Screen component={StaffCard} name={Routes.StaffCard} />
      <Stack.Screen component={Documents} name={Routes.Documents} />
      <Stack.Screen component={Resume} name={Routes.Resume} />
    </Stack.Navigator>
  );
};

export default CentreStack;

const styles = StyleSheet.create({});

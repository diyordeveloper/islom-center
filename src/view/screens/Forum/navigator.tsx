import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Forum from '.';
import MyThemes from './screens/MyThemes';
import CreateTopic from './screens/CreateTopic';
import UserTheme from './screens/UserTheme';

const ForumStack = () => {
  let Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Forum} name={Routes.Forum} />
      <Stack.Screen component={MyThemes} name={Routes.MyThemes} />
      <Stack.Screen component={CreateTopic} name={Routes.CreateTopic} />
      <Stack.Screen component={UserTheme} name={Routes.UserTheme} />
    </Stack.Navigator>
  );
};

export default ForumStack;

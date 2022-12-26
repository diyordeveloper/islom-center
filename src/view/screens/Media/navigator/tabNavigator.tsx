import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Movie from '../Moduls/Movie/movie';
import Audio from '../Moduls/Audio/audio';
import Photo from '../Moduls/Photo/photo';
import {Routes} from '../../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../theme';

const TabNavigator = () => {
  let navigation = useNavigation();

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={Routes.Movie}
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '400',
          textTransform: 'capitalize',
        },
        tabBarStyle: {backgroundColor: colors.white},
        // tabBarItemStyle: {width: 150},
      }}>
      <Tab.Screen
        name={Routes.Photo}
        component={Photo}
        options={{tabBarLabel: 'Фотогалерея'}}
      />
      <Tab.Screen
        name={Routes.Movie}
        component={Movie}
        options={{tabBarLabel: 'Видегалерея'}}
      />
      <Tab.Screen
        name={Routes.Audio}
        component={Audio}
        options={{tabBarLabel: 'Аудиофайлы'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});

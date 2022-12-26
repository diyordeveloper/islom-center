import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {colors} from '../theme';
import {isIOS, windowHeight} from '../constants/size';
import {Routes} from '../../navigation/routes/routes';
import Details from '../screens/Details';
import {
  BookIcon,
  FavoriteIcon,
  HomeIcon,
  MuseumIcon,
  ProfileIcon,
} from '../assets/icons/icon';
import Home from '../screens/home/index';
import Favorites from '../screens/Favorites';
import UserProfile from '../screens/UserProfile';
import LibraryStack from '../screens/Library/navigator';
import MuseumStack from '../screens/Museum/navigator';
import CentreStack from '../screens/Centre/navigator';
import FavoritesStack from '../screens/Favorites/navigator';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          height: isIOS ? windowHeight / 8 - 10 : windowHeight / 8 - 20,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          borderWidth: 0.1,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 2,

          elevation: 0.1,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: isIOS ? 4 : 0,
              }}>
              {/* <View
                style={{
                  display: focused ? 'flex' : 'none',
                  height: 10,
                  width: 10,
                  borderRadius: 25,
                  backgroundColor: focused ? '#000' : 'none',
                  marginBottom: 8,
                }}></View> */}
              <FavoriteIcon
                size={26}
                fillColor={focused ? colors.black : colors.lingthGray}
              />
            </View>
          ),
        }}
        name={Routes.Favorites}
        component={FavoritesStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: isIOS ? 4 : 0,
              }}>
              {/* <View style={{display: focused ? 'flex' : 'none', height: 10, width: 10, borderRadius: 25, backgroundColor: focused ? '#000' : 'none', marginBottom: 8}}></View> */}
              <BookIcon
                size={26}
                fillColor={focused ? colors.black : colors.lingthGray}
              />
            </View>
          ),
        }}
        name={Routes.LibraryStack}
        component={LibraryStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: isIOS ? 4 : 0,
              }}>
              {/* <View style={{display: focused ? 'flex' : 'none', height: 10, width: 10, borderRadius: 25, backgroundColor: focused ? '#000' : 'none', marginBottom: 8}}></View> */}
              <HomeIcon
                size={26}
                fillColor={focused ? colors.black : colors.lingthGray}
              />
            </View>
          ),
        }}
        name={Routes.Home}
        component={Home}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: isIOS ? 4 : 0,
                // backgroundColor={focused ?}
              }}>
              {/* <View style={{display: focused ? 'flex' : 'none', height: 10, width: 10, borderRadius: 25, backgroundColor: focused ? '#000' : 'none', marginBottom: 8}}></View> */}
              <MuseumIcon
                size={26}
                fillColor={focused ? colors.black : colors.lingthGray}
              />
            </View>
          ),
        }}
        name={Routes.CentreStack}
        component={CentreStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: isIOS ? 4 : 0,
              }}>
              {/* <View style={{display: focused ? 'flex' : 'none', height: 10, width: 10, borderRadius: 25, backgroundColor: focused ? '#000' : 'none', marginBottom: 8}}></View> */}
              <ProfileIcon
                size={26}
                fillColor={focused ? colors.black : colors.lingthGray}
              />
            </View>
          ),
        }}
        name={Routes.UserProfile}
        component={UserProfile}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigator;

const styles = StyleSheet.create({
  // TextNavigait: {},
});

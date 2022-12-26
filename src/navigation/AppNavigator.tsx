import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes/routes';
import Intro from '../view/screens/intro';
import Login from '../view/screens/login';
import Welcome from '../view/screens/welcome';
import Home from '../view/screens/home';
import News from '../view/screens/News';
import Museum from '../view/screens/Museum';
import Centre from '../view/screens/Centre';
import TourPages from '../view/screens/Tour/Pages';
import BottomNavigator from '../view/controller/BottomNavigator';
import Tour from '../view/screens/Tour';
import Favorites from '../view/screens/Favorites';
import Library from '../view/screens/Library';
import LibraryProduct from '../view/screens/Library/moduls/LibraryProduct';
import UserProfile from '../view/screens/UserProfile';
import LibraryStack from '../view/screens/Library/navigator';
import LibraryProductRead from '../view/screens/Library/moduls/LibraryProductRead';
import LibraryProductSave from '../view/screens/Library/moduls/LibraryProductSave';
import MuseumStack from '../view/screens/Museum/navigator';
import Notifications from '../view/screens/Notifications';
import NotificationsStack from '../view/screens/Notifications/navigator';
import CentreStack from '../view/screens/Centre/navigator';
import AuthStack from '../view/components/Drawer/DrawerNavigation';
import NewsRead from '../view/screens/News/Moduls/newsRead';
import NewsStack from '../view/screens/News/navigator';
import MyPurchases from '../view/screens/MyPurchases';
import MyPurchasesStack from '../view/screens/MyPurchases/navigator';
import Media from '../view/screens/Media/media';
import FavoriteBookRead from '../view/screens/Favorites/Moduls/BookRead/bookRead';
import FavoriteBook from '../view/screens/Favorites/Moduls/Book/book';
import Exhibitions from '../view/screens/Exhibitions';
import {TransactionSheet} from '../view/components/Other/BottomSheet';
import Exhibition from '../view/screens/Exhibitions/Moduls/Exhibitions';
import FavoriteTourSheet from '../view/screens/Favorites/Moduls/Tour/TourSheet';
import Purchase from '../view/screens/Exhibitions/Moduls/Purchase';
import Checkout from '../view/screens/Exhibitions/Moduls/Checkout';
import VirtualTur from '../view/screens/VirtualTur/VirtualTur';

const Stack = createNativeStackNavigator();
import CustomDrawer from '../view/components/Drawer/CostumDrawer';
import {useAuthContext} from '../context/auth/AuthContext';
import {TypeAuthState} from '../context/auth/TypeAuth';

const AppNavigator = () => {
  const {isToken} = useAuthContext() as TypeAuthState;

  const initialName = isToken ? Routes.AuthStack : Routes.Intro;
  const AuthComponent = isToken ? AuthStack : Intro;

  console.log('--------- ------');
  console.log(
    JSON.stringify({
      isToken,
      initialName,
    }),
  );
  console.log('--------- ------');

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialName}>
      <Stack.Screen component={AuthComponent} name={initialName} />
      <Stack.Screen component={Login} name={Routes.Login} />
      <Stack.Screen component={Welcome} name={Routes.Welcome} />
      <Stack.Screen component={CustomDrawer} name={Routes.CustomDrawer} />
      <Stack.Screen component={Home} name={Routes.Home} />
      <Stack.Screen component={BottomNavigator} name={Routes.BottomNavigator} />
      <Stack.Screen component={Notifications} name={Routes.Notifications} />
      <Stack.Screen
        component={NotificationsStack}
        name={Routes.NotificationsStack}
      />
      <Stack.Screen component={Favorites} name={Routes.Favorites} />
      <Stack.Screen component={FavoriteBook} name={Routes.FavoriteBook} />
      <Stack.Screen
        component={FavoriteBookRead}
        name={Routes.FavoriteBookRead}
      />
      <Stack.Screen
        component={FavoriteTourSheet}
        name={Routes.FavoriteTourSheet}
      />
      <Stack.Screen component={Exhibitions} name={Routes.Exhibitions} />
      <Stack.Screen component={Exhibition} name={Routes.Exhibition} />
      <Stack.Screen component={Purchase} name={Routes.Purchase} />
      <Stack.Screen component={Checkout} name={Routes.Checkout} />
      <Stack.Screen component={Library} name={Routes.Library} />
      <Stack.Screen component={LibraryStack} name={Routes.LibraryStack} />
      <Stack.Screen component={LibraryProduct} name={Routes.LibraryProduct} />
      <Stack.Screen
        component={LibraryProductRead}
        name={Routes.LibraryProductRead}
      />
      <Stack.Screen
        component={LibraryProductSave}
        name={Routes.LibraryProductSave}
      />
      <Stack.Screen component={UserProfile} name={Routes.UserProfile} />
      <Stack.Screen component={VirtualTur} name={Routes.VirtualTur} />
      <Stack.Screen component={TransactionSheet} name={Routes.Sheet} />
      <Stack.Screen component={News} name={Routes.News} />
      <Stack.Screen component={NewsRead} name={Routes.NewsRead} />
      <Stack.Screen component={NewsStack} name={Routes.NewsStack} />
      <Stack.Screen component={Media} name={Routes.Media} />
      <Stack.Screen component={MyPurchases} name={Routes.MyPurchases} />
      <Stack.Screen
        component={MyPurchasesStack}
        name={Routes.MyPurchasesStack}
      />
      <Stack.Screen component={Centre} name={Routes.Centre} />
      <Stack.Screen component={CentreStack} name={Routes.CentreStack} />
      <Stack.Screen component={Museum} name={Routes.Museum} />
      <Stack.Screen component={MuseumStack} name={Routes.MuseumStack} />
      <Stack.Screen component={Tour} name={Routes.Tour} />
      <Stack.Screen component={TourPages} name={Routes.TourPages} />
      {/* <Stack.Screen component={} name={} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;

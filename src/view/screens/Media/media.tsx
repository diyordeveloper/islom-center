import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Settings,
} from 'react-native';
import React from 'react';
import {AppHeader} from '../../components/Other/AppBar';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {colors} from '../../theme';
import {Routes} from '../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';
import Movie from './Moduls/Movie/movie';
import TabNavigator from './navigator/tabNavigator';

const Media = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        logoIcon={true}
        notificatAndDetailsIcons={true}
        notificationColor={colors.black}
        detailsColor={colors.black}
        detailsIcon={true}
        //@ts-ignore
        onPressDetailsIcon={() =>
          //@ts-ignore
          navigation.openDrawer()
        }
        onPressNotification={() =>
          //@ts-ignore
          navigation.navigate(Routes.NotificationsStack)
        }
        headingText={true}
        headingTitle="Медиа"
        headingTextStyle={style.titleStyle}
      />

      <TabNavigator />
    </View>
  );
};

export default Media;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#9485',
    width: windowWidth / 1,
    height: isIOS ? windowHeight / 8 - 20 : windowHeight / 8 - 30,
    paddingHorizontal: 20,
    // zIndex: 99,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
});

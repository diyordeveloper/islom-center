import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes/routes';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {AppHeader} from '../../components/Other/AppBar';
import {colors} from '../../theme';
import {NotificationDATA} from './data';

const Notifications = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView>
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
          headingText={true}
          headingTitle="Уведомления"
          headingTextStyle={style.titleStyle}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={NotificationDATA}
          numColumns={1}
          contentContainerStyle={{
            paddingBottom: 100,
            paddingTop: 0,
          }}
          // extraData={selectedId}
          // keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            // console.log({index});
            return (
              <View style={style.notificationContainer}>
                <Text style={style.notificationText}>{item.label}</Text>
                <View style={style.timeContainer}>
                  <Text style={style.timeText}>{item.time}</Text>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Notifications;

const style = StyleSheet.create({
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
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  notificationContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,

    elevation: 2,
  },

  timeContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 10,
  },

  notificationText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    lineHeight: 24,
  },

  timeText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray,
  },
});

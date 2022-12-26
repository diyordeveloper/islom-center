import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../../../components/Other/AppBar';
import {colors} from '../../../../../theme';
import {isIOS, windowHeight, windowWidth} from '../../../../../constants/size';
import {PersonalCardDATA} from './data';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../../../navigation/routes/routes';

const PersonalCard = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        leftArrowIcon={true}
        colorLeftArrow={colors.black}
        notificatAndDetailsIcons={true}
        notificationColor={colors.black}
        detailsColor={colors.black}
        detailsIcon={true}
        marginLeft={-35}
        //@ts-ignore
        onPressLeftArrow={() => navigation.goBack()}
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
        headingTitle="Сотрудники"
        headingTextStyle={style.titleStyle}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        {PersonalCardDATA.map((item, i) => {
          return (
            <View
              style={{
                paddingHorizontal: 20,
                width: windowWidth / 1,
                paddingVertical: 10,
              }}
              key={i}>
              <View style={style.cardContainer}>
                {item.image}
                <View style={style.titleContainer}>
                  <Text style={style.name}>{item.label}</Text>
                  <Text style={style.titleText}>{item.title}</Text>
                  <Text style={style.text}>{item.text}</Text>
                  <View style={style.phoneConatiner}>
                    <Text style={style.iconPhone}>{item.phoneIcon}</Text>
                    <Text style={style.phone}>{item.phone}</Text>
                  </View>
                  <View style={style.phoneConatiner}>
                    <Text style={style.iconPhone}>{item.emailIcon}</Text>
                    <Text style={style.phone}>{item.email}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PersonalCard;

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

  cardContainer: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.19,
    elevation: 2,
    marginBottom: 20,
    // width: windowWidth / 1,
    // backgroundColor: '#262626',
  },

  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  name: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.black,
    textAlign: 'left',
  },

  titleText: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.gray,
    paddingVertical: 10,
    textAlign: 'left',
    lineHeight: 33,
  },

  text: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.gray,
    paddingVertical: 10,
    textAlign: 'left',
    lineHeight: 33,
  },

  phoneConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 15,
  },

  iconPhone: {
    paddingLeft: 25,
  },

  phone: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    textAlign: 'left',
    lineHeight: 33,
  },

  // image: {
  //   height: windowHeight / 3,
  // },
});

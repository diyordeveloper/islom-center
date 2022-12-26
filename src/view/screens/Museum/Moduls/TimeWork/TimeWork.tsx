import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../../components/Other/AppBar';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import {colors} from '../../../../theme';
import {Routes} from '../../../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';
import {PhoneIcon, TimeIcon} from '../../../../assets/icons/icon';

const TimeWork = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 0}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        leftArrowIcon={true}
        colorLeftArrow={colors.black}
        notificatAndDetailsIcons={true}
        notificationColor={colors.black}
        detailsColor={colors.black}
        detailsIcon={true}
        marginLeft={-36}
        //@ts-ignore
        onPressLeftArrow={() => navigation.goBack()}
        headingText={true}
        headingTitle="Часы работы"
        headingTextStyle={style.titleStyle}
      />
      <View style={style.bodyContainer}>
        <View style={style.workTimeContainer}>
          <TimeIcon size={25} fillColor={colors.green} />
          <View style={style.timeContainer}>
            <Text style={style.dailyText}>Ежедневно: 10:00–17:00</Text>
            <Text style={style.lastText}>Последний вход: 16:00</Text>
          </View>
        </View>
        <Text style={style.callingText}>Связатся с нами</Text>
        <View style={style.callingContainer}>
          <PhoneIcon size={25} fillColor={colors.green} />
          <Text style={style.phoneOne}>+998 90 009 60 09</Text>
          <Text style={style.phoneTwo}>+998 99 818 14 16</Text>
        </View>
        <Text style={style.callingText}>Служба поддержки</Text>
        <View style={style.callingContainer}>
          <PhoneIcon size={25} fillColor={colors.green} />
          <Text style={[style.phoneOne, {marginRight: 25}]}>10010</Text>
          <PhoneIcon size={25} fillColor={colors.green} />
          <Text style={style.phoneOne}>10010</Text>
        </View>
      </View>
    </View>
  );
};

export default TimeWork;

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

  bodyContainer: {
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },

  workTimeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 35,
  },

  timeContainer: {
    height: 60,
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  dailyText: {
    fontSize: 19,
    fontWeight: '600',
    color: colors.black,
  },

  lastText: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.gray,
  },

  callingText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.green,
    marginTop: 35,
  },

  callingContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 35,
    width: windowWidth / 1,
  },

  phoneOne: {
    fontSize: 19,
    fontWeight: '600',
    color: colors.black,
    marginLeft: 15,
  },

  phoneTwo: {
    fontSize: 19,
    fontWeight: '600',
    color: colors.black,
    marginLeft: 43,
    marginTop: 20,
  },
});

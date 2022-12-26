import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppHeader} from '../../../../components/Other/AppBar';
import {MyPurchasesBookReadDATA} from './data';
import {isIOS, windowWidth} from '../../../../constants/size';
import {colors} from '../../../../theme';

const MyPurchasesBookRead = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        leftArrowIcon={true}
        colorLeftArrow={colors.black}
        titleText={true}
        titleTitle="QURAN MAJEED"
        titleTextStyle={style.titleStyle}
        labelText={true}
        labelTitle="Джоан Роулинг"
        labelTextStyle={style.labelStyle}
        saveIcon={true}
        saveColor={colors.black}
        //@ts-ignore
        onPressLeftArrow={() => navigation.goBack()}
        headingTextStyle={style.titleStyle}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.scrollContainer}>
        {MyPurchasesBookReadDATA.map((e, i) => {
          return (
            <View style={style.titleContainer} key={i}>
              <Text style={style.titleTextStyle}>{e.titleOne}</Text>
              <Text style={style.titleTextStyle}>{e.titleTwo}</Text>
              <Text style={style.titleTextStyle}>{e.titleThree}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={{height: 30}}></View>
    </View>
  );
};

export default MyPurchasesBookRead;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // backgroundColor: '#4574',
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor: colors.gray,
    width: windowWidth / 1,
    height: 60,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
  },

  labelStyle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.gray,
  },

  scrollContainer: {
    paddingHorizontal: 20,
  },

  titleContainer: {
    paddingVertical: 20,
  },

  titleTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
    paddingVertical: 15,
  },
});

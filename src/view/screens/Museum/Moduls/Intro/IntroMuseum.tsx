import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../../components/Other/AppBar';
import {colors} from '../../../../theme';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../../navigation/routes/routes';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import {IntroTextDATA} from './data';

const IntroMuseum = () => {
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
        marginLeft={-37}
        //@ts-ignore
        onPressLeftArrow={() => navigation.goBack()}
        headingText={true}
        headingTitle="Вход в музей"
        headingTextStyle={style.titleStyle}
      />
      <View style={style.bodyContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 200}}>
          <View>
            <Image
              source={require('../../../../assets/images/enterMuseum.png')}
              resizeMode="cover"
              style={{height: windowHeight / 4, width: '100%'}}
            />
            {IntroTextDATA.map((e, i) => {
              return (
                <View style={style.textContainer} key={i}>
                  {/* <View>{e.round}</View> */}
                  <View style={style.round}></View>
                  <Text style={style.text}>{e.title}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default IntroMuseum;

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
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  bodyContainer: {
    borderRadius: 10,
    paddingHorizontal: 20,
  },

  textContainer: {
    // flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 35,
    // borderWidth: 1,
    // height: windowHeight / 9,
  },

  round: {
    height: 8,
    width: 8,
    borderRadius: 15,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: colors.gray,
  },

  text: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.gray,
    paddingRight: 10,
  },
});

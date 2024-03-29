import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../../theme';
import {isIOS, windowHeight, windowWidth} from '../../../constants/size';
import {AppHeader} from '../../../components/Other/AppBar';
import {NewsContentDATA, SeeTimeDATA} from './data';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Routes} from '../../../../navigation/routes/routes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SeeIcon} from '../../../assets/icons/icon';
import {useLangContext} from '../../../../context/lang/LangContext';
import {TypeLangState} from '../../../../context/lang/TypeLang';
import moment from 'moment';
// @ts-ignore
const NewsRead = props => {
  const {language} = useLangContext() as TypeLangState;

  let navigation = useNavigation();
  const rout = useRoute().params;
  // @ts-ignore
  const item = rout.item;

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView>
        <ImageBackground
          // @ts-ignore
          source={{uri:`https://mamajanovs.uz/${item.image}`}}
          resizeMode="cover"
          style={{
            width: windowWidth / 1,
            height: 270,
          }}>
          <AppHeader
            containerStyle={style.containerStyle}
            leftArrowIcon={true}
            colorLeftArrow={colors.white}
            //@ts-ignore
            onPressLeftArrow={() => navigation.navigate(Routes.News)}
            headingText={true}
            headingTitle="      "
            headingTextStyle={style.titleStyle}
            shareIcon={true}
            shareColor={colors.white}
            //@ts-ignore
            // onPressShareIcon={}
          />
          {SeeTimeDATA.map((e, i) => {
            return (
              <View style={style.seeTimeDetails} key={i}>
                <Text style={style.timeText}>
                  {moment(item.created_at).format('hh:mm')}
                  {' - '}
                  {moment(item.created_at).format('DD.MM.YYYY')}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View>
                    <SeeIcon size={20} fillColor={colors.white} />
                  </View>
                  <Text style={style.numberSee}>{item.views}</Text>
                </View>
              </View>
            );
          })}
        </ImageBackground>
        <View style={{height: windowHeight / 2 + 110}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {NewsContentDATA.map((e, i) => {
              return (
                <View key={i}>
                  <View style={style.headingContainer}>
                    <View style={style.headingLine}></View>
                    <Text style={style.headingText}>
                      {JSON.parse(item.title)[language]}
                    </Text>
                  </View>
                  <View style={style.bodyTextContainer}>
                    <Text style={style.bodyText}>
                      {JSON.parse(item.description)[language]}
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NewsRead;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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

  seeTimeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 120,
  },

  timeText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.white,
  },

  numberSee: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.white,
    paddingLeft: 15,
  },

  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  headingLine: {
    height: 100,
    width: 5,
    backgroundColor: colors.green,
  },

  headingText: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.black,
    letterSpacing: 1,
    lineHeight: 28,
    marginLeft: 20,
  },

  bodyTextContainer: {
    paddingHorizontal: 20,
    paddingVertical: 35,
  },

  bodyText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
    lineHeight: 25,
  },
});

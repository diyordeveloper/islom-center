import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../../components/Other/AppBar';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import {colors} from '../../../../theme';
import {Routes} from '../../../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';
import {AboutMuseumDATA} from './data';

const AboutMuseum = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}>
          {AboutMuseumDATA.map((e, i) => {
            return (
              <View key={i}>
                <ImageBackground source={e.image} style={style.image}>
                  <AppHeader
                    containerStyle={style.containerStyle}
                    leftArrowIcon={true}
                    colorLeftArrow={colors.white}
                    notificatAndDetailsIcons={true}
                    notificationColor={colors.white}
                    detailsColor={colors.white}
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
                    headingTitle="О музее"
                    headingTextStyle={style.titleStyle}
                  />
                </ImageBackground>
                <View style={style.titleContainer}>
                  <Text style={style.titleText}>{e.title}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AboutMuseum;

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
    zIndex: 99,
  },

  titleStyle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },

  titleContainer: {
    width: windowWidth / 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  titleText: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.gray,
    lineHeight: 33,
  },

  image: {
    height: windowHeight / 3,
  },
});

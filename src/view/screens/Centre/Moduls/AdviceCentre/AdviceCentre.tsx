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
import {AdviceCentreDATA, AdviceCentreImageDATA} from './data';

const AdviceCentre = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}

      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}>
          {AdviceCentreImageDATA.map((e, i) => {
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
                    onPressLeftArrow={() => navigation.navigate(Routes.Centre)}
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
                    headingTitle="Попечительский совет"
                    headingTextStyle={style.titleStyle}
                  />
                </ImageBackground>
                {AdviceCentreDATA.map((e, i) => {
                  return (
                    <View style={style.titleContainer} key={i}>
                      <Text style={style.titleText}>
                        {e.id}
                        {'.  '}
                        {e.label} {'-  '}
                        {e.title}
                      </Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AdviceCentre;

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
    zIndex: 99,
  },

  titleStyle: {
    width: 170,
    textAlign: 'center',
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: windowWidth / 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // borderWidth: 1,
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

  name: {
    fontWeight: '600',
    color: colors.black,
  },
});

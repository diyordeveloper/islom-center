import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../../components/Other/AppBar';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import {colors} from '../../../../theme';
import {Routes} from '../../../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';
import {LocationIcon, LocationMenuIcon} from '../../../../assets/icons/icon';

const LocationMuseum = () => {
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
        headingTitle="Как добраться"
        headingTextStyle={style.titleStyle}
      />
      <View style={style.bodyContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 200}}>
          <View>
            <Image
              source={require('../../../../assets/images/karta.png')}
              resizeMode="cover"
              style={{height: windowHeight / 4, width: '100%'}}
            />
            <View style={style.locationTextContainer}>
              <LocationMenuIcon size={25} fillColor={colors.green} />
              <Text style={style.locationText}>
                Location of museumlocation of museumlocation of museumlocation
                of museum
              </Text>
            </View>
            <Text style={style.callingText}>Главный вход:</Text>
            <Text style={style.callText}>
              Location of museumlocation of museumlocation of museumlocation of
              museum
            </Text>
            <Text style={style.callingText}>Главный вход:</Text>
            <Text style={style.callText}>
              Location of museumlocation of museumlocation of museumlocation of
              museum
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default LocationMuseum;

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
    borderRadius: 10,
    paddingHorizontal: 20,
  },

  locationTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 35,
    marginBottom: 35,
  },

  locationText: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.gray,
    marginLeft: 10,
    paddingRight: windowHeight / 25,
  },

  callingText: {
    fontSize: 22,
    fontWeight: '700',
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

  callText: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.black,
    marginTop: 20,
    marginBottom: 35,
  },
});

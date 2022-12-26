import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../../components/Other/AppBar';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import {colors} from '../../../../theme';
import {Routes} from '../../../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';
import {PersonalDATA} from './data';

const Personal = () => {
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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={PersonalDATA}
        numColumns={1}
        contentContainerStyle={{
          paddingBottom: 100,
          // paddingTop: 40,
        }}
        // extraData={selectedId}
        // keyExtractor={(item) => item.id}
        renderItem={({item, index}) => {
          // console.log({index});
          return (
            <View
              style={[
                // (index + 1) % 2 == 0
                //   ? {
                //       marginTop: 0,
                //     }
                //   : {top: -50},
                {
                  paddingHorizontal: 20,
                  width: windowWidth / 1,
                  paddingVertical: 10,
                },
              ]}
              key={index}>
              <TouchableOpacity
                onPress={() => navigation.navigate(Routes.PersonalCard)}>
                <View style={style.cardContainer}>
                  {item.image}
                  <View style={style.titleContainer}>
                    <Text style={style.name}>{item.label}</Text>
                    <Text style={style.titleText}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Personal;

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

  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  cardContainer: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    borderRadius: 5,
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

  name: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.black,
    textAlign: 'center',
  },

  titleText: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.gray,
    paddingVertical: 10,
    textAlign: 'center',
    lineHeight: 33,
  },

  // image: {
  //   height: windowHeight / 3,
  // },
});

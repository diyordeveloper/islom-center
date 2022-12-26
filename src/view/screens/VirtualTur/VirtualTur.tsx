import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {VirtualTurImageDATA, VirtualTurTextDATA} from './data';
import {AppHeader} from '../../components/Other/AppBar';
import {colors} from '../../theme';
import {Routes} from '../../../navigation/routes/routes';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import ImageView from 'react-native-image-viewing';
import {Chapter} from '../home/components/chapter';

const VirtualTur = () => {
  let navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  // const images = [
  //   {
  //     uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  //   },
  //   {
  //     uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  //   },
  //   {
  //     uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  //   },
  // ];

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView>
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
          headingTitle="Виртуальный тур"
          headingTextStyle={style.titleStyle}
        />
        <View style={{height: windowHeight / 1 - 150}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 80}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/virtualTur.png')}
                resizeMode="cover"
                style={{
                  height: windowHeight / 4,
                  width: '90%',
                  borderRadius: 5,
                }}
              />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={style.imageView}>
                {VirtualTurImageDATA.map(e => {
                  return (
                    <>
                      <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={{paddingHorizontal: 10}}>
                        <Image
                          source={e}
                          // resizeMode="cover"
                          style={style.image}
                        />
                      </TouchableOpacity>
                    </>
                  );
                })}
              </View>
            </ScrollView>
            <Chapter chapter={true} chapterTitle="Виртуальный тур" />

            <View style={{paddingHorizontal: 20}}>
              {VirtualTurTextDATA.map(e => {
                return (
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '400',
                      color: colors.gray,
                      lineHeight: 23,
                    }}>
                    {e.text}
                  </Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <ImageView
          images={VirtualTurImageDATA}
          imageIndex={2}
          visible={visible}
          presentationStyle="fullScreen"
          onRequestClose={() => setVisible(false)}
        />
      </SafeAreaView>
    </View>
  );
};

export default VirtualTur;

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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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

  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },

  image: {
    borderRadius: 20,
    width: 170,
    height: 120,
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
    paddingVertical: 15,
    textAlign: 'left',
    lineHeight: 28,
  },

  // image: {
  //   height: windowHeight / 3,
  // },
});

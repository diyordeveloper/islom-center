import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../../theme';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import Button from '../../../../components/Button/button';
import {Routes} from '../../../../../navigation/routes/routes';
import {AppHeader} from '../../../../components/Other/AppBar';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const MyPurchasesBook = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView>
        <AppHeader
          containerStyle={style.containerStyle}
          leftArrowIcon={true}
          colorLeftArrow={colors.white}
          //@ts-ignore
          onPressLeftArrow={() => navigation.goBack()}
          headingTextStyle={style.titleStyle}
        />
        <View style={style.headerContainer}>
          <View style={style.bookContainer}>
            <View style={style.book}>
              <Text style={style.bookTitle}>AL-QURAN</Text>
              <Text style={style.bookName}>QURAN MAJEED</Text>
            </View>
            <View style={style.bookImage}>
              <Image
                source={require('../../../../assets/images/islamBook.png')}
                resizeMode="cover"
                style={style.image}
              />
            </View>
          </View>
        </View>
        <View style={style.textContainer}>
          <Text style={style.priceText}>Цена:</Text>
          <View style={style.priceContainer}>
            <Text style={style.price}>Куплено</Text>
          </View>
          <Text style={style.bookDescriptionName}>Lorem Ipsum</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          style={style.scrollContainer}>
          <View style={style.bookDiscription}>
            <Text style={style.discription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>

          <View style={style.btnContainer}>
            <Button
              containerStyle={{
                marginHorizontal: 20,
                marginTop: 20,
                height: 65,
                backgroundColor: colors.green,
              }}
              //@ts-ignore
              text="Скачать APK"
              textStyles={{
                color: colors.white,
                marginRight: 17,
                fontSize: 20,
                alignItems: 'center',
                fontWeight: isIOS ? '700' : '700',
                fontFamily: 'OpenSans-Regular',
              }}
            />
            <Button
              containerStyle={{
                marginHorizontal: 20,
                marginVertical: 20,
                height: 65,
                backgroundColor: colors.white,
                borderWidth: 2,
                borderColor: colors.green,
              }}
              //@ts-ignore
              onPress={() => navigation.navigate(Routes.MyPurchasesBookRead)}
              text="Читать"
              textStyles={{
                color: colors.green,
                marginRight: 17,
                fontSize: 20,
                alignItems: 'center',
                fontWeight: isIOS ? '700' : '700',
                fontFamily: 'OpenSans-Regular',
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MyPurchasesBook;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // backgroundColor: '#4574',
  },

  headerContainer: {
    backgroundColor: colors.green,
    // height: isIOS ? windowHeight / 4 + 10 : windowHeight / 4 - 10,
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.green,
    width: windowWidth / 1,
    height: 80,
    paddingHorizontal: 20,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  bookContainer: {
    backgroundColor: colors.green,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 20,
  },

  book: {
    marginBottom: -50,
  },

  bookImage: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.19,
    elevation: 2,
    marginBottom: -50,
    // zIndex: 2,
  },

  image: {
    borderRadius: 10,
    width: 150,
    height: 200,
    marginRight: 10,
  },

  bookTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.white,
  },

  bookName: {
    fontSize: 21,
    fontWeight: '700',
    color: colors.white,
    lineHeight: 35,
  },

  scrollContainer: {
    height: windowHeight / 2,
    // backgroundColor: '#000',
  },

  bookDiscription: {
    paddingHorizontal: 20,
  },

  textContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  priceText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
    lineHeight: 35,
    marginBottom: 10,
  },

  priceContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: -20,
    padding: 10,
  },

  price: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
    marginLeft: -20,
  },

  bookDescriptionName: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.black,
    marginVertical: 10,
    marginTop: 24,
  },

  discription: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.lingthGray,
    marginVertical: 20,
  },

  btnContainer: {
    // height: 100,
    paddingBottom: 100,
  },
});

import React, {useCallback, useState, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

//@ts-ignore
import intro_bg from '../../../assets/images/intro_bg-2.png';
import {colors} from '../../../theme';
import {AppHeader} from '../../../components/Other/AppBar';
import {isIOS, windowHeight, windowWidth} from '../../../constants/size';
import {useNavigation} from '@react-navigation/native';
import {MyPurchasesTourInnerDATA} from './data';
import Button from '../../../components/Button/button';
import ImageView from 'react-native-image-viewing';
import {TransactionSheet} from '../../../components/Other/BottomSheet';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {Routes} from '../../../../navigation/routes/routes';

const images = [
  {
    uri: 'file:///Users/macbook_k/Desktop/Project/MyProject/islam_centre/src/view/assets/images/tourItemImage.png',
  },
  {
    uri: 'file:///Users/macbook_k/Desktop/Project/MyProject/islam_centre/src/view/assets/images/tourItemImage.png',
  },
  {
    uri: 'file:///Users/macbook_k/Desktop/Project/MyProject/islam_centre/src/view/assets/images/tourItemImage.png',
  },
];

const MyPurchasesSheet = () => {
  let navigation = useNavigation();

  //image preview
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [snap, setSnap] = useState(0);

  // buttons visible
  const [scrollButton, setScrollButton] = useState(false);
  const [NotScrollButton, setNotScrollButton] = useState(false);

  //button margin
  const [takeIndex, setIndex] = useState(0);

  // save Button
  const [save, setSave] = useState(false);

  // ref
  // const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  // const snapPoints = useMemo(() => ['55%', '65', '87'], []);

  // callbacks

  const handleSheetChanges = useCallback(index => {
    if (index == 0) {
      setScrollButton(false);
      setNotScrollButton(true);
      // setIndex(1);
    } else if (index == 1) {
      setScrollButton(true);
      setNotScrollButton(false);
      setIndex(1);
    } else if (index == 2) {
      setScrollButton(true);
      setNotScrollButton(false);
      setIndex(2);
    }

    // console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={intro_bg}
          // resizeMode="cover"
          style={style.loginBG}>
          <AppHeader
            containerStyle={style.containerStyle}
            leftArrowIcon={true}
            colorLeftArrow={colors.white}
            //@ts-ignore
            onPressLeftArrow={() => navigation.goBack()}
            headingText={true}
            headingTitle="Мои покупки"
            headingTextStyle={style.titleStyle}
          />
          <TransactionSheet
            hideModal={() => {}}
            isVisible={isVisible}
            onSnap={handleSheetChanges}>
            <View style={{flex: 1}}>
              {MyPurchasesTourInnerDATA.map((e, i) => {
                return (
                  <View style={style.contentContainer} key={i}>
                    <View style={style.sheetHeading}>
                      <Text style={style.tiketName}>{e.label}</Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={style.price}>{e.price}</Text>
                        <Text style={style.currensy}>{e.currensy}</Text>
                      </View>
                    </View>
                    <View style={style.dataTimeContainer}>
                      <View style={style.date}>
                        <View>{e.calendarIcon}</View>
                        <Text style={style.dataText}>{e.date}</Text>
                      </View>
                      <View style={style.time}>
                        <View>{e.timeIcon}</View>
                        <Text style={style.timeText}>{e.time}</Text>
                      </View>
                    </View>
                    <View style={style.imageContainer}>
                      {e.image.map((e, i) => {
                        return (
                          <>
                            <TouchableOpacity
                              key={i}
                              onPress={() => setVisible(true)}>
                              <Image style={style.image} source={e.image} />
                            </TouchableOpacity>
                          </>
                        );
                      })}
                    </View>
                    <View
                      style={{
                        height: NotScrollButton
                          ? windowHeight / 4 + 50
                          : windowHeight / 1 - 360,
                      }}>
                      <BottomSheetScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={style.textContainer}>
                          <Text style={style.text}>{e.text}</Text>
                        </View>
                        {scrollButton && (
                          <View style={{marginBottom: 50}}>
                            <Button
                              containerStyle={style.buttonContainer}
                              onPress={() =>
                                //@ts-ignore
                                navigation.navigate(Routes.Purchase)
                              }
                              text="Купить"
                              textStyles={style.buttonText}
                            />
                            <Button
                              onPress={() => setSave(e => !e)}
                              containerStyle={[
                                style.buttonContainer,
                                {
                                  marginBottom:
                                    takeIndex == 1
                                      ? 250
                                      : 0 || takeIndex == 2
                                      ? 80
                                      : 0,
                                },
                              ]}
                              //@ts-ignore
                              // onPress={() => navigation.navigate('Welcome')}
                              text={
                                save ? 'Удалить из избранного' : 'В избранное'
                              }
                              textStyles={style.buttonText}
                            />
                          </View>
                        )}
                      </BottomSheetScrollView>
                    </View>
                  </View>
                );
              })}
            </View>
          </TransactionSheet>

          {NotScrollButton && (
            <View
              style={{paddingHorizontal: 20, backgroundColor: colors.white}}>
              <Button
                containerStyle={style.buttonContainer}
                //@ts-ignore
                onPress={() => navigation.navigate(Routes.Purchase)}
                text="Купить"
                textStyles={style.buttonText}
              />
              <Button
                onPress={() => setSave(e => !e)}
                containerStyle={[style.buttonContainer, {}]}
                //@ts-ignore
                // onPress={() => navigation.navigate('Welcome')}
                text={save ? 'Удалить из избранного' : 'В избранное'}
                textStyles={style.buttonText}
              />
            </View>
          )}
        </ImageBackground>

        <ImageView
          images={images}
          imageIndex={0}
          visible={visible}
          presentationStyle="fullScreen"
          onRequestClose={() => setVisible(false)}
        />
      </SafeAreaView>
    </View>
  );
};

export default MyPurchasesSheet;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: '#fff',
    width: windowWidth / 2 + 95,
    height: isIOS ? windowHeight / 8 - 50 : windowHeight / 8 - 50,
    paddingHorizontal: 30,
  },

  titleStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  loginBG: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  sheetHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },

  tiketName: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.black,
  },

  price: {
    fontSize: 23,
    fontWeight: '700',
    color: colors.black,
  },

  currensy: {
    fontSize: 23,
    fontWeight: '700',
    color: colors.black,
    paddingLeft: 8,
  },

  dataTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 95,
  },

  time: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
    marginLeft: 35,
  },

  dataText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
  },

  timeText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
    paddingBottom: 20,
  },

  image: {
    borderRadius: 5,
    width: 110,
    height: 100,
  },

  textContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },

  text: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
    lineHeight: 25,
    letterSpacing: 1,
  },

  buttonContainer: {
    backgroundColor: colors.green,
    width: windowWidth / 1 - 40,
    height: 65,
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 20,
    color: colors.white,
    letterSpacing: 1,
    marginRight: 20,
    alignItems: 'center',
    fontWeight: isIOS ? '700' : '700',
  },
});

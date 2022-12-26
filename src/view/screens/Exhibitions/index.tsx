import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes/routes';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {AppHeader} from '../../components/Other/AppBar';
import {Chapter} from '../home/components/chapter';
import {
  ArrowLeft,
  CalendarIcon,
  CoruselArrowLeft,
  CoruselArrowRight,
  LocationIcon,
} from '../../assets/icons/icon';
import SwiperFlatList from 'react-native-swiper-flatlist';

// import carusel_bg from '../../assets/images/homeTourCorusel.png';
import {colors} from '../../theme';
import Button from '../../components/Button/button';
import {Calendar} from 'react-native-calendars';

const DATA = new Array(31).map((e, i) => i + 1);
const ITEM_SIZE = 64;
const MARGIN = 20;

const imageData = [
  {
    image: require('../../assets/images/details_header_bg.png'),
    title: 'Тур в Lorem ipsum dolor',
    location: 'Lorem Ipsum',
  },
  {
    image: require('../../assets/images/details_header_bg.png'),
    title: 'Тур в Lorem ipsum dolor',
    location: 'Lorem Ipsum',
  },
  {
    image: require('../../assets/images/details_header_bg.png'),
    title: 'Тур в Lorem ipsum dolor',
    location: 'Lorem Ipsum',
  },
  {
    image: require('../../assets/images/details_header_bg.png'),
    title: 'Тур в Lorem ipsum dolor',
    location: 'Lorem Ipsum',
  },
  {
    image: require('../../assets/images/details_header_bg.png'),
    title: 'Тур в Lorem ipsum dolor',
    location: 'Lorem Ipsum',
  },
  {
    image: require('../../assets/images/details_header_bg.png'),
    title: 'Тур в Lorem ipsum dolor',
    location: 'Lorem Ipsum',
  },
];

const Exhibitions = () => {
  let navigation = useNavigation();

  // Calendar flatlist
  const _animatedFlatlist = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isCalendar, setIsCalendar] = useState(false);

  const onNext = () => {
    //@ts-ignore
    navigation.navigate(Routes.Exhibition);
  };

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 0}}></View> */}
      <SafeAreaView style={{flex: 1}}>
        <AppHeader
          containerStyle={style.containerStyle}
          logoIcon={true}
          notificatAndDetailsIcons={true}
          notificationColor={colors.black}
          detailsColor={colors.black}
          detailsIcon={true}
          //@ts-ignore
          onPressDetailsIcon={() =>
            //@ts-ignore
            navigation.openDrawer()
          }
          headingText={true}
          headingTitle="Выставки"
          headingTextStyle={style.titleStyle}
        />
        <Chapter
          chapter={true}
          chapterTitle="Ближайшие"
          titleStyle={{fontSize: 35, fontWeight: '600', letterSpacing: 1}}
          allChapter="  "
        />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              height: windowHeight / 2,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Animated.FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                marginTop: 30,
                paddingBottom: 80,
                marginLeft: 2,
                width: 90,
              }}
              data={DATA}
              onScroll={Animated.event([
                {nativeEvent: {contentOffset: {y: animatedValue}}},
              ])}
              snapToInterval={ITEM_SIZE + MARGIN}
              decelerationRate={'fast'}
              ListFooterComponent={() => {
                return (
                  <View
                    style={{
                      ...StyleSheet.absoluteFillObject,
                    }}>
                    {/* <Text>asdasdas</Text> */}
                  </View>
                );
              }}
              renderItem={({item, index}) => {
                const inputRange = [
                  -1,
                  0,
                  index * (ITEM_SIZE + MARGIN),
                  index * (ITEM_SIZE + MARGIN),
                ];

                let color = animatedValue.interpolate({
                  inputRange: inputRange,
                  outputRange: [
                    colors.gray,
                    colors.gray,
                    colors.gray,
                    colors.black,
                  ],
                });

                let margin = animatedValue.interpolate({
                  inputRange: inputRange,
                  outputRange: [
                    0, 0, 0, 8,
                    //  20,
                    // 20,
                  ],
                });

                return (
                  <Animated.View
                    style={{
                      borderRadius: 10,
                      justifyContent: 'center',
                      // alignItems: 'center',
                      // padding: 5,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.1,
                      shadowRadius: 2.22,

                      backgroundColor: colors.white,
                      width: 76,
                      height: ITEM_SIZE,
                      elevation: 3,
                      marginLeft: margin,
                      marginBottom: MARGIN,
                    }}>
                    <Animated.Text
                      style={{
                        color: color,
                        textAlign: 'center',
                        fontSize: 27,
                        fontWeight: '600',
                      }}>
                      {index}
                    </Animated.Text>
                    <Animated.Text
                      style={{
                        color: color,
                        fontSize: 17,
                        fontWeight: '400',
                        textAlign: 'center',
                      }}>
                      January
                    </Animated.Text>
                  </Animated.View>
                );
              }}
            />
            <TouchableOpacity
              onPress={() => setIsCalendar(true)}
              style={{
                marginTop: 15,
              }}>
              <CalendarIcon size={35} color={colors.green} />
              <Text
                style={{
                  paddingTop: 10,
                  color: colors.green,
                  fontSize: 18,
                  fontWeight: '400',
                }}>
                Выбрать
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginBottom: 200, marginHorizontal: 10}}>
              {imageData.map((e, i) => {
                return (
                  <View style={style.dataView} key={i}>
                    <TouchableOpacity onPress={onNext}>
                      <ImageBackground
                        imageStyle={{
                          borderRadius: 10,
                        }}
                        source={e.image}
                        style={style.content}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: '500',
                          }}>
                          {e.title}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: 5,
                          }}>
                          <LocationIcon fillColor="#848484" size={18} />
                          <Text
                            style={{
                              fontSize: 13,
                              color: '#8A8A8A',
                              fontWeight: '500',
                              marginHorizontal: 5,
                            }}>
                            {e.location}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
        {isCalendar && (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: colors.white,
                width: windowWidth / 1 - 50,
                paddingHorizontal: 20,
                // paddingVertical: 13,
                borderRadius: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: 213,
                  // borderWidth: 1,
                  paddingVertical: 16,
                }}>
                <TouchableOpacity onPress={() => setIsCalendar(false)}>
                  <ArrowLeft size={20} fillColor={colors.black} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    color: colors.black,
                  }}>
                  Календарь
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: colors.liteGray,
                  padding: 2,
                  borderRadius: 5,
                }}>
                <Calendar
                  // onDayPress={}
                  enableSwipeMonths={true}
                  firstDay={1}
                  theme={{
                    calendarBackground: colors.liteGray,
                    textSectionTitleColor: colors.black,
                    selectedDayBackgroundColor: colors.black,
                    selectedDayTextColor: colors.white,
                    todayTextColor: colors.black,
                    dayTextColor: colors.gray,
                    textDisabledColor: colors.liteGray,
                    arrowColor: colors.black,
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: colors.black,
                    textMonthFontSize: 18,
                    textDayHeaderFontSize: 15,
                    textDayFontSize: 15,
                    textMonthFontWeight: '600',
                    textDayHeaderFontWeight: '600',
                    textDayFontWeight: '600',
                  }}
                />
              </View>
              <Button
                containerStyle={{
                  // marginHorizontal: 20,
                  marginVertical: 20,
                  height: 50,
                  backgroundColor: colors.green,
                  // borderWidth: 2,
                  borderRadius: 5,
                  borderColor: colors.green,
                }}
                //@ts-ignore
                onPress={() => setIsCalendar(false)}
                text={'Выбрать'}
                textStyles={{
                  color: colors.white,
                  // marginRight: 17,
                  fontSize: 20,
                  alignItems: 'center',
                  fontWeight: isIOS ? '600' : '600',
                  // fontFamily: 'OpenSans-Regular',
                }}
              />
            </View>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Exhibitions;

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

  notificationContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,

    elevation: 2,
  },

  timeContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 10,
  },

  notificationText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.black,
    lineHeight: 24,
  },

  timeText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray,
  },

  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 90,
    paddingHorizontal: 20,
    // borderWidth: 1,
    // borderColor: colors.white,
  },

  content: {
    height: 150,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    width: windowWidth / 2 + 50,
  },
  dataView: {
    marginTop: 10,
    justifyContent: 'space-between',
  },

  label: {
    fontSize: 21,
    fontWeight: '500',
    color: colors.white,
    paddingBottom: 6,
  },

  tourTitle: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.lingthGray,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
});

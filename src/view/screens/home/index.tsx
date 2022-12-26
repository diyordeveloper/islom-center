import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  FlatList,
  StyleSheet,
  ImageBackground,
  NativeSyntheticEvent,
  TouchableNativeFeedback,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {style} from './style';
import {AppHeader} from '../../components/Other/AppBar';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes/routes';
import Card from '../../components/Card/card';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {
  ArrowLeft,
  CalendarIcon,
  ClockIcon,
  CoruselArrowLeft,
  CoruselArrowRight,
} from '../../assets/icons/icon';
import {CardDATA} from '../../components/Card/data';
import {ShopCoruselDATA} from '../../components/Corusel/shopData';
import {NewsCoruselDATA} from '../../components/Corusel/newsData';
import {Chapter} from './components/chapter';
import {HomeTourCoruselDATA} from './data';
import {Calendar, LocaleConfig} from 'react-native-calendars';

//@ts-ignore
import carusel_bg from '../../assets/images/homeTourCorusel.png';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Button from '../../components/Button/button';
import dayjs from 'dayjs';
import {useLangContext} from '../../../context/lang/LangContext';
import {useAllApiContext} from '../../../context/allapi/AllApiContext';
import {TypeAllApiState} from '../../../context/allapi/TypeAllApi';
import {TypeLangState} from '../../../context/lang/TypeLang';
import moment from 'moment';
const DATA = new Array(31).map((e, i) => i + 1);
const ITEM_SIZE = 64;
const MARGIN = 25;

LocaleConfig.locales['tr'] = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  monthNamesShort: [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июнь',
    'Июль',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ],
  today: 'Сегодня',
  dayNames: [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ],

  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
};
LocaleConfig.defaultLocale = 'tr';
// @ts-ignore
const Home = props => {
  let navigation = useNavigation();
  const {newPosts, catalogs} = useAllApiContext() as TypeAllApiState;
  const {language} = useLangContext() as TypeLangState;
  // Calendar Functions //

  function leadingZero(value: any) {
    if (value < 10) {
      return '0' + value.toString();
    }
    return value.toString();
  }

  let today = new Date();

  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  const [dateCurrent, setDateCurrent] = useState(
    yyyy + '-' + leadingZero(mm) + '-' + leadingZero(dd),
  );

  const onSellectDate = (day?: any) => {
    setDateCurrent(day.dateString);
  };

  const getDaysInMonth = (month?: any, year?: any) => {
    return new Array(31)
      .fill('')
      .map((v, i) => new Date(year, month - 1, i + 1))
      .filter(v => v.getMonth() === month - 1);
  };

  const [selectedDate, setSelectedDate] = useState(getDaysInMonth(mm, yyyy));

  // selectedDate.map(e => console.log(e.toLocaleDateString().substring(0, 2)));

  // Calendar END //

  // Scrolled Calendar Dates Functions //

  let months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  let monthName = months[today.getMonth()];

  // let dates;

  // let days = today.getDate();

  var dt = new Date();
  var month = dt.getMonth();
  var year = dt.getFullYear();
  let days = new Date(0).getDate();

  // Scrolled Calendar END //

  const news = ['NEWS', 'thistle', 'skyblue', 'teal'];
  const [index, setIndex] = useState(0);

  // Calendar flatlist
  const _animatedFlatlist = useRef<FlatList>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isCalendar, setIsCalendar] = useState(false);

  // Corusel

  const _flatListCalendarRef: any = useRef(null);

  const _flatListShopRef: any = useRef(null);

  const _flatListNewsRef: any = useRef(null);

  const onSelectDate = (node: number) => {
    setSelectedIndex(node);
  };

  useEffect(() => {
    console.log(selectedIndex);

    if (_animatedFlatlist.current) {
      _animatedFlatlist.current.scrollToIndex({
        animated: true,
        index: selectedIndex,
      });
      // setIndex(selectedIndex);
    }
  }, [selectedIndex]);

  return (
    <View style={style.container}>
      <SafeAreaView>
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
          onPressNotification={() =>
            //@ts-ignore
            navigation.navigate(Routes.NotificationsStack)
          }
          headingText={true}
          headingTitle="Главная"
          headingTextStyle={style.titleStyle}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: 430,
              flexDirection: 'row',
              paddingHorizontal: isIOS ? 18 : 15,
              // width: windowWidth / 1,
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                // borderWidth: 1,
              }}>
              <Animated.FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                  marginTop: 100,
                  paddingBottom: 80,
                  marginLeft: 2,
                  width: isIOS ? windowWidth / 4 - 5 : windowWidth / 4,
                  paddingLeft: 2,
                }}
                data={selectedDate}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: {y: animatedValue},
                      },
                    },
                  ],
                  {
                    useNativeDriver: false,
                    listener: (event: NativeSyntheticEvent<ScrollView>) =>
                      setSelectedIndex(
                        event.nativeEvent.contentOffset.y /
                          (ITEM_SIZE + MARGIN),
                      ),
                  },
                )}
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
                    <TouchableOpacity onPress={() => onSelectDate(index)}>
                      <Animated.View
                        style={{
                          borderRadius: 6,
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
                          width: 70,
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
                          {item.toLocaleDateString().substring(0, 2)}
                        </Animated.Text>

                        <Animated.Text
                          style={{
                            color: color,
                            fontSize: 17,
                            fontWeight: '400',
                            textAlign: 'center',
                          }}>
                          {monthName}
                        </Animated.Text>
                      </Animated.View>
                    </TouchableOpacity>
                  );
                }}
              />
              <TouchableOpacity
                style={{
                  marginTop: 15,
                }}
                onPress={() => setIsCalendar(true)}>
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
            <View style={style.calendarCorusel}>
              <SwiperFlatList
                ref={_flatListCalendarRef}
                // autoplay={false}
                // autoplayDelay={2}
                // autoplayLoop={false}
                // index={index}
                // showPagination
                // data={shop}
                style={{
                  borderRadius: 5,
                  // backgroundColor: colors.black,
                  borderWidth: isIOS ? 0.1 : 0.2,
                }}>
                {HomeTourCoruselDATA.map((e, i) => {
                  return (
                    <TouchableWithoutFeedback key={i.toString()}>
                      <View style={style.calendarContainer}>
                        <ImageBackground
                          source={carusel_bg}
                          // resizeMode="stretch"
                          style={{
                            width: windowWidth / 1 - 155,
                            height: isIOS
                              ? windowHeight / 2 + 20
                              : windowHeight / 2 + 30,
                            justifyContent: 'flex-end',
                            borderRadius: 6,
                            marginTop: -10,
                            paddingTop: 10,
                          }}>
                          <View style={style.titleContainer}>
                            <Text style={style.label}>{e.hintText}</Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                paddingVertical: 8,
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                }}>
                                {e.locationIcon}
                                <Text style={style.tourTitle}>{e.date}</Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  marginLeft: 20,
                                }}>
                                {e.dateIcon}
                                <Text style={style.tourTitle}>{e.time}</Text>
                              </View>
                            </View>
                          </View>
                        </ImageBackground>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </SwiperFlatList>
              <View style={style.calendarCoruselBtn}>
                <TouchableOpacity
                  style={style.left}
                  onPress={() => {
                    _flatListCalendarRef.current.scrollToIndex({
                      index:
                        _flatListCalendarRef.current.getCurrentIndex() > 0
                          ? _flatListCalendarRef.current.getCurrentIndex() - 1
                          : _flatListCalendarRef.current.goToLastIndex() == 0,
                      // index:_flatListRef.current.getCurrentIndex() - 1,
                      animated: true,
                    });
                  }}>
                  <CoruselArrowLeft size={16} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.right}
                  onPress={() => {
                    _flatListCalendarRef.current.scrollToIndex({
                      index:
                        _flatListCalendarRef.current.getCurrentIndex() <
                        ShopCoruselDATA.length - 1
                          ? _flatListCalendarRef.current.getCurrentIndex() + 1
                          : _flatListCalendarRef.current.goToFirstIndex() == 0,
                      animated: true,
                    });
                  }}>
                  <CoruselArrowRight size={16} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Chapter
            chapter={true}
            chapterTitle="Библиотека"
            // @ts-ignore
            onPress={() => navigation.navigate(Routes.LibraryStack)}
            allChapter="ВСЕ"
          />
          <View style={style.bookShopCorusel}>
            <SwiperFlatList
              ref={_flatListShopRef}
              autoplay={false}
              autoplayDelay={2}
              autoplayLoop={false}
              // index={1}
              // value={index}
              // onChangeIndex={setIndex}
              // showPagination
              // data={shop}
              style={{
                backgroundColor: colors.white,
                borderRadius: 5,
                // backgroundColor: colors.black,
                // borderWidth: isIOS ? 0.1 : 0.4,
                // padding: 5,
              }}>
              {catalogs.map((e: any, i: number) => {
                return (
                  <TouchableWithoutFeedback key={i.toString()}>
                    <View style={style.shopCoruselContainer}>
                      <View style={style.shopContent}>
                        <View>
                          <Image
                            source={{
                              uri: `https://mamajanovs.uz/images/${e.image}`,
                            }}
                            resizeMode="cover"
                            style={{width: 150, height: 200, borderRadius: 5}}
                          />
                        </View>
                        <View style={style.shopContentText}>
                          <Text style={style.shopHintTextStyle}>
                            QURAN MAJEED
                          </Text>
                          <Text style={style.shopTitleStyle}>
                            {JSON.parse(e.title)[language]}
                          </Text>
                        </View>
                      </View>
                      <View style={style.shopDescription}>
                        <Text style={style.shopLabel}>
                          {JSON.parse(e.author)[language]}
                        </Text>
                        <View style={style.shopPriceContainer}>
                          <Text style={style.shopPriceStyle}>
                            {e.price == 0 ? 'Бесплатно' : e.price}
                          </Text>
                          {e.price == 0 ? null : (
                            <Text style={style.shopCurrencyStyle}>{'cум'}</Text>
                          )}
                        </View>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </SwiperFlatList>
            <View style={style.bookShopCoruselBtn}>
              <TouchableOpacity
                style={style.left}
                onPress={() => {
                  _flatListShopRef.current.scrollToIndex({
                    index:
                      _flatListShopRef.current.getCurrentIndex() > 0
                        ? _flatListShopRef.current.getCurrentIndex() - 1
                        : _flatListShopRef.current.goToLastIndex() == 0,
                    // index:_flatListRef.current.getCurrentIndex() - 1,
                    animated: true,
                  });
                }}>
                <CoruselArrowLeft size={16} />
              </TouchableOpacity>
              <TouchableOpacity
                style={style.right}
                onPress={() => {
                  _flatListShopRef.current.scrollToIndex({
                    index:
                      _flatListShopRef.current.getCurrentIndex() <
                      ShopCoruselDATA.length - 1
                        ? _flatListShopRef.current.getCurrentIndex() + 1
                        : _flatListShopRef.current.goToFirstIndex() == 0,
                    animated: true,
                  });
                }}>
                <CoruselArrowRight size={16} />
              </TouchableOpacity>
            </View>
          </View>
          <Card />
          <Chapter
            chapter={true}
            chapterTitle="Новости"
            allChapter="ВСЕ"
            // @ts-ignore
            onPress={() => props.navigation.navigate(Routes.News)}
          />
          <View style={style.newsCorusel}>
            <SwiperFlatList
              ref={_flatListNewsRef}
              autoplay={false}
              autoplayDelay={2}
              autoplayLoop={false}
              // index={1}
              // value={index}
              // onChangeIndex={setIndex}
              // showPagination
              data={newPosts}
              style={{
                backgroundColor: colors.white,
                borderRadius: 5,
                // borderWidth: isIOS ? 0.1 : 0.2,
              }}>
              {newPosts.map((e: any, i: any) => {
                return (
                  <View style={style.newsCoruselContainer} key={i.toString()}>
                    <TouchableWithoutFeedback>
                      <View style={style.newsImage}>
                        <View>
                          <Image
                            source={{
                              uri: `https://mamajanovs.uz/${e.image}`,
                            }}
                            // resizeMode="cover"
                            style={{
                              width: '100%',
                              height: 220,
                              borderRadius: 5,
                            }}
                          />
                        </View>
                      </View>
                      <View style={style.newsDescription}>
                        <Text style={style.newsHintTextStyle}>
                          {`${JSON.parse(e.title)[language]?.substring(0, 60)}`}
                          {'...'}
                        </Text>
                        <Text style={style.newsLabel}>
                          {JSON.parse(e.description)[language]?.substring(
                            0,
                            120,
                          )}{' '}
                          {'...'}
                        </Text>
                        <View style={style.newsPriceContainer}>
                          <Text style={style.newsStatusIconStyle}>
                            <ClockIcon
                              size={20}
                              fillColor={colors.lingthGray}
                            />
                          </Text>
                          <Text style={style.newsCurrencyStyle}>
                            {moment(e.created_at).format('hh:mm')}
                            {' - '}
                            {moment(e.created_at).format('DD.MM.YYYY')}
                          </Text>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                );
              })}
            </SwiperFlatList>
            <View style={style.newsCoruselBtn}>
              <TouchableOpacity
                style={style.left}
                onPress={() => {
                  _flatListNewsRef.current.scrollToIndex({
                    index:
                      _flatListNewsRef.current.getCurrentIndex() > 0
                        ? _flatListNewsRef.current.getCurrentIndex() - 1
                        : _flatListNewsRef.current.goToLastIndex() == 0,
                    // index:_flatListRef.current.getCurrentIndex() - 1,
                    animated: true,
                  });
                }}>
                <CoruselArrowLeft size={16} />
              </TouchableOpacity>
              <TouchableOpacity
                style={style.right}
                onPress={() => {
                  _flatListNewsRef.current.scrollToIndex({
                    index:
                      _flatListNewsRef.current.getCurrentIndex() <
                      NewsCoruselDATA.length - 1
                        ? _flatListNewsRef.current.getCurrentIndex() + 1
                        : _flatListNewsRef.current.goToFirstIndex() == 0,
                    animated: true,
                  });
                }}>
                <CoruselArrowRight size={16} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

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
                  // markingType={'multi-dot'}
                  markingType="custom"
                  onDayPress={day => {
                    onSellectDate(day);
                    // console.log(dateCurrent);
                  }}
                  //YYYY-MM-DD
                  markedDates={{
                    [dateCurrent]: {
                      customStyles: {
                        container: {
                          backgroundColor: colors.black,
                          elevation: 2,
                        },
                        text: {
                          color: colors.white,
                        },
                      },
                    },
                  }}
                  enableSwipeMonths={true}
                  firstDay={1}
                  theme={{
                    // backgroundColor: ,
                    calendarBackground: colors.liteGray,
                    textSectionTitleColor: colors.black,
                    selectedDayBackgroundColor: colors.black,
                    selectedDayTextColor: colors.white,
                    todayTextColor: colors.black,
                    dayTextColor: colors.gray,
                    textDisabledColor: colors.liteGray,
                    // dotColor: '#00adf5',
                    // selectedDotColor: '#ffffff',
                    arrowColor: colors.black,
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: colors.black,
                    // indicatorColor: 'blue',
                    // textDayFontFamily: 'monospace',
                    // textMonthFontFamily: 'monospace',
                    // textDayHeaderFontFamily: 'monospace',
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

export default Home;

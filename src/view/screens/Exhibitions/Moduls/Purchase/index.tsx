import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppHeader} from '../../../../components/Other/AppBar';
import {colors} from '../../../../theme';
import {
  isAndroid,
  isIOS,
  windowHeight,
  windowWidth,
} from '../../../../constants/size';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../../components/Button/button';
import {
  CalendarIcon,
  ClockIcon,
  FavoriteIcon,
  MenusIcon,
  PlusIcon,
} from '../../../../assets/icons/icon';
import {Routes} from '../../../../../navigation/routes/routes';

const data = [
  {
    id: 1,
    image: (
      <Image
        source={require('../../../../assets/images/tourItemImage.png')}
        resizeMode="cover"
        // style={styles.tourItemImage}
      />
    ),

    iconFavorite: <FavoriteIcon size={17} color={colors.black} />,
    locationIcon: <CalendarIcon size={17} color={colors.black} />,
    dateIcon: <ClockIcon size={18} fillColor={colors.black} />,
    label: 'Lorem Ipsum 1',
    date: '9 март',
    time: '17:00',
    price: '50.000',
    currency: 'сум',
  },
];

const Purchase = () => {
  const navigation = useNavigation();

  const [activeLike, setActiveLike] = useState(false);

  const [quantity, setQuantity] = useState(0);

  let qtyPlus = () => {
    if (quantity >= 0) {
      setQuantity(quantity + 1);
    } else null;
  };

  let qtyMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else null;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <AppHeader
          containerStyle={styles.containerStyle}
          //   logoIcon={true}
          leftArrowIcon={true}
          colorLeftArrow={colors.black}
          //   notificatAndDetailsIcons={true}
          //   notificationColor={colors.black}
          detailsColor={colors.black}
          detailsIcon={true}
          detailsSingleIcon={true}
          onPressLeftArrow={() => navigation.goBack()}
          onPressDetailsIcon={() =>
            //@ts-ignore
            navigation.openDrawer()
          }
          //   onPressNotification={() =>
          //     //@ts-ignore
          //     navigation.navigate(Routes.NotificationsStack)
          //   }
          headingText={true}
          headingTitle="Покупка"
          headingTextStyle={styles.titleStyle}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((e, i) => {
            return (
              <View key={i} style={styles.cardContainer}>
                <TouchableOpacity style={styles.shadow}>
                  <View style={styles.card}>
                    {e.image}
                    <View style={styles.cardContent}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          width: windowWidth / 2 - 10,
                          paddingVertical: 8,
                        }}>
                        <View style={styles.titleContainer}>
                          <Text style={styles.label}>{e.label}</Text>
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
                              <Text style={styles.tourTitle}>{e.date}</Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                marginLeft: 20,
                              }}>
                              {e.dateIcon}
                              <Text style={styles.tourTitle}>{e.time}</Text>
                            </View>
                          </View>
                        </View>
                        <TouchableOpacity onPress={() => setActiveLike(true)}>
                          {e.iconFavorite}
                        </TouchableOpacity>
                      </View>
                      <View style={styles.priceContainer}>
                        <Text style={styles.price}>{e.price}</Text>
                        <Text style={styles.currency}>{e.currency}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '700',
              textAlign: 'center',
            }}>
            Выберите способ оплаты
          </Text>
          <TouchableOpacity>
            <View style={styles.cardBox}>
              <Image source={require('../../../../assets/images/click.png')} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '700',
              textAlign: 'center',
            }}>
            Количество билетов
          </Text>
          <View style={styles.input}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={qtyMinus}>
              <MenusIcon fillColor="#DBDBDB" size={16} />
            </TouchableOpacity>
            <TextInput
              value={quantity.toString()}
              style={{
                width: 100,
                height: 40,
                fontSize: 22,
                color: 'black',
                fontWeight: '700',
                textAlign: 'center',
                paddingVertical: 2,
                paddingHorizontal: 5,
              }}
              onChange={e =>
                setQuantity(
                  parseInt(!!e.nativeEvent.text ? e.nativeEvent.text : 0) !== 0
                    ? parseInt(e.nativeEvent.text)
                    : 0,
                )
              }
            />
            {/* <TextInput
              style={{
                width: 100,
                height: 40,
                fontSize: 22,
                color: 'black',
                fontWeight: '700',
                textAlign: 'center',
                paddingVertical: 2,
                paddingHorizontal: 5,
              }}
              placeholder="0"
              placeholderTextColor="#DBDBDB"
            /> */}
            <TouchableOpacity style={styles.touchableOpacity} onPress={qtyPlus}>
              <PlusIcon fillColor="#DBDBDB" size={16} />
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 30}}>
            <Button
              text="Выбрать"
              //@ts-ignore
              onPress={() => navigation.navigate(Routes.Checkout)}
              textStyles={styles.buttonText}
              containerStyle={styles.buttonContainer}
            />
            <Button
              onPress={() => navigation.goBack()}
              text={'Отменить'}
              textStyles={styles.buttonTextTwo}
              containerStyle={styles.buttonContainerTwo}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  tourItemImage: {
    height: '100%',
    width: 120,
    borderRadius: 10,
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth / 1,
    height: isIOS ? windowHeight / 8 - 20 : windowHeight / 8 - 30,
    paddingHorizontal: 20,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  cardContainer: {
    paddingHorizontal: 20,
  },

  card: {
    height: 150,
    windowWidth: windowWidth / 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  shadow: {
    marginVertical: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.19,
    elevation: 2,
  },

  cardContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: 18,
  },

  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  label: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.black,
  },

  tourTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.lingthGray,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 8,
  },

  price: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.black,
    paddingHorizontal: 5,
  },

  currency: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.black,
  },
  cardBox: {
    height: 160,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    marginHorizontal: 30,
    borderColor: '#27B17F',
    width: windowWidth - 60,
    justifyContent: 'center',
  },
  input: {
    height: 85,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 30,
    paddingHorizontal: 70,
    width: windowWidth - 60,
    backgroundColor: 'white',
    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.19,
    elevation: 2,
  },
  buttonContainer: {
    height: 65,
    marginBottom: 20,
    marginHorizontal: 30,
    width: windowWidth - 60,
    backgroundColor: colors.green,
  },
  buttonContainerTwo: {
    height: 65,
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 30,
    width: windowWidth - 60,
    borderColor: colors.green,
    backgroundColor: colors.white,
  },

  buttonText: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    fontWeight: isIOS ? '700' : '700',
  },
  buttonTextTwo: {
    fontSize: 20,
    color: colors.green,
    textAlign: 'center',
    fontWeight: isIOS ? '700' : '700',
  },
  touchableOpacity: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

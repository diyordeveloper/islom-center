import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, isIOS} from '../../constants/size';
import {colors} from '../../theme';

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
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
  },

  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: isIOS ? 90 : 100,
    paddingHorizontal: 20,
    // borderWidth: 1,
    // borderColor: colors.white,
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

  calendarContainer: {
    // paddingHorizontal: 20,
  },

  calendarCorusel: {
    width: windowWidth / 1 - 115,
    // height: windowHeight / 2 - 40,
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: '#000',
  },

  calendarCoruselBtn: {
    height: 40,
    width: windowWidth / 1 - 115,
    // marginVertical: 170,
    paddingHorizontal: 8,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bookShopCorusel: {
    paddingHorizontal: 20,
    // marginHorizontal: 20,
    // marginBottom: isIOS ? 160 : 140,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  childSlide: {
    width: windowWidth / 1 - 40,
    justifyContent: 'center',
    borderRadius: 5,
  },

  textSlide: {
    fontSize: 22,
    textAlign: 'center',
  },

  bookShopCoruselBtn: {
    height: 40,
    width: windowWidth / 1,
    // marginVertical: 170,
    paddingHorizontal: 8,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  left: {
    width: 30,
    height: 30,
    borderRadius: 50,
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.1,
    // borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.19,
    elevation: 2,
  },

  right: {
    width: 30,
    height: 30,
    borderRadius: 50,
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.1,
    // borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.19,
    elevation: 2,
  },

  shopCoruselContainer: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    // width: '100%',
    width: windowWidth / 1 - 50,
    // height: windowHeight / 2 - 40,
    paddingVertical: 25,
    paddingHorizontal: isIOS ? 25 : 25,
    borderRadius: 5,
    margin: 5,
    // borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.19,

    elevation: 2,
  },

  shopContent: {
    flexDirection: 'row',
    paddingHorizontal: 0,
  },

  shopContentText: {
    justifyContent: 'center',
    width: '50%',
    // borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },

  shopHintTextStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    lineHeight: 30,
    paddingVertical: 10,
  },

  shopTitleStyle: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1,
    color: colors.gray,
  },

  shopDescription: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // paddingVertical: 10,
    paddingTop: 25,
    // borderWidth: 1,
    // borderColor: '#000',
    width: '100%',
  },

  shopPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    algnItems: 'center',
    paddingTop: 45,
    // paddingVertical: 20,
  },

  shopLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.lingthGray,
  },

  shopPriceStyle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
    paddingHorizontal: 5,
  },

  shopCurrencyStyle: {
    fontSize: 25,
    fontWeight: '600',
    color: colors.black,
    // paddingHorizontal: 5,
  },

  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth / 1,
  },

  card: {
    height: windowHeight / 2,
    width: windowWidth / 2 + 150,
    borderRadius: 5,
    marginVertical: 20,
  },

  newsCorusel: {
    // width: windowWidth / 1 - 50,
    // height: windowHeight / 2 + 50,
    paddingHorizontal: 20,
    // marginHorizontal: 20,
    marginBottom: isIOS ? 160 : 140,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },

  newsCoruselBtn: {
    height: 40,
    width: windowWidth / 1,
    // marginVertical: 200,
    paddingHorizontal: 8,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  newsCoruselContainer: {
    flexDirection: 'column',
    // width: '100%',
    width: windowWidth / 1 - 50,
    // height: windowHeight / 2 + 50,
    // paddingVertical: 40,
    margin: 5,
    // borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.19,

    elevation: 2,
  },

  newsImage: {
    width: windowWidth / 1 - 50,
    // height: '50%',
    paddingHorizontal: 0,
    borderRadius: 5,
  },

  newsDescription: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 25,
    // borderWidth: 1,
    // borderColor: '#000',
    width: '100%',
  },

  newsHintTextStyle: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.black,
    lineHeight: 28,
    paddingVertical: 10,
  },

  newsLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.lingthGray,
    paddingVertical: 10,
  },

  newsPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    algnItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 5,
    // borderWidth: 1,
  },

  newsStatusIconStyle: {
    paddingHorizontal: 5,
  },

  newsCurrencyStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.lingthGray,
    // paddingHorizontal: 5,
  },
});

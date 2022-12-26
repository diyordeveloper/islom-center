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
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  toglleContainer: {
    // flex: 1,
    // top: 30,
    backgroundColor: colors.white,
    // height: windowHeight,
    // position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 30,
    zIndex: -1,
  },

  toglleBtn: {
    backgroundColor: colors.white,
    // borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.19,
    elevation: 6,
  },

  library: {
    width: windowWidth / 2 - 40,
    height: 134,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  libraryText: {
    fontSize: 19,
    fontWeight: '400',
    letterSpacing: 1.5,
    paddingTop: 10,
  },

  tours: {
    width: windowWidth / 2 - 40,
    height: 134,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  toursText: {
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 1.5,
    paddingTop: 10,
  },

  cardContainer: {
    // backgroundColor: '#000',
    paddingHorizontal: 20,
    // marginVertical: 30,
    // marginBottom: 130,
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

  libraryItemImage: {
    height: '100%',
    width: 100,
    borderRadius: 10,
  },

  tourItemImage: {
    height: '100%',
    width: 120,
    borderRadius: 10,
  },

  cardContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: 18,
    // paddingVertical: 10,
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

  title: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.lingthGray,
    paddingVertical: 6,
  },

  tourTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.lingthGray,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },

  likeIcon: {},

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
});

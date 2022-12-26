import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, isIOS} from '../../../../constants/size';
import {colors} from '../../../../theme';

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
    fontSize: 19,
    fontWeight: '700',
    color: colors.white,
    lineHeight: 35,
  },

  scrollContainer: {
    // height: 400,
    // backgroundColor: '#000',
  },

  bookDiscription: {
    // marginTop: -40,
    paddingHorizontal: 20,
    // backgroundColor: colors.white,
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
    fontSize: 19,
    fontWeight: '700',
    color: colors.white,
    // lineHeight: 35,
    // marginBottom: 15,
  },

  bookDescriptionName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginVertical: 10,
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

import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, isIOS} from '../../constants/size';
import {colors} from '../../theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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

  myBooksBtn: {
    // width: windowWidth / 1,
    // width: '100%',
    height: 110,
    marginHorizontal: 20,
    marginTop: isIOS ? 10 : 20,
    backgroundColor: colors.white,
    borderRadius: isIOS ? 10 : 5,
    // borderWidth: isIOS ? 0.2 : 0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.19,
    elevation: 3,
  },

  btn: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  myBooksText: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 50,
    color: colors.black,
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: colors.white,
    borderRadius: isIOS ? 5 : 3,
    // borderWidth: isIOS ? 0.2 : 0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.19,
    elevation: 3,
  },

  search: {
    height: 52,
    width: windowWidth / 1 - 100,
    // backgroundColor: colors.white,
    // paddingHorizontal: 20,
  },
  catalogsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    // backgroundColor: '#000',
    paddingHorizontal: 20,
    marginBottom: 20,
    // paddingVertical: 10,
    // marginVertical: 30,
    // marginBottom: 130,
  },
  productContainer: {
    // backgroundColor: '#000',
    paddingHorizontal: 20,
    // marginVertical: 30,
    // marginBottom: 130,
  },

  Product: {
    height: 170,
    width: 140,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    marginVertical: 45,
    marginBottom: 150,
    marginHorizontal: windowWidth / 80,
    borderRadius: 10,
    // backgroundColor: '#000',
  },

  productIconContainer: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // position: 'relative',
  },

  productImage: {
    borderRadius: 10,
    height: 200,
    width: 150,
  },

  btnLike: {
    height: 50,
    width: 50,
    marginTop: -29,
    // marginRight: -30,
    marginLeft: 115,
    backgroundColor: colors.white,
    borderRadius: 50,
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.19,
    elevation: 2,
  },

  productItem: {},

  productName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginTop: 13,
  },

  productTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.lingthGray,
    marginTop: 6,
  },

  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginTop: 10,
  },
});

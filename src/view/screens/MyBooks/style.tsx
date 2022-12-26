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

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: colors.white,
    borderRadius: isIOS ? 5 : 3,
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
  },


  myBooksContainer: {
    paddingHorizontal: 20,
  },

  myBooks: {
    height: 170,
    width: 140,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 45,
    marginBottom: 120,
    marginHorizontal: windowWidth / 80,
    borderRadius: 10,
    // backgroundColor: '#000',
  },

  myBooksIconContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  myBookImage: {
    borderRadius: 10,
    height: 200,
    width: 150,
  },

  btnLike: {
    height: 48,
    width: 48,
    marginTop: -23,
    marginLeft: 110,
    backgroundColor: colors.white,
    borderRadius: 50,
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

  myBooksItem: {
      width: '100%',
  },

  myBookName: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.black,
      marginTop: 13,
  },

  myBookTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.lingthGray,
    marginTop: 6,
  },

  myBookPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginTop: 10,
  },

  
});

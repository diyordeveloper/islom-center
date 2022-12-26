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

  newsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // marginHorizontal: 20,
    marginLeft: 40,
    marginRight: 20,
    marginVertical: 18,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 150,
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

  imageContainer: {
    top: -40,
    left: -40,
  },

  itemImage: {
    height: 150,
    width: 133,
    borderRadius: 10,
  },

  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    left: -40,
  },

  text: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.black,
    width: 185,
    lineHeight: 23,
  },

  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 180,
    marginTop: 40,
  },

  time: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray,
  },
});

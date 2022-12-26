import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, isIOS} from '../../constants/size';
import {colors} from '../../theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    // height: isIOS ? windowHeight / 5 + 50 : windowHeight / 5 + 20,
    // backgroundColor: '#0777',
    justifyContent: 'space-between',
  },

  introBG: {
    paddingHorizontal: isIOS ? 30 : 30,
    // paddingTop: isIOS ? 60 : 25,
    paddingBottom: isIOS ? 30 : 20,
    // justifyContent: 'space-between',
  },

  buttons: {
    // backgroundColor: '#000',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: isIOS ? 25 : 25,
    paddingBottom: 25,
  },

  exitBtn: {
    fontSize: 26,
    fontWeight: '600',
    // lineHeight: 35,
    // letterSpacing: 1,
    color: colors.white,
    // width: 220,
    // paddingHorizontal: 24,
  },

  userDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    // borderWidth: 1,
    // borderColor: '#000',
    // paddingVertical: 10,
  },

  userIcon: {
    width: 86,
    height: 86,
    backgroundColor: '#991',
    borderRadius: 50,
  },

  userName: {
    fontSize: 23,
    fontWeight: '600',
    lineHeight: 35,
    letterSpacing: 1,
    color: colors.white,
    width: 220,
    paddingHorizontal: 24,
  },

  body: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: isIOS ? 30 : 30,
    paddingVertical: isIOS ? 10 : 25,
  },

  tinyLogo: {
    position: 'absolute',
    marginTop: windowHeight / 2,
    marginLeft: windowWidth / 2,
  },

  socialNetworks: {
    // height: 10,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#000',
    marginVertical: isIOS ? 15 : 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  socialIcons: {
    // width: windowWidth / 1,
    justifyContent: 'flex-start',
    paddingHorizontal: isIOS ? 15 : 15,
    paddingVertical: isIOS ? 25 : 15,
  },
});

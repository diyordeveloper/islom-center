import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, isIOS} from '../../constants/size';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  introBG: {
    flex: 1,
    // width: windowWidth / 1,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inner: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  topBox: {
    height: isIOS ? windowHeight / 3 - 20 : windowHeight / 3 - 100,
    // backgroundColor: '#fff',
    justifyContent: 'center',
  },

  bottomBox: {
    height: isIOS ? windowHeight / 2 - 40 : windowHeight / 2 - 30,
    // backgroundColor: '#fff',
    justifyContent: 'space-between',
  },

  appLogo: {
    fontSize: 36,
    lineHeight: 100,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'OpenSans-Italic',
    fontWeight: '100',
    marginHorizontal: 50,
  },

  appName: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'OpenSans-Regular',
    fontWeight: isIOS ? '500' : '600',
    lineHeight: 55,
    color: '#fff',
    marginHorizontal: 50,
  },
});

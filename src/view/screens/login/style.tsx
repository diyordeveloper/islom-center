import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, isIOS} from '../../constants/size';
import {colors} from '../../theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  loginBG: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  inner: {
    height: isIOS ? windowHeight / 2 + 10 : windowHeight / 2 + 40,
    width: isIOS ? windowWidth / 1 : windowWidth / 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: isIOS ? 50 : 50,
    borderTopRightRadius: isIOS ? 50 : 50,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: '#fff',
    width: windowWidth / 2 + 60,
    height: isIOS ? windowHeight / 8 - 25 : windowHeight / 8 - 50,
    paddingHorizontal: 30,
    // borderWidth: 1,
    // borderColor: '#fff',
  },

  titleStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  bgIcon: {
    width: '100%',
    alignItems: 'flex-end',
    marginLeft: 61,
    marginRight: -61,
    position: 'absolute',
  },

  welcomeText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    lineHeight: 50,
  },

  phoneText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    lineHeight: 22,
    marginTop: 22,
    marginBottom: 14,
  },

  input: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000',
    letterSpacing: 1,
    padding: 15,
    height: 65,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.19,

    elevation: 4,
  },

  buttonContainer: {
    backgroundColor: colors.green,
    marginTop: 50,
    height: 65,
  },

  buttonText: {
    color: colors.white,
    fontSize: 18,
    marginRight: 16,
    alignItems: 'center',
    fontWeight: isIOS ? '700' : '700',
    fontFamily: 'OpenSans-Regular',
  },
  warning: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 25,
    marginBottom: -25,
    color: colors.red,
  }, 
});

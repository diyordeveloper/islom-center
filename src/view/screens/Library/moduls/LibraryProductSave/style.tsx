import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, isIOS} from '../../../../constants/size';
import {colors} from '../../../../theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // backgroundColor: '#4574',
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: colors.gray,
    width: windowWidth / 1,
    height: 85,
    paddingHorizontal: 20,
    // marginTop: 20,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  bodyContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: colors.white,
    paddingVertical: 20,
  },

  savedContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  savedText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
  },
});

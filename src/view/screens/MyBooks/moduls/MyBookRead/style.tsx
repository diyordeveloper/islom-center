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
    alignItems: 'flex-start',
    // backgroundColor: colors.gray,
    width: windowWidth / 1,
    height: 60,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  labelStyle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.gray,
  },

  scrollContainer: {
    paddingHorizontal: 20,
  },

  titleContainer: {
    paddingVertical: 30,
  },

  titleTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
    paddingVertical: 15,
  },
});

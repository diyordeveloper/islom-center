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
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
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
    // paddingTop: 10,
  },

  titleTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
    paddingVertical: 15,
  },

  view: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  select: {
    height: 3,
    borderRadius: 40,
    backgroundColor: colors.black,
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  markerContainer: {
    borderRadius: 40,
    width: 25,
    height: 25,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  track: {
    height: 3,
    borderRadius: 40,
    backgroundColor: colors.green,
  },
});

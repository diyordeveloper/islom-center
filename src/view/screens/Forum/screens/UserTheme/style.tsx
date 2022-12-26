import {StyleSheet} from 'react-native';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import {colors} from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    left: 15,
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
  line: {
    height: 70,
    borderWidth: 3,
    borderRadius: 20,
  },
  view: {
    marginHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewText: {
    fontSize: 19,
    color: 'black',
    fontWeight: '800',
    marginHorizontal: 20,
    width: windowWidth / 1.7,
  },
  text: {
    fontSize: 17,
    lineHeight: 26,
    color: '#929292',
    fontWeight: '400',
    marginVertical: 50,
    marginHorizontal: 30,
  },
  commit: {
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 20,
    marginHorizontal: 25,
  },
  input: {
    height: 160,
    paddingTop: 10,
    borderRadius: 10,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    width: windowWidth - 50,
    backgroundColor: '#F2F2F2',
    justifyContent: 'flex-start',
  },
  button: {
    height: 60,
    borderRadius: 10,
    marginBottom: 30,
    marginVertical: 20,
    alignItems: 'center',
    marginHorizontal: 25,
    justifyContent: 'center',
    width: windowWidth - 50,
    backgroundColor: '#27B17F',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
});

export default styles;

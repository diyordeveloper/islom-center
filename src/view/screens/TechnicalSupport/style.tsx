import {StyleSheet} from 'react-native';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth / 1,
    height: isIOS ? windowHeight / 8 - 20 : windowHeight / 8 - 30,
    paddingHorizontal: 20,
  },
  titleStyle: {
    left: 10,
    fontSize: 20,
    color: colors.black,
    fontWeight: '700',
  },
  box: {
    height: 84,
    borderRadius: 10,
    marginBottom: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    width: windowWidth - 40,
    backgroundColor: '#F9F9F9',
    justifyContent: 'space-between',
  },
  textBox: {
    justifyContent: 'space-between',
  },
  image: {
    top: 5,
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  title: {
    fontSize: 16,
    color: '#000',
    lineHeight: 20,
    fontWeight: '400',
    width: windowWidth / 1.4,
  },
  titleTime: {
    fontSize: 14,
    color: '#868686',
    fontWeight: '400',
  },
  input: {
    height: 52,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    width: windowWidth - 100,
    backgroundColor: '#F9F9F9',
  },
});

export default styles;

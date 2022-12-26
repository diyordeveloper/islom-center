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
    paddingHorizontal: 25,
  },

  titleStyle: {
    left: 15,
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  toglleContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  library: {
    height: 78,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth / 2.4 + 12,
  },

  libraryText: {
    fontSize: 19,
    fontWeight: '400',
    letterSpacing: 1.5,
    color: '#BBBBBB',
  },

  tours: {
    height: 78,
    borderLeftWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftColor: '#CFCFCF',
    width: windowWidth / 2.4 + 12,
  },

  toursText: {
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 1.5,
    color: '#BBBBBB',
  },
  inputBox: {
    height: 50,
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    width: windowWidth - 40,
    backgroundColor: 'white',
    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  input: {
    height: 50,
  },
  dataView: {
    // height: 155,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 15,
    paddingVertical: 25,
    paddingHorizontal: 15,
    flexDirection: 'row',
    marginHorizontal: 20,
    width: windowWidth - 40,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  dataImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  dataName: {
    fontSize: 18,
    marginBottom: 5,
    color: '#403B3B',
    fontWeight: '600',
  },
  dataTitle: {
    fontSize: 18,
    color: 'black',
    lineHeight: 24,
    marginTop: 8,
    fontWeight: '700',
    width: windowWidth / 2,
  },
  dataText: {
    fontSize: 14,
    color: '#BDBDBD',
    fontWeight: '600',
  },
});

export default styles;

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
  text: {
    fontSize: 19,
    color: '#AFAFAF',
    fontWeight: '600',
    marginVertical: 20,
    marginHorizontal: 30,
  },
  input: {
    height: 60,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    width: windowWidth - 60,
    backgroundColor: colors.white,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  inputBox: {
    // height: 260,
    paddingTop: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: windowWidth - 60,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  bigInput: {
    height: 260,
    marginBottom: 15,
    // borderWidth: 1,
  },
  button: {
    height: 60,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 30,
    alignItems: 'center',
    width: windowWidth - 60,
    justifyContent: 'center',
    backgroundColor: '#27B17F',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(1, 1, 1, 0.1)',
  },
  modalView: {
    height: 450,
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  modalImage: {
    width: 190,
    height: 190,
  },
  modalText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    marginVertical: 15,
    textAlign: 'center',
    width: windowWidth / 1.7,
  },
  modalButton: {
    height: 60,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 30,
    alignItems: 'center',
    width: windowWidth - 100,
    justifyContent: 'center',
    backgroundColor: '#27B17F',
  },
});

export default styles;

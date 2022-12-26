import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../../components/Other/AppBar';
import {colors} from '../../../../theme';
import {useNavigation} from '@react-navigation/native';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import Button from '../../../../components/Button/button';
import {Routes} from '../../../../../navigation/routes/routes';

const Checkout = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <AppHeader
          containerStyle={styles.containerStyle}
          leftArrowIcon={true}
          colorLeftArrow={colors.black}
          detailsColor={colors.black}
          detailsIcon={true}
          detailsSingleIcon={true}
          onPressLeftArrow={() => navigation.goBack()}
          onPressDetailsIcon={() =>
            //@ts-ignore
            navigation.openDrawer()
          }
          headingText={true}
          headingTitle="Покупка"
          headingTextStyle={styles.titleStyle}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity>
            <View style={styles.cardBox}>
              <Image source={require('../../../../assets/images/click.png')} />
            </View>
          </TouchableOpacity>
          <View style={styles.textBox}>
            <Text style={styles.text}>Сумма платежа:</Text>
            <Text style={styles.sum}>50.000 сум</Text>
          </View>
          <Text
            style={[styles.text, {marginHorizontal: 30, marginVertical: 30}]}>
            Данные покупателя
          </Text>
          <Text style={styles.inputText}>Имя</Text>
          <TextInput
            placeholder="Имя"
            style={styles.input}
            placeholderTextColor="#010122"
          />
          <Text style={styles.inputText}>Фамилия</Text>
          <TextInput
            placeholder="Фамилия"
            style={styles.input}
            placeholderTextColor="#010122"
          />
          <Text style={styles.inputText}>Телефон</Text>
          <TextInput
            placeholder="Телефон"
            style={styles.input}
            placeholderTextColor="#010122"
          />
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="#010122"
          />
          <View style={{marginVertical: 30}}>
            <Button
              text="Оплатить"
              onPress={() => {}}
              textStyles={styles.buttonText}
              containerStyle={styles.buttonContainer}
            />
            <Button
              //@ts-ignore
              onPress={() => navigation.goBack()}
              text={'Отменить'}
              textStyles={styles.buttonTextTwo}
              containerStyle={styles.buttonContainerTwo}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
  cardBox: {
    height: 160,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    marginHorizontal: 30,
    borderColor: 'rgba(16, 32, 70, 0.2)',
    width: windowWidth - 60,
    justifyContent: 'center',
  },
  textBox: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  sum: {
    top: 2,
    fontSize: 18,
    color: '#12BD80',
    fontWeight: '700',
    marginHorizontal: 20,
  },
  inputText: {
    fontSize: 17,
    color: 'black',
    fontWeight: '600',
    marginVertical: 20,
    marginHorizontal: 30,
  },
  input: {
    height: 60,
    color: 'black',
    borderRadius: 10,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    width: windowWidth - 60,
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.19,
    elevation: 2,
  },
  buttonContainer: {
    height: 65,
    marginBottom: 20,
    marginHorizontal: 30,
    width: windowWidth - 60,
    backgroundColor: colors.green,
  },
  buttonContainerTwo: {
    height: 65,
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 30,
    width: windowWidth - 60,
    borderColor: colors.green,
    backgroundColor: colors.white,
  },

  buttonText: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    fontWeight: isIOS ? '700' : '700',
  },
  buttonTextTwo: {
    fontSize: 20,
    color: colors.green,
    textAlign: 'center',
    fontWeight: isIOS ? '700' : '700',
  },
});

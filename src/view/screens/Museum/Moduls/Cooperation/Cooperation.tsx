import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  YellowBox,
} from 'react-native';
import React from 'react';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import {AppHeader} from '../../../../components/Other/AppBar';
import {colors} from '../../../../theme';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../../components/Button/button';
import {Routes} from '../../../../../navigation/routes/routes';

const Cooperation = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 0}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        leftArrowIcon={true}
        colorLeftArrow={colors.black}
        //@ts-ignore
        onPressLeftArrow={() => navigation.goBack()}
        headingTextStyle={style.titleStyle}
        headingText={true}
        headingTitle="Сотрудничество"
        detailsSingleIcon={true}
        onPressDetailsIcon={() => navigation.openDrawer()}
        detailsColor={colors.black}
      />

      <Text style={[style.inputHeadingText, {marginHorizontal: 20}]}>
        По поводу сотрудничества оставьте заявку
      </Text>

      <View style={style.scrolContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}>
          <View>
            <Text style={style.inputHeadingText}>Ваше имя</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="Рафаэль"
                placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Телефон</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="+99890"
                placeholderTextColor={colors.gray}
                keyboardType="number-pad"
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Почта</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="raphael@mail.ru"
                placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
          </View>

          <View>
            <Text style={style.inputHeadingText}>Тема обращения</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="Тема"
                placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
          </View>

          <View>
            <Text style={style.inputHeadingText}>Ваше сообщение</Text>
            <View style={style.inputBig}>
              <TextInput
                style={style.inputTextBig}
                multiline
                // numberOfLines={4}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="Текст"
                textAlignVertical="top"
                placeholderTextColor={colors.gray}
                keyboardType="default"
                // maxLength={40}
              />
            </View>
          </View>
          <View style={style.btnContainer}>
            <Button
              containerStyle={{
                // marginHorizontal: 20,
                marginTop: 35,
                height: 65,
                backgroundColor: colors.green,
              }}
              //@ts-ignore
              text="Отправить"
              textStyles={{
                color: colors.white,
                marginRight: 17,
                fontSize: 20,
                alignItems: 'center',
                fontWeight: isIOS ? '700' : '700',
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Cooperation;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // backgroundColor: '#4574',
  },

  headerContainer: {
    backgroundColor: colors.green,
    // height: isIOS ? windowHeight / 4 + 10 : windowHeight / 4 - 10,
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    // width: windowWidth / 2 + 65,
    height: 80,
    paddingHorizontal: 20,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  bookContainer: {
    backgroundColor: colors.green,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 20,
  },

  headingText: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.black,
    paddingHorizontal: 20,
  },

  scrolContainer: {
    flex: 1,
    marginHorizontal: 18,
    marginVertical: 15,
  },

  inputHeadingText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
    marginTop: 30,
    marginBottom: 20,
  },

  input: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginHorizontal: 2,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 2,
  },

  dropDown: {
    height: 50,
    width: '98%',
    marginLeft: -28,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    // borderRadius: 10,
    // marginHorizontal: 2,
    backgroundColor: colors.white,
  },

  openDrop: {
    height: isIOS ? windowHeight / 4 + 50 : windowHeight / 4 + 50,
    position: 'absolute',
    backgroundColor: colors.white,
  },

  inputBig: {
    height: 250,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginHorizontal: 2,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 4,
  },

  rowStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: colors.white,
    borderWidth: 0,
    height: 45,
    marginVertical: 10,
  },

  inputText: {
    fontSize: 17,
    fontWeight: '400',
    height: 50,
    width: '90%',
    color: colors.black,
    // borderWidth: 1,
    marginLeft: 22,
    letterSpacing: 1,
  },

  dropText: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.gray,
    textAlign: 'left',
    letterSpacing: 1,
  },

  dropDownText: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.black,
    textAlign: 'left',
    marginLeft: 30,
    letterSpacing: 1,
  },

  inputTextBig: {
    fontSize: 17,
    fontWeight: '400',
    height: '100%',
    width: '100%',
    color: colors.black,
    textAlign: 'justify',
    // borderWidth: 1,
    letterSpacing: 1,
  },

  btnContainer: {
    // height: 100,
    // paddingBottom: 10,
  },
});

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
import SelectDropdown from 'react-native-select-dropdown';
import {
  ResumeCountryCityDATA,
  ResumeFamilyStatusDATA,
  ResumeNationalityDATA,
  ResumeReferenceDATA,
} from './data';
import {DropDownIcon, SavegIcon} from '../../../../assets/icons/icon';
import {ANIMATION_DURATION} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../../components/Button/button';

const Resume = () => {
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
        headingTitle="Вакансии"
        detailsSingleIcon={true}
        onPressDetailsIcon={() => navigation.openDrawer()}
        detailsColor={colors.black}
      />

      <Text style={style.headingText}>Резюме</Text>

      <View style={style.scrolContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}>
          <View>
            <Text style={style.inputHeadingText}>
              Лавозимга талабномаларни кабул килиш
            </Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                // placeholder="Рафаэль"
                placeholderTextColor={colors.black}
                keyboardType="default"
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>ФИШ *</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="Фамилия Исм Отасини исми"
                placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Тугилган Кун *</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                // placeholder=""
                // placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Миллатингиз *</Text>

            <View
              style={{
                height: 70,
                width: '98%',
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
              }}>
              <SelectDropdown
                data={ResumeNationalityDATA}
                buttonStyle={style.dropDown}
                buttonTextStyle={[style.dropText]}
                defaultButtonText={' '}
                rowTextStyle={style.dropDownText}
                rowStyle={style.rowStyle}
                dropdownStyle={style.openDrop}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
              <DropDownIcon size={18} color={colors.black} />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Оилавий ахволингиз *</Text>
            <View
              style={{
                height: 70,
                width: '98%',
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
              }}>
              <SelectDropdown
                data={ResumeFamilyStatusDATA}
                buttonStyle={style.dropDown}
                buttonTextStyle={[style.dropText]}
                defaultButtonText={' '}
                rowTextStyle={style.dropDownText}
                rowStyle={style.rowStyle}
                dropdownStyle={style.openDrop}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
              <DropDownIcon size={18} color={colors.black} />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Яшаш манзилингиз *</Text>
            <View
              style={{
                height: 70,
                width: '98%',
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
              }}>
              <SelectDropdown
                data={ResumeCountryCityDATA}
                buttonStyle={style.dropDown}
                buttonTextStyle={[style.dropText]}
                defaultButtonText={'Вилоят'}
                rowTextStyle={style.dropDownText}
                rowStyle={style.rowStyle}
                dropdownStyle={style.openDrop}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
              <DropDownIcon size={18} color={colors.black} />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Туман ( Шахар ) *</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="Туман ( Шахар )"
                placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Манзил</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="Манзил"
                placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Телефон *</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="+99890"
                placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Электрон почта *</Text>
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
            <Text style={style.inputHeadingText}>СТИР ракаминзиз *</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="1123"
                placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Маълумотингиз *</Text>
            <View
              style={{
                height: 70,
                width: '98%',
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
              }}>
              <SelectDropdown
                data={ResumeReferenceDATA}
                buttonStyle={style.dropDown}
                buttonTextStyle={[style.dropText]}
                defaultButtonText={' '}
                rowTextStyle={style.dropDownText}
                rowStyle={style.rowStyle}
                dropdownStyle={style.openDrop}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
              <DropDownIcon size={18} color={colors.black} />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Мутахассислигингиз *</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                // placeholder=""
                // placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>
              Кайси таълим муассасасини тамомлагансиз *
            </Text>
            <View style={style.input}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="Таълим муассасасисини номи"
                placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
            <View style={[style.input, {marginTop: 35}]}>
              <TextInput
                style={style.inputText}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                placeholder="Йил"
                placeholderTextColor={colors.gray}
                keyboardType="default"
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>
              Ишга киришишдан мамнунмиз
            </Text>
            <View style={style.inputBig}>
              <TextInput
                style={style.inputTextBig}
                multiline
                // numberOfLines={4}
                //   onChangeText={onChangeName}
                //   value={Name}
                //   editable={editName}
                textAlignVertical="top"
                placeholder="Ушбу банд жуда мухим!"
                placeholderTextColor={colors.gray}
                keyboardType="default"
                // maxLength={40}
              />
            </View>
          </View>
          <View>
            <Text style={style.inputHeadingText}>Кушимча маълумотлар</Text>
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
              text="Файл жуйлаштириш"
              textStyles={{
                color: colors.white,
                marginRight: 17,
                fontSize: 20,
                alignItems: 'center',
                fontWeight: isIOS ? '700' : '700',
              }}
            />
            <Button
              containerStyle={{
                // marginHorizontal: 20,
                marginVertical: 20,
                height: 65,
                backgroundColor: colors.white,
                borderWidth: 2,
                borderColor: colors.green,
              }}
              //@ts-ignore
              // onPress={() => navigation.navigate(Routes.MyPurchasesBookRead)}
              text="Резюме юклаш"
              textStyles={{
                color: colors.green,
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

export default Resume;

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
    paddingBottom: 10,
  },
});

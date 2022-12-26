import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import {AppHeader} from '../../components/Other/AppBar';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {isIOS} from '../../constants/size';

// @ts-ignore
import userProfile_header_bg from '../../assets/images/userProfile_header_bg.png';
import {PencelIcon, PhoneIcon, ProfileIcon} from '../../assets/icons/icon';
import MaskInput from 'react-native-mask-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/Button/button';
import {TypeProfilState} from '../../../context/profil/TypeProfil';
import {useProfilContext} from '../../../context/profil/ProfilContext';
// @ts-ignore
const UserProfile = (props, index) => {
  // let {navigation} = props;
  let navigation = useNavigation();
  const {
    user,
    name,
    setName,
    surName,
    setSurName,
    UpdateUsers,
    userBoolean,
    setUserBoolean,
    submitDisable,
    visibleWarning,
    setVisibleWarning,
    visibleSendCode,
    setVisibleSendCode,
    reloadDisable,
    //
    timeOff,
    minutes,
    seconds,
    //
    PhoneNumberEdit,
    CodeEditSubmit,
    code,
    setCode,
    phoneEditNumber,
    setPhoneEditNumber,
    onPressRequestCode,
    IphoneNumberTogglePen,
    NameTogglePen,
    UserNameTogglePen,
  } = useProfilContext() as TypeProfilState;

  // const [code, onChangeCode] = useState('1117');

  let onSubmitCode = () => {
    if (code.length == 4 && code.toString() == '1117') {
      //@ts-ignore
      navigation.navigate(Routes.BottomNavigator);
      setVisibleWarning(false);
      setVisibleSendCode(false);
    } else {
      setVisibleWarning(true);
      setVisibleSendCode(false);
    }
    // console.warn(code);
  };

  // let onPressRequestCode = () => {
  //   setVisibleSendCode(true);
  //   setVisibleWarning(false);
  // };

  return (
    <KeyboardAvoidingView
      // showsVerticalScrollIndicator={false}
      behavior={isIOS ? 'padding' : 'height'}
      style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 0}}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={userProfile_header_bg}
          resizeMode="cover"
          style={style.serProfileBg}>
          <AppHeader
            containerStyle={style.containerStyle}
            logoIcon={true}
            notificatAndDetailsIcons={true}
            notificationColor={colors.white}
            detailsIcon={true}
            detailsColor={colors.white}
            //@ts-ignore
            onPressDetailsIcon={() => props.navigation.toggleDrawer()}
            onPressNotification={() =>
              //@ts-ignore
              navigation.navigate(Routes.NotificationsStack)
            }
            headingText={true}
            headingTitle="Профиль"
            headingTextStyle={style.titleStyle}
          />
        </ImageBackground>
        <View style={style.userContainer}>
          <TouchableOpacity
            style={{
              width: 130,
              height: 130,
              // backgroundColor: '#991',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/images/userImage.png')}
              resizeMode="cover"
              style={style.userImage}
              // style={{
              //   width: '100%',
              //   height: '100%',
              //   borderRadius: 50,
              // }}
            />
          </TouchableOpacity>
          <Text style={style.userFullName}>
            {`${
              user?.name == '' ? '... ...' : user?.name + ' ' + user?.surname
            }`}
          </Text>
        </View>
        <View style={style.profileContainer}>
          <View style={style.userInformationContainer}>
            <Text style={style.text}>Имя</Text>
            <View
              style={
                userBoolean.editName
                  ? style.inputContainerEditable
                  : style.inputContainer
              }>
              <ProfileIcon size={20} fillColor={colors.lingthGray} />
              <TextInput
                style={style.userName}
                maxLength={15}
                onChangeText={setName}
                defaultValue={name}
                editable={userBoolean.editName}
                placeholder="Имя..."
                placeholderTextColor={colors.black}
                keyboardType="default"
              />
              <TouchableOpacity
                style={
                  userBoolean.editPhone ? {display: 'none'} : style.pencelToggle
                }
                onPress={() => NameTogglePen()}>
                <PencelIcon size={20} fillColor={colors.lingthGray} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.userInformationContainer}>
            <Text style={style.text}>Фамилия</Text>
            <View
              style={
                userBoolean.editLastName
                  ? style.inputContainerEditable
                  : style.inputContainer
              }>
              <ProfileIcon size={20} fillColor={colors.lingthGray} />
              <TextInput
                style={style.userLastName}
                maxLength={15}
                onChangeText={setSurName}
                defaultValue={surName}
                // inlineImageRight={SearchIcon}
                editable={userBoolean.editLastName}
                placeholder="Фамилия..."
                placeholderTextColor={colors.black}
                keyboardType="default"
              />
              <TouchableOpacity
                style={
                  userBoolean.editPhone ? {display: 'none'} : style.pencelToggle
                }
                onPress={() => UserNameTogglePen()}>
                <PencelIcon size={20} fillColor={colors.lingthGray} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.userInformationContainer}>
            <Text style={style.text}>Телефон</Text>
            <View
              style={
                userBoolean.editPhone
                  ? style.inputContainerEditable
                  : style.inputContainer
              }>
              <PhoneIcon size={20} fillColor={colors.lingthGray} />

              <MaskInput
                mask={[
                  '+',
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                ]}
                value={phoneEditNumber}
                onChangeText={setPhoneEditNumber}
                editable={userBoolean.editPhone}
                keyboardType="phone-pad"
                placeholderTextColor="#000"
                style={style.userPhone}
              />
              <TouchableOpacity
                style={
                  userBoolean.editName || userBoolean.editLastName
                    ? {display: 'none'}
                    : style.pencelToggle
                }
                //@ts-ignore
                onPress={() => IphoneNumberTogglePen()}>
                <PencelIcon size={20} fillColor={colors.lingthGray} />
              </TouchableOpacity>
            </View>
          </View>
          {userBoolean.editName || userBoolean.editLastName ? (
            <Button
              containerStyle={{
                marginHorizontal: 20,
                marginVertical: 20,
                height: 65,
                backgroundColor: colors.green,
              }}
              //@ts-ignore
              // onPress={() => navigation.navigate('BottomNavigator')}
              onPress={() => UpdateUsers()}
              disabled={submitDisable.updateUsersBtn}
              text={submitDisable.updateUsersBtn ? 'Загрузка' : 'Подтвердить'}
              textStyles={{
                color: colors.white,
                marginRight: 17,
                fontSize: 20,
                alignItems: 'center',
                fontWeight: isIOS ? '700' : '700',
                fontFamily: 'OpenSans-Regular',
              }}
            />
          ) : null}
          {userBoolean.submitEditPhone ? (
            <View style={style.userInformationContainer}>
              <Text style={style.takeCodeText}>
                Чтобы сменить номер телефона вам нужно будет вести код
                отправленный на ваш номер
              </Text>
              <Button
                containerStyle={style.buttonContainer}
                // @ts-ignore
                onPress={() => PhoneNumberEdit()}
                disabled={submitDisable.zaprositCodeBtn}
                text={
                  submitDisable.zaprositCodeBtn ? 'Загрузка' : 'Запросить код'
                }
                textStyles={style.buttonText}
              />
            </View>
          ) : null}
          {userBoolean.takeCode ? (
            <View style={style.userInformationContainer}>
              <Text style={style.takeCodeText}>
                Чтобы сменить номер телефона вам нужно будет вести код
                отправленный на ваш номер
              </Text>
              <Text style={style.writeCode}>Введите код</Text>
              <View style={style.inputContainerEditable}>
                <MaskInput
                  mask={[/\d/, /\d/, /\d/, /\d/]}
                  // @ts-ignore
                  onChangeText={setCode}
                  value={code}
                  // editable={userBoolean.editLastName}
                  style={style.userLastName}
                  placeholderTextColor={colors.black}
                  keyboardType="number-pad"
                />
              </View>
              {visibleWarning ? (
                <Text style={style.warning}>Код введен не верно</Text>
              ) : null}
              {visibleSendCode ? (
                <Text
                  style={[style.reloadCodeText, {opacity: timeOff ? 0.2 : 1}]}>
                  Повторно можно запросить через: {minutes}:{seconds}
                </Text>
              ) : null}
              <Button
                containerStyle={style.buttonContainer}
                //@ts-ignore
                onPress={() => CodeEditSubmit()}
                disabled={submitDisable.updatePhoneBtn}
                text={submitDisable.updatePhoneBtn ? 'Загрузка' : 'Подтвердить'}
                textStyles={style.buttonText}
              />
              <TouchableOpacity onPress={onPressRequestCode}>
                {reloadDisable ? (
                  <Text style={style.takeCode}>Запросить код ещё раз</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
          <View
            style={{backgroundColor: '#fff', height: isIOS ? 100 : 80}}></View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserProfile;

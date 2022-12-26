import {Text, View, ImageBackground, KeyboardAvoidingView} from 'react-native';
import React, {useState, useContext} from 'react';
import {style} from './style';
import {ArrowRight, Pattern} from '../../assets/icons/icon';
import Button from '../../components/Button/button';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {colors} from '../../theme';
import {AppHeader} from '../../components/Other/AppBar';
import MaskInput from 'react-native-mask-input';

// image
import {useAuthContext} from '../../../context/auth/AuthContext';
import {TypeAuthState} from '../../../context/auth/TypeAuth';
// @ts-ignore
import intro_bg from '../../assets/images/intro_bg-2.png';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  let navigation = useNavigation();
  const {
    phone,
    setPhone,
    PhoneNumberSubmit,
    numberDisabled,
    visibleWarningNumber,
  } = useAuthContext() as TypeAuthState;

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'padding' : 'height'}
      style={style.container}>
      <View style={style.container}>
        <ImageBackground
          source={intro_bg}
          resizeMode="cover"
          style={style.loginBG}>
          <AppHeader
            // @ts-ignore
            onPressLeftArrow={() => navigation.navigate('Intro')}
            containerStyle={style.containerStyle}
            leftArrowIcon={true}
            colorLeftArrow={colors.white}
            headingText={true}
            headingTitle="Войти"
            headingTextStyle={style.titleStyle}
          />
          <View style={style.inner}>
            <View style={style.bgIcon}>
              <Pattern size={160} />
            </View>
            <View>
              <Text style={style.welcomeText}>ПРИВЕТСТВУЕМ ВАС!</Text>
              <Text style={style.phoneText}>Номер телефона</Text>
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
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholderTextColor="#000"
                style={style.input}
              />
              {visibleWarningNumber ? (
                <Text style={style.warning}>Заполнить поле</Text>
              ) : null}
              <Button
                disabled={numberDisabled}
                containerStyle={style.buttonContainer}
                //@ts-ignore
                onPress={PhoneNumberSubmit}
                // onPress={() => navigation.navigate('Welcome')}
                text={numberDisabled ? 'Загрузка' : 'Подтвердить'}
                textStyles={style.buttonText}
                Icon={ArrowRight}
                icon={colors.white}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

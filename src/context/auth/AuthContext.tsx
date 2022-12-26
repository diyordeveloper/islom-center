import RNRestart from 'react-native-restart';
import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {TypeAuth, TypeAuthState} from './TypeAuth';
// import axios from 'axios';
import {
  API_URL,
  code_url,
  code_url_2,
  phone_url,
  phone_url_2,
  Token,
  type,
} from './Url';
import {Routes} from '../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useProfilContext} from '../profil/ProfilContext';
import {TypeProfilState} from '../profil/TypeProfil';
import Toast from 'react-native-toast-message';

export const AuthCreateContext = createContext<TypeAuth | null>(null);

export const useAuthContext = () => {
  return useContext(AuthCreateContext);
};

export const AuthContext = ({children}:{children: ReactNode}) => {
  const navigation = useNavigation();
  const {user, ClearUser, setUser} = useProfilContext() as TypeProfilState;
  const [phon, setPhone] = useState<TypeAuthState | any>('998');
  const phone: any = phon.replace(/\D/gi, '');
  const [checkCode, setCheckCode] = useState<TypeAuthState | any>(Number);
  const [code, setCode] = useState<TypeAuthState | any>(Number);
  // Error State
  const [visibleWarningNumber, setVisibleWarningNumber] = useState(false);
  const [visibleWarningCode, setVisibleWarningCode] = useState(false);
  const [visibleSendCode, setVisibleSendCode] = useState(false);
  // Timer
  const time = 90;
  const getPadTime = (time: any) => time.toString().padStart(2, '0');
  const [timeLeft, setTimeLeft] = useState<TypeAuthState | any>(time);
  const [isCounting, setIsCounting] = useState<TypeAuthState | any>(false);
  const [timeOff, setTimeOff] = useState<TypeAuthState | any>(false);
  const [reloadDisable, setReloadDisable] = useState<TypeAuthState | any>(true);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);
  // Storage
  const [isToken, refreshToken] = useState(false);
  // Loader Button
  const [numberDisabled, setNumberDisabled] = useState<TypeAuthState | any>(
    false,
  );
  const [codeDisabled, setCodeDisabled] = useState<TypeAuthState | any>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimeLeft(timeLeft >= 1 ? timeLeft - 1 : 0);
    }, 1000);
    if (timeLeft === 0) {
      setIsCounting(false);
      setCheckCode('');
      setReloadDisable(true)
    }
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);

  async function PhoneNumberSubmit() {
    setNumberDisabled(true);
    const UrlPhoneNumber = `${API_URL}${phone_url}${phone}${phone_url_2}${Token}`;
    if (phone.length >= 12) {
      await axios
        .get(UrlPhoneNumber)
        .then(res => {
          setCheckCode(res.data);
          console.log(res.data + ' _________-____-________');
          setNumberDisabled(false);
        })
        .catch(err => {
          console.log('------Error___Phone-----' + err);
        });

      // @ts-ignore
      navigation.navigate(Routes.Welcome);
      setVisibleWarningNumber(false);
      setVisibleSendCode(true);
      setIsCounting(true);
      setReloadDisable(true);
    } else {
      setNumberDisabled(false);
      setVisibleWarningNumber(true);
    }
    setNumberDisabled(false);
  }
  async function CodeSubmit() {
    // const StandartPhone: any = phone.replace(/\D/gi, '');
    setCodeDisabled(true);
    const UrlCode = `${API_URL}${code_url}${phone}${code_url_2}${code}${type}`;
    if (checkCode == code && code.length === 4) {
      await axios
        .get(UrlCode)
        .then(res => {
          Toast.show({
            type: 'success',
            text1: 'Log In',
            text2: 'Muvaffaqqiyatli kirildi !',
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 10,
          });
          AsyncStorage.setItem('token', JSON.stringify(phone));
          console.log('---++++++-----++++++-----');
          console.log('---++++++-----++++++-----');
          const data = res.data[0];
          console.log(data);
          //@ts-ignore
          setUser(data);
          console.log('---++++++-----++++++-----');
          console.log('---++++++-----++++++-----');
          refreshToken(true);
          //@ts-ignore
          navigation.navigate(Routes.AuthStack);
        })
        .catch(err => console.log('------Error___Code-----' + err));
      setCodeDisabled(false);
      setTimeLeft(time);
      setIsCounting(false);
      setVisibleWarningCode(false);
      setVisibleSendCode(false);
      setReloadDisable(true);
      setCode('');
      checkCode('');
      setPhone('+ 998');
    } else {
      setCodeDisabled(false);
      setTimeLeft(time);
      setReloadDisable(true);
      setVisibleWarningCode(true);
      setVisibleSendCode(false);
      setCheckCode('');
    }
    setCodeDisabled(false);
  }
  let onPressRequestCode = async () => {
    const UrlPhoneNumber = `${API_URL}${phone_url}${phone}${phone_url_2}${Token}`;
    await axios
      .get(UrlPhoneNumber)
      .then(res => {
        setCheckCode(res.data);
        console.log(
          '_________-____-________ ' + res.data + ' _________-____-________',
        );
      })
      .catch(err => console.log('------Error___Code-----' + err));
    setReloadDisable(false);
    if (timeLeft === 0) {
      setTimeLeft(time);
    } else {
      setTimeLeft(time);
    }
    setIsCounting(true);
    setVisibleSendCode(true);
    setVisibleWarningCode(false);
    setCode('');
  };
  function ClearAllAuth() {
    //@ts-ignore
    navigation.navigate(Routes.Login);
    setTimeLeft(time);
    setIsCounting(false);
    setCode('');
    setCheckCode('');
    setVisibleWarningCode(false);
    setVisibleSendCode(false);
  }
  useEffect(() => {
    if (timeLeft === 0) {
      setCheckCode('');
      const interval = setInterval(() => {
        setTimeOff(!timeOff);
      }, 700);
      return () => {
        clearInterval(interval);
      };
    } else {
      setTimeOff(false);
    }
  }, [timeLeft, timeOff]);

  // Token-------------------------------------

  useEffect(() => {
    (async () => {
      const myToken = await AsyncStorage.getItem('token');
      refreshToken(!!myToken);
      console.log('my token - ' + myToken + ' .............');
    })();
  }, [AsyncStorage]);

  async function Logout() {
    console.log('logout clicked..........................................');
    console.log('language delete..........................................');
    await AsyncStorage.setItem('token', '');
    await AsyncStorage.setItem('lang', '');
    setPhone('+ 998');
    refreshToken(false);
    // @ts-ignore
    navigation.navigate(Routes.Intro);
    // RNRestart.Restart();
    // @ts-ignore
    ClearUser();
    Toast.show({
      type: 'success',
      text1: 'LogOut',
      text2: 'Accountdan chiqib ketildi',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 10,
    });
  }
  //------- Profil -------------------------------

  return (
    <AuthCreateContext.Provider
      value={{
        // state
        phone,
        code,
        visibleWarningCode,
        visibleSendCode,
        minutes,
        seconds,
        timeOff,
        reloadDisable,
        numberDisabled,
        codeDisabled,
        // setState
        setPhone,
        setCode,
        setVisibleWarningCode,
        setVisibleSendCode,
        visibleWarningNumber,
        // Functions
        PhoneNumberSubmit,
        CodeSubmit,
        onPressRequestCode,
        ClearAllAuth,
        Logout,
        isToken,
      }}>
      {children}
    </AuthCreateContext.Provider>
  );
};

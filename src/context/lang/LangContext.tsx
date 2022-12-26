import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {TypeLang, TypeLangState} from './TypeLang';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import {useTranslation} from 'react-i18next';
export const LangCreateContext = createContext<TypeLang | null>(null);
import RNLocalice from 'react-native-localize';

export const useLangContext = () => {
  return useContext(LangCreateContext);
};

export const LangContext = ({children}: {children: ReactNode}) => {
  const {t, i18n} = useTranslation();
  const countries = [
    {
      name: 'UZ',
      key: 'uz',
      label: 'Uzbek',
    },
    {
      name: 'RU',
      key: 'ru',
      label: 'Russian',
    },
    {
      name: 'EN',
      key: 'en',
      label: 'English',
    },
    {
      name: 'OZ',
      key: 'oz',
      label: 'Ozbek',
    },
    {
      name: 'AR',
      key: 'ar',
      label: 'Arab',
    },
  ];
  const langStorage: any = AsyncStorage.getItem('lang');
  const lang: any = 'uz';
  const [language, setLanguage] = useState<TypeLangState | any>(
    langStorage | lang,
  );

  const SwitchLanguage = (key: any) => {
    // @ts-ignore
    AsyncStorage.setItem('lang', key);
    console.log('Language-----');
    console.log(key);
    console.log(RNLocalice.getLocales()[0].languageCode);
    console.log('Language-----');
    i18n.changeLanguage(key);
    RNRestart.Restart();
  };
  useEffect(() => {
    (async () => {
      const myLang = await AsyncStorage.getItem('lang');
      //@ts-ignore
      setLanguage(myLang);
      console.log('Switch Language - ' + language);
    })();
  }, [AsyncStorage]);
  return (
    <LangCreateContext.Provider
      value={{
        language: language ?? 'uz',
        SwitchLanguage,
        countries,
      }}>
      {children}
    </LangCreateContext.Provider>
  );
};

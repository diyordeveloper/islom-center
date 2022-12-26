import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import English from './json/english.json';
import Russian from './json/russian.json';
import Ozbek from './json/ozbek.json';
import Uzbek from './json/uzbek.json';
import Arab from './json/arab.json';
import RNLocalice from 'react-native-localize';
import {initReactI18next} from 'react-i18next';

// const languageDetector = {
//   type: 'languageDetector',
//   async: true,
//   detect: (callback: any) => {
//     return callback(RNLocalice.getLocales()[0].languageCode);
//   },
//   init: () => {},
//   casheUserLanguage: () => {},
// };
const l: any = 'uz';
const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async (callback: any) => {
    const selectedLanguage = await AsyncStorage.getItem('lang');
    /** ... */
    callback(selectedLanguage ?? l);
  },
  cacheUserLanguage: () => {},
};
i18next
  // @ts-ignore
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: English,
      ru: Russian,
      ar: Arab,
      uz: Uzbek,
      oz: Ozbek,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;

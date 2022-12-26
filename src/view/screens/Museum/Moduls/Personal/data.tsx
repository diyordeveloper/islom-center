import React from 'react';
import {Image} from 'react-native';
import {windowHeight} from '../../../../constants/size';

import {colors} from '../../theme';
import {style} from './staffCentre';

export const PersonalDATA = [
  {
    id: 1,
    image: (
      <Image
        source={require('../../../../assets/images/diractor.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%'}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Миноваров Шоазим Шислоамович',
    title: 'Директор',
  },

  {
    id: 2,
    image: (
      <Image
        source={require('../../../../assets/images/diractor.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%'}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Миноваров Шоазим Шислоамович',
    title: 'Директор',
  },

  {
    id: 3,
    image: (
      <Image
        source={require('../../../../assets/images/diractor.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%'}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Миноваров Шоазим Шислоамович',
    title: 'Директор',
  },

  {
    id: 4,
    image: (
      <Image
        source={require('../../../../assets/images/diractor.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%'}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Миноваров Шоазим Шислоамович',
    title: 'Директор',
  },

  {
    id: 5,
    image: (
      <Image
        source={require('../../../../assets/images/diractor.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%'}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Миноваров Шоазим Шислоамович',
    title: 'Директор',
  },
];

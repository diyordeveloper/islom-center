import React from 'react';
import {Image} from 'react-native';
// import {LikeIcon} from '../../assets/icons/icon';

export const CardDATA = [
  {
    icon: (
      <Image
        source={require('../../assets/images/card_centre_image.png')}
        // resizeMode="cover"
        style={{width: '100%', height: '100%', borderRadius: 5}}
      />
    ),
    label: 'О Центре',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: (
      <Image
        source={require('../../assets/images/card_museum_image.png')}
        // resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        }}
      />
    ),
    label: 'О музее',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: (
      <Image
        source={require('../../assets/images/card_centre_image.png')}
        // resizeMode="cover"
        style={{width: '100%', height: '100%', borderRadius: 5}}
      />
    ),
    label: 'Виртуальный тур',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

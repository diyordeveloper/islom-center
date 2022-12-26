import React from 'react';
import {Image} from 'react-native';
import {colors} from '../../theme';
import {ClockIcon} from '../../assets/icons/icon';

export const NewsCoruselDATA = [
  {
    icon: (
      <Image
        source={require('../../assets/images/card_centre_image.png')}
        // resizeMode="cover"
        style={{width: '100%', height: 220, borderRadius: 5}}
      />
    ),
    hintText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    statusIcon: <ClockIcon size={20} fillColor={colors.lingthGray} />,
    status: 'час назад',
  },

  {
    icon: (
      <Image
        source={require('../../assets/images/card_centre_image.png')}
        // resizeMode="cover"
        style={{width: '100%', height: 220, borderRadius: 5}}
      />
    ),
    hintText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    statusIcon: <ClockIcon size={22} color={colors.lingthGray} />,
    status: 'час назад',
  },

  {
    icon: (
      <Image
        source={require('../../assets/images/card_centre_image.png')}
        // resizeMode="cover"
        style={{width: '100%', height: 220, borderRadius: 5}}
      />
    ),
    hintText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    statusIcon: <ClockIcon size={22} color={colors.lingthGray} />,
    status: 'час назад',
  },

  {
    icon: (
      <Image
        source={require('../../assets/images/card_centre_image.png')}
        // resizeMode="cover"
        style={{width: '100%', height: 220, borderRadius: 5}}
      />
    ),
    hintText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    statusIcon: <ClockIcon size={22} color={colors.lingthGray} />,
    status: 'час назад',
  },
];

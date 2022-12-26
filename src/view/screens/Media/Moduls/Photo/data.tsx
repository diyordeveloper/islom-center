import React from 'react';
import {Image} from 'react-native';
import {PlayIcon} from '../../../../assets/icons/icon';
import {windowHeight} from '../../../../constants/size';

export const PhotoDATA = [
  {
    id: 1,
    image: (
      <Image
        source={require('../../../../assets/images/media.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%'}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Lorem Ipsum',
  },

  {
    id: 2,
    image: (
      <Image
        source={require('../../../../assets/images/media.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%'}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Lorem Ipsum',
  },

  {
    id: 3,
    image: (
      <Image
        source={require('../../../../assets/images/media.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%'}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Lorem Ipsum',
  },

  {
    id: 4,
    image: (
      <Image
        source={require('../../../../assets/images/media.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%'}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Lorem Ipsum',
  },

  {
    id: 5,
    image: (
      <Image
        source={require('../../../../assets/images/media.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%'}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Lorem Ipsum',
  },
];

import React from 'react';
import {Image} from 'react-native';
import {windowHeight} from '../../../../constants/size';

export const DepartmentsDATA = [
  {
    id: 1,
    image: (
      <Image
        source={require('../../../../assets/images/aboutCentre.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%', borderRadius: 5}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Lorem impsum',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar aliquam tristique tristique senectus lorem',
  },

  {
    id: 2,
    image: (
      <Image
        source={require('../../../../assets/images/aboutCentre.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%', borderRadius: 5}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Lorem impsum',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar aliquam tristique tristique senectus lorem',
  },

  {
    id: 3,
    image: (
      <Image
        source={require('../../../../assets/images/aboutCentre.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%', borderRadius: 5}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Lorem impsum',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar aliquam tristique tristique senectus lorem',
  },

  {
    id: 4,
    image: (
      <Image
        source={require('../../../../assets/images/aboutCentre.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%', borderRadius: 5}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Lorem impsum',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar aliquam tristique tristique senectus lorem',
  },

  {
    id: 5,
    image: (
      <Image
        source={require('../../../../assets/images/aboutCentre.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%', borderRadius: 5}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Lorem impsum',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar aliquam tristique tristique senectus lorem',
  },
];

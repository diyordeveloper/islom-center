import React from 'react';
import {Image} from 'react-native';
import {CalendarIcon, ClockIcon} from '../../../../assets/icons/icon';
import {colors} from '../../../../theme';
import {style} from './TourSheet';

export const FavoriteTourInnerDATA = [
  {
    image: [
      {
        image: require('../../../../assets/images/tourItemImage.png'),
      },
      {
        image: require('../../../../assets/images/tourItemImage.png'),
      },
      {
        image: require('../../../../assets/images/tourItemImage.png'),
      },
    ],
    id: 1,

    // imageOne: (
    //   <Image
    //     source={require('../../../assets/images/tourItemImage.png')}
    //     resizeMode="cover"
    //     style={style.image}
    //   />
    // ),

    // imageTwo: (
    //   <Image
    //     source={require('../../../assets/images/tourItemImage.png')}
    //     resizeMode="cover"
    //     style={style.image}
    //   />
    // ),

    // imageTree: (
    //   <Image
    //     source={require('../../../assets/images/tourItemImage.png')}
    //     resizeMode="cover"
    //     style={style.image}
    //   />
    // ),

    calendarIcon: <CalendarIcon size={20} color={colors.black} />,
    timeIcon: (
      <ClockIcon size={22} fillColor={colors.black} color={colors.white} />
    ),
    label: 'Lorem Ipsum',
    price: '50.000',
    currensy: 'сум',
    // title: 'Lorem Ipsum',
    date: '9 март',
    time: '17:00',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

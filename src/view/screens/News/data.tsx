import React from 'react';
import {Image} from 'react-native';
import {FavoriteIcon} from '../../assets/icons/icon';
import {colors} from '../../theme';
import {style} from './style';

export const NewsDATA = [
  {
    id: 1,
    image: (
      <Image
        source={require('../../assets/images/tourItemImage.png')}
        resizeMode="cover"
        style={style.itemImage}
      />
    ),

    iconFavorite: (
      <FavoriteIcon size={18} color={colors.white} fillColor={colors.black} />
    ),
    label: 'Lorem ipsum dolor sitamet, consectetur ',
    // title: 'Lorem Ipsum',
    // date: '9 март',
    time: '2 часа назад',
  },

  {
    id: 2,
    image: (
      <Image
        source={require('../../assets/images/tourItemImage.png')}
        resizeMode="cover"
        style={style.itemImage}
      />
    ),

    iconFavorite: (
      <FavoriteIcon size={18} color={colors.white} fillColor={colors.black} />
    ),
    label: 'Lorem ipsum dolor sitamet, consectetur ',
    // title: 'Lorem Ipsum',
    // date: '9 март',
    time: '2 часа назад',
  },

  {
    id: 3,
    image: (
      <Image
        source={require('../../assets/images/tourItemImage.png')}
        resizeMode="cover"
        style={style.itemImage}
      />
    ),

    iconFavorite: (
      <FavoriteIcon size={18} color={colors.white} fillColor={colors.black} />
    ),
    label: 'Lorem ipsum dolor sitamet, consectetur ',
    // title: 'Lorem Ipsum',
    // date: '9 март',
    time: '2 часа назад',
  },

  {
    id: 4,
    image: (
      <Image
        source={require('../../assets/images/tourItemImage.png')}
        resizeMode="cover"
        style={style.itemImage}
      />
    ),

    iconFavorite: (
      <FavoriteIcon size={18} color={colors.white} fillColor={colors.black} />
    ),
    label: 'Lorem ipsum dolor sitamet, consectetur ',
    // title: 'Lorem Ipsum',
    // date: '9 март',
    time: '2 часа назад',
  },

  {
    id: 5,
    image: (
      <Image
        source={require('../../assets/images/tourItemImage.png')}
        resizeMode="cover"
        style={style.itemImage}
      />
    ),

    iconFavorite: (
      <FavoriteIcon size={18} color={colors.white} fillColor={colors.black} />
    ),
    label: 'Lorem ipsum dolor sitamet, consectetur ',
    // title: 'Lorem Ipsum',
    // date: '9 март',
    time: '2 часа назад',
  },
];

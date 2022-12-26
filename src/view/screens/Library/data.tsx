import React from 'react';
import {Image} from 'react-native';
import {LikeSave} from '../../assets/icons/icon';
import {colors} from '../../theme';
import {style} from './style';

export const LibraryDATA = [
  {
    id: 1,
    image: (
      <Image
        source={require('../../assets/images/islamBook.png')}
        resizeMode="cover"
        style={style.productImage}
      />
    ),

    iconLike: (
      <LikeSave size={25} fillColor={colors.white} color={colors.green} />
    ),
    label: 'QURAN MAJEED',
    title: 'AL QURAN',
    price: 'Бесплатно',
  },

  {
    id: 2,
    image: (
      <Image
        source={require('../../assets/images/islamBook.png')}
        resizeMode="cover"
        style={style.productImage}
      />
    ),

    iconLike: (
      <LikeSave size={25} fillColor={colors.white} color={colors.green} />
    ),
    label: 'QURAN MAJEED',
    title: 'AL QURAN',
    price: 'Бесплатно',
  },

  {
    id: 3,
    image: (
      <Image
        source={require('../../assets/images/islamBook.png')}
        resizeMode="cover"
        style={style.productImage}
      />
    ),

    iconLike: (
      <LikeSave size={25} fillColor={colors.white} color={colors.green} />
    ),
    label: 'QURAN MAJEED',
    title: 'AL QURAN',
    price: 'Бесплатно',
  },

  {
    id: 4,
    image: (
      <Image
        source={require('../../assets/images/islamBook.png')}
        resizeMode="cover"
        style={style.productImage}
      />
    ),

    iconLike: (
      <LikeSave size={25} fillColor={colors.white} color={colors.green} />
    ),
    label: 'QURAN MAJEED',
    title: 'AL QURAN',
    price: 'Бесплатно',
  },
];

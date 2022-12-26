import React from 'react';
import {Image} from 'react-native';
import {
  CalendarIcon,
  ClockIcon,
  FavoriteIcon,
  LikeSave,
  LocationIcon,
} from '../../assets/icons/icon';
import {colors} from '../../theme';
import {style} from './style';

export const DATE = [{}, {}];

export const MyPurchasesLibraryDATA = [
  {
    id: 1,
    dateFilter: '27 марта 2022',
    image: (
      <Image
        source={require('../../assets/images/islamBook.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={22} fillColor={colors.black} />,
    label: 'Lorem Ipsum 1',
    title: 'Lorem Ipsum',
    price: 'Куплено',

    // currency: 'сум',
  },

  {
    id: 2,
    image: (
      <Image
        source={require('../../assets/images/islamBook.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={20} fillColor={colors.black} />,
    label: 'Lorem Ipsum 2',
    title: 'Lorem Ipsum',
    price: 'Куплено',
    // currency: 'сум',
  },

  {
    id: 3,
    dateFilter: '20 марта 2022',
    image: (
      <Image
        source={require('../../assets/images/islamBook.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={20} fillColor={colors.black} />,
    label: 'Lorem Ipsum 3',
    title: 'Lorem Ipsum',
    price: 'Куплено',
    // currency: 'сум',
  },

  {
    id: 4,
    image: (
      <Image
        source={require('../../assets/images/islamBook.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={20} fillColor={colors.black} />,
    label: 'Lorem Ipsum 4',
    title: 'Lorem Ipsum',
    price: 'Куплено',
    // currency: 'сум',
  },

  {
    id: 5,
    image: (
      <Image
        source={require('../../assets/images/islamBook.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={20} fillColor={colors.black} />,
    label: 'Lorem Ipsum 5',
    title: 'Lorem Ipsum',
    price: 'Куплено',
    // currency: 'сум',
  },

  {
    id: 6,
    image: (
      <Image
        source={require('../../assets/images/islamBook.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={20} fillColor={colors.black} />,
    label: 'Lorem Ipsum 6',
    title: 'Lorem Ipsum',
    price: 'Куплено',
    // currency: 'сум',
  },
];

export const MyPurchasesTourDATA = [
  {
    id: 1,
    dateFilter: '27 марта 2022',
    image: (
      <Image
        source={require('../../assets/images/tourItemImage.png')}
        resizeMode="cover"
        style={style.tourItemImage}
      />
    ),

    iconFavorite: <FavoriteIcon size={17} color={colors.black} />,
    locationIcon: <CalendarIcon size={17} color={colors.black} />,
    dateIcon: <ClockIcon size={18} fillColor={colors.black} />,
    label: 'Lorem Ipsum 1',
    // title: 'Lorem Ipsum',
    date: '9 март',
    time: '17:00',
    price: 'Куплено',
    quantity: '2',
    unit: ' шт',
    // currency: 'сум',
  },

  {
    id: 2,
    image: (
      <Image
        source={require('../../assets/images/tourItemImage.png')}
        resizeMode="cover"
        style={style.tourItemImage}
      />
    ),

    iconFavorite: <FavoriteIcon size={17} color={colors.black} />,
    locationIcon: <CalendarIcon size={17} color={colors.black} />,
    dateIcon: <ClockIcon size={18} fillColor={colors.black} />,
    label: 'Lorem Ipsu 2',
    // title: 'Lorem Ipsum',
    date: '9 март',
    time: '17:00',
    price: 'Куплено',
    quantity: '2',
    unit: ' шт',
    // currency: 'сум',
  },

  {
    id: 3,
    image: (
      <Image
        source={require('../../assets/images/tourItemImage.png')}
        resizeMode="cover"
        style={style.tourItemImage}
      />
    ),

    iconFavorite: <FavoriteIcon size={17} color={colors.black} />,
    locationIcon: <CalendarIcon size={17} color={colors.black} />,
    dateIcon: <ClockIcon size={18} fillColor={colors.black} />,
    label: 'Lorem Ipsum 3',
    // title: 'Lorem Ipsum',
    date: '9 март',
    time: '17:00',
    price: 'Куплено',
    quantity: '2',
    unit: ' шт',
    // currency: 'сум',
  },

  {
    id: 4,
    dateFilter: '22 марта 2022',
    image: (
      <Image
        source={require('../../assets/images/tourItemImage.png')}
        resizeMode="cover"
        style={style.tourItemImage}
      />
    ),

    iconFavorite: <FavoriteIcon size={17} color={colors.black} />,
    locationIcon: <CalendarIcon size={17} color={colors.black} />,
    dateIcon: <ClockIcon size={18} fillColor={colors.black} />,
    label: 'Lorem Ipsum 4',
    // title: 'Lorem Ipsum',
    date: '9 март',
    time: '17:00',
    price: 'Куплено',
    quantity: '2',
    unit: ' шт',
    // currency: 'сум',
  },

  {
    id: 5,
    image: (
      <Image
        source={require('../../assets/images/tourItemImage.png')}
        resizeMode="cover"
        style={style.tourItemImage}
      />
    ),

    iconFavorite: <FavoriteIcon size={17} color={colors.black} />,
    locationIcon: <CalendarIcon size={17} color={colors.black} />,
    dateIcon: <ClockIcon size={18} fillColor={colors.black} />,
    label: 'Lorem Ipsum 5',
    // title: 'Lorem Ipsum',
    date: '9 март',
    time: '17:00',
    price: 'Куплено',
    quantity: '2',
    unit: ' шт',
    // currency: 'сум',
  },
];

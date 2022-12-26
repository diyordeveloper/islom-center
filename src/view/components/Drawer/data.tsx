import React from 'react';
import {
  NotificationIcon,
  BookIcon,
  TourIcon,
  BlogIcon,
  ForumIcon,
  SignOutIcon,
  FacebookIcon,
  TelegrammIcon,
  InstagramIcon,
  HomeIcon,
  FavoriteIcon,
} from '../../assets/icons/icon';
export const DrawerDATA = [
  {
    icon: <HomeIcon size={30} fillColor="#000" />,
    title: 'Главная',
  },
  {
    icon: <NotificationIcon size={30} />,
    title: 'Уведомления',
  },
  {
    icon: <FavoriteIcon size={30} />,
    title: 'Избранное',
  },
  {
    icon: <BookIcon size={30} />,
    title: 'Библиотека',
  },
  {
    icon: <TourIcon size={30} />,
    title: 'Туры',
  },
  {
    icon: <BlogIcon size={30} />,
    title: 'Блог',
  },
  {
    icon: <ForumIcon size={30} />,
    title: 'Форум',
  },
  {
    icon: <SignOutIcon size={30} />,
    title: 'Выход',
  },
];

export const SocialDATA = [
  {
    icon: <FacebookIcon size={30} />,
  },

  {
    icon: <TelegrammIcon size={30} />,
  },

  {
    icon: <InstagramIcon size={30} />,
  },
];

import React from 'react';
import {Image} from 'react-native';
import {EmailIcon, PhoneIcon} from '../../../../../assets/icons/icon';
import {windowHeight} from '../../../../../constants/size';
import {colors} from '../../../../../theme';

import {style} from './staffCentre';

export const PersonalCardDATA = [
  {
    id: 1,
    image: (
      <Image
        source={require('../../../../../assets/images/diractor.png')}
        resizeMode="cover"
        style={{height: windowHeight / 4, width: '100%'}}
      />
    ),
    // image: require('../../../../assets/images/aboutCentre.png'),

    label: 'Миноваров Шоазим Шислоамович',
    title: 'Директор',

    text: 'Миноваров Шоазим Шоисламович Ўзбекистон Республикаси Бош вазирининг 17.07.2017 йлдаги 505-сонли қарори билан Ўзбекистон Республикаси Вазирлар Маҳкамаси ҳузуридаги Ўзбекистондаги Ислом маданияти маркази директори лавозимига тайинланган.',
    phoneIcon: <PhoneIcon size={25} fillColor={colors.green} />,
    phone: '+9987 777 77 77',
    emailIcon: <EmailIcon size={28} fillColor={colors.green} />,
    email: 'info@cisc.uz',
  },
];

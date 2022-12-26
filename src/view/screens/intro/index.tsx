import {Text, View, ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './style';
import {windowWidth, windowHeight, isIOS} from '../../constants/size';
import Button from '../../components/Button/button';
import {ArrowRight, GerbUZB} from '../../assets/icons/icon';
import {useNavigation} from '@react-navigation/native';
// image
// @ts-ignore
import intro_bg from '../../assets/images/intro_bg-2.png';
import {colors} from '../../theme';
import {Routes} from '../../../navigation/routes/routes';

const Intro = () => {
  let navigation = useNavigation();

  return (
    // <View style={style.container}>
    <ImageBackground
      source={intro_bg}
      // resizeMode="cover"
      style={style.introBG}>
      <View style={style.inner}>
        <View style={style.topBox}>
          <Image
            source={require('../../assets/images/Logo.png')}
            resizeMode="cover"
            style={{width: 115, height: 113}}
          />
        </View>

        <View style={style.bottomBox}>
          <Text style={style.appName}>
            ЦЕНТР ИСЛАМСКОЙ ЦИВИЛИЗАЦИИ В УЗБЕКИСТАНЕ
          </Text>
          <Button
            containerStyle={{
              marginHorizontal: 20,
              marginVertical: 20,
              height: 65,
            }}
            //@ts-ignore
            onPress={() => navigation.navigate(Routes.Login)}
            text="Авторизоваться"
            textStyles={{
              fontSize: 18,
              color: '#000',
              marginRight: 17,
              alignItems: 'center',
              fontWeight: isIOS ? '700' : '700',
              fontFamily: 'OpenSans-Regular',
            }}
            Icon={ArrowRight}
            //@ts-ignore
            icon={colors.black}
          />
        </View>
      </View>
    </ImageBackground>
    // </View>
  );
};

export default Intro;

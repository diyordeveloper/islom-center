import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {style} from './style';
import {AppHeader} from '../../../../components/Other/AppBar';
import {isIOS} from '../../../../constants/size';
import {colors} from '../../../../theme';
import {LikeSave} from '../../../../assets/icons/icon';
import Button from '../../../../components/Button/button';

const LibraryProductSave = () => {
  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        logoIcon={true}
        notificatAndDetailsIcons={true}
        notificationColor={colors.black}
        detailsColor={colors.black}
        detailsIcon={true}
        //@ts-ignore
        // onPressDetailsIcon={() => navigation.navigate('Details')}
        headingText={true}
        headingTitle="Библиотека"
        headingTextStyle={style.titleStyle}
      />
      <View style={style.bodyContainer}>
        <View style={style.savedContent}>
          <LikeSave size={150} color={colors.green} />
          <Text style={style.savedText}>Добавлено в избранное</Text>
        </View>
        <View style={style.btnContainer}>
          <Button
            containerStyle={{
              marginHorizontal: 20,
              marginVertical: 20,
              height: 65,
              backgroundColor: colors.green,
            }}
            //@ts-ignore
            // onPress={() => navigation.navigate(Routes.LibraryProductRead)}
            text="Посмотреть"
            textStyles={{
              color: colors.white,
              marginRight: 17,
              fontSize: 20,
              alignItems: 'center',
              fontWeight: isIOS ? '700' : '700',
              fontFamily: 'OpenSans-Regular',
            }}
          />
          <Button
            containerStyle={{
              marginHorizontal: 20,
              marginVertical: 20,
              height: 65,
              backgroundColor: colors.white,
              borderWidth: 2,
              borderColor: colors.green,
            }}
            //@ts-ignore
            // onPress={() => navigation.navigate(Routes.LibraryProductSave)}
            text="Удалить"
            textStyles={{
              color: colors.gray,
              marginRight: 17,
              fontSize: 20,
              alignItems: 'center',
              fontWeight: isIOS ? '700' : '700',
              fontFamily: 'OpenSans-Regular',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default LibraryProductSave;

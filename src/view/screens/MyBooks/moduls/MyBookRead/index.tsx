import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../theme';
import {AppHeader} from '../../../../components/Other/AppBar';
import {style} from './style';
import {Routes} from '../../../../../navigation/routes/routes';
import {isIOS} from '../../../../constants/size';
import {useNavigation} from '@react-navigation/native';
import {MyBookReadDATA} from './data';

const MyBookRead = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        leftArrowIcon={true}
        colorLeftArrow={colors.black}
        titleText={true}
        titleTitle="Гарри Поттер"
        titleTextStyle={style.titleStyle}
        labelText={true}
        labelTitle="Джоан Роулинг"
        labelTextStyle={style.labelStyle}
        saveIcon={true}
        saveColor={colors.black}
        //@ts-ignore
        onPressLeftArrow={() => navigation.navigate(Routes.MyBook)}
        headingTextStyle={style.titleStyle}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.scrollContainer}>
        {MyBookReadDATA.map((e, i) => {
          return (
            <View style={style.titleContainer} key={i}>
              <Text style={style.titleTextStyle}>{e.titleOne}</Text>
              <Text style={style.titleTextStyle}>{e.titleTwo}</Text>
              <Text style={style.titleTextStyle}>{e.titleThree}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={{height: 80}}></View>
    </View>
  );
};

export default MyBookRead;

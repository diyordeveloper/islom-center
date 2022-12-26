import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import {AppHeader} from '../../../../components/Other/AppBar';
import {isIOS, windowHeight} from '../../../../constants/size';
import {colors} from '../../../../theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Routes} from '../../../../../navigation/routes/routes';
import Button from '../../../../components/Button/button';
import {TypeAllApiState} from '../../../../../context/allapi/TypeAllApi';
import {TypeLangState} from '../../../../../context/lang/TypeLang';
import {useAllApiContext} from '../../../../../context/allapi/AllApiContext';
import {useLangContext} from '../../../../../context/lang/LangContext';

const LibraryProduct = () => {
  const {catalogs} = useAllApiContext() as TypeAllApiState;
  const {language} = useLangContext() as TypeLangState;
  let navigation = useNavigation();

  const [save, setSave] = useState(false);
  const rout = useRoute().params;
  // @ts-ignore
  const item = rout.item;
  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView>
        <AppHeader
          containerStyle={style.containerStyle}
          leftArrowIcon={true}
          colorLeftArrow={colors.white}
          //@ts-ignore
          onPressLeftArrow={() => navigation.navigate(Routes.Library)}
          headingTextStyle={style.titleStyle}
        />
        <View style={style.headerContainer}>
          <View style={style.bookContainer}>
            <View style={style.book}>
              <Text style={style.bookTitle}>AL-QURAN</Text>
              <Text style={style.bookName}>QURAN MAJEED</Text>
            </View>
            <View style={style.bookImage}>
              <Image
                source={{
                  uri: `https://mamajanovs.uz/images/${item.image}`,
                }}
                resizeMode="cover"
                style={style.image}
              />
            </View>
          </View>
        </View>
        <View style={style.textContainer}>
          {item.price == 0 ? (
            <View style={style.priceContainer}>
              <Text style={style.price}>Бесплатно</Text>
            </View>
          ) : (
            <Text style={style.priceText}>Цена: {item.price}</Text>
          )}
          <Text style={style.bookDescriptionName}>
            {JSON.parse(item.title)[language]}
          </Text>
        </View>
        <View style={{height: windowHeight / 2}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 60}}
            style={style.scrollContainer}>
            <View style={style.bookDiscription}>
              <Text style={style.discription}>
                {item.detail == '' ? '...' : item.detail}
              </Text>
            </View>

            <View style={style.btnContainer}>
              <Button
                containerStyle={{
                  marginHorizontal: 20,
                  marginTop: 20,
                  height: 65,
                  backgroundColor: colors.green,
                }}
                //@ts-ignore
                onPress={() => navigation.navigate(Routes.LibraryProductRead)}
                text="Читать"
                textStyles={{
                  color: colors.white,
                  marginRight: 17,
                  fontSize: 18,
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
                onPress={() => setSave(e => !e)}
                text={save ? 'Удалить из избранного' : 'В избранное'}
                textStyles={{
                  color: colors.green,
                  marginRight: 17,
                  fontSize: 18,
                  alignItems: 'center',
                  fontWeight: isIOS ? '700' : '700',
                  fontFamily: 'OpenSans-Regular',
                }}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LibraryProduct;

const styles = StyleSheet.create({});

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {AppHeader} from '../../components/Other/AppBar';
import {style} from './style';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../theme';
import {LikeSave, MyBookIcon, SearchIcon} from '../../assets/icons/icon';
import {LibraryDATA} from './data';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes/routes';
import {useAllApiContext} from '../../../context/allapi/AllApiContext';
import {useLangContext} from '../../../context/lang/LangContext';
import {TypeAllApiState} from '../../../context/allapi/TypeAllApi';
import {TypeLangState} from '../../../context/lang/TypeLang';
import Button from '../../components/Button/button';
import {useTranslation} from 'react-i18next';

const Library = () => {
  const {t} = useTranslation();

  const {catalogs, categoryBooks, catalogsDATA, setCatalogs} =
    useAllApiContext() as TypeAllApiState;

  const {language} = useLangContext() as TypeLangState;
  let navigation = useNavigation();
  const Tab = createBottomTabNavigator();

  const [active, setActive] = useState(true);
  const [activeLike, setActiveLike] = useState(false);
  // Search FIlter
  const [searchBooks, setSearchBooks] = useState<any>('');
  const [buttonIndex, setButtonIndex] = useState<any>(0);
  function filteredButtons(id: any, index: any) {
    const res = catalogsDATA.filter((e: any) => e.category_id === id);
    // @ts-ignore
    setCatalogs(res);
    setButtonIndex(index);
  }
  const AllCatalogs = (a: any) => {
    // @ts-ignore
    setCatalogs(catalogsDATA);
    setButtonIndex(a);
  };
  const searchFilter = (text: any) => {
    if (text) {
      const newData = catalogs.filter((items: any) => {
        const itemData = items.title
          ? items.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      // @ts-ignore
      setCatalogs(newData);
      setSearchBooks(newData);
    } else {
      // @ts-ignore
      setCatalogs(catalogsDATA);
      setSearchBooks(text);
    }
  };

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView>
        <AppHeader
          containerStyle={style.containerStyle}
          logoIcon={true}
          notificatAndDetailsIcons={true}
          notificationColor={colors.black}
          detailsColor={colors.black}
          detailsIcon={true}
          //@ts-ignore
          onPressDetailsIcon={() =>
            //@ts-ignore
            navigation.openDrawer()
          }
          onPressNotification={() =>
            //@ts-ignore
            navigation.navigate(Routes.NotificationsStack)
          }
          headingText={true}
          headingTitle="Библиотека"
          headingTextStyle={style.titleStyle}
        />

        <View style={style.searchContainer}>
          <TextInput
            style={style.search}
            onChangeText={txt => searchFilter(txt)}
            value={searchBooks}
            // inlineImageRight={SearchIcon}
            placeholder="Текст"
            placeholderTextColor={colors.gray}
            keyboardType="default"
          />
          <TouchableOpacity>
            <SearchIcon size={25} />
          </TouchableOpacity>
        </View>
        <View style={style.catalogsContainer}>
          {/* <Text>{JSON.parse(item.title)[language]}</Text> */}
          <Button
            containerStyle={{
              // marginHorizontal: 10,
              marginVertical: 8,
              padding: 10,
              backgroundColor: buttonIndex === 0 ? colors.green : colors.white,
              borderColor: colors.green,
              borderStyle: 'solid',
              borderWidth: 1,
              marginRight: 20,
            }}
            //@ts-ignore
            onPress={() => AllCatalogs(0)}
            text={t('hammasi')}
            textStyles={{
              color: buttonIndex === 0 ? colors.white : colors.green,
              // marginRight: 17,
              fontSize: 14,
              alignItems: 'center',
              fontWeight: isIOS ? '400' : '400',
              fontFamily: 'OpenSans-Regular',
            }}
          />
          {categoryBooks.map((books_category: any, index: any) => (
            <>
              <Button
                key={index}
                containerStyle={{
                  // marginHorizontal: 10,
                  marginVertical: 8,
                  padding: 10,
                  backgroundColor:
                    buttonIndex === index + 1 ? colors.green : colors.white,
                  borderColor: colors.green,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  marginRight: 20,
                }}
                //@ts-ignore
                onPress={() => filteredButtons(books_category.id, index + 1)}
                text={JSON.parse(books_category.title)[language]}
                textStyles={{
                  color:
                    buttonIndex === index + 1 ? colors.white : colors.green,
                  // marginRight: 17,
                  fontSize: 14,
                  alignItems: 'center',
                  fontWeight: isIOS ? '400' : '400',
                  fontFamily: 'OpenSans-Regular',
                }}
              />
            </>
          ))}
        </View>

        {catalogs.length === 0 ? (
          <View style={style.catalogsContainer}>
            <Text>{t('topilmadi')}...</Text>
          </View>
        ) : (
          <FlatList
            data={catalogs}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 260,
              paddingTop: 40,
            }}
            // extraData={selectedId}
            // keyExtractor={(item) => item.id}
            renderItem={({item, index}) => {
              return (
                <>
                  <View
                    key={index}
                    style={[
                      style.productContainer,
                      (index + 1) % 2 == 0
                        ? {
                            marginTop: 0,
                          }
                        : {top: -50},
                    ]}>
                    <View style={style.Product}>
                      <View style={style.productIconContainer}>
                        <TouchableOpacity
                          onPress={() =>
                            //@ts-ignore
                            navigation.navigate(Routes.LibraryProduct, {
                              item: item,
                            })
                          }>
                          <Image
                            source={{
                              uri: `https://mamajanovs.uz/images/${item.image}`,
                            }}
                            resizeMode="cover"
                            style={style.productImage}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btnLike}>
                          <LikeSave
                            size={25}
                            fillColor={colors.white}
                            color={colors.green}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={style.productItem}>
                        <Text style={style.productName}>
                          {JSON.parse(item.title)[language]}
                        </Text>
                        {/* <Text style={style.productTitle}>{JSON.parse(item.author)[language]}</Text> */}
                        <Text style={style.productTitle}>
                          {JSON.parse(item.author)[language]}
                        </Text>
                        <Text style={style.productPrice}>
                          {item.price == 0 ? 'Бесплатно' : item.price}
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              );
            }}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Library;

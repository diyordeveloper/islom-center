import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import {style} from './style';
import {AppHeader} from '../../components/Other/AppBar';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {isIOS} from '../../constants/size';
import {NewsDATA} from './data';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Routes} from '../../../navigation/routes/routes';
import {useAllApiContext} from '../../../context/allapi/AllApiContext';
import {TypeAllApiState} from '../../../context/allapi/TypeAllApi';
import {useLangContext} from '../../../context/lang/LangContext';
import {TypeLangState} from '../../../context/lang/TypeLang';
import {FavoriteIcon} from '../../assets/icons/icon';
import moment from 'moment';
// @ts-ignore
const News = props => {
  let navigation = useNavigation();
  const {newPosts} = useAllApiContext() as TypeAllApiState;
  const {language} = useLangContext() as TypeLangState;
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
            props.navigation.openDrawer()
          }
          onPressNotification={() =>
            //@ts-ignore
            props.navigation.navigate(Routes.NotificationsStack)
          }
          headingText={true}
          headingTitle="Новости"
          headingTextStyle={style.titleStyle}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={newPosts}
          numColumns={1}
          contentContainerStyle={{
            paddingBottom: 50,
            paddingTop: 15,
          }}
          // extraData={selectedId}
          // keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            // console.log({index});
            return (
              <TouchableOpacity
                onPress={() =>
                  //@ts-ignore
                  navigation.navigate(Routes.NewsRead, {
                    item: item,
                  })
                }>
                <View style={style.newsContainer}>
                  <View style={style.imageContainer}>
                    <Image
                      source={{uri: `https://mamajanovs.uz/${item.image}`}}
                      resizeMode="cover"
                      style={style.itemImage}
                    />
                  </View>
                  <View style={style.textContainer}>
                    <Text style={style.text}>
                      {JSON.parse(item.title)[language].substring(0, 30)}
                      {'...'}
                    </Text>
                    <View style={style.detailsContainer}>
                      <Text style={style.time}>
                        {moment(item.created_at).format('hh:mm')}
                        {' - '}
                        {moment(item.created_at).format('DD.MM.YYYY')}
                      </Text>
                      <TouchableOpacity>
                        <View>
                          <FavoriteIcon
                            size={18}
                            color={colors.white}
                            fillColor={colors.black}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default News;

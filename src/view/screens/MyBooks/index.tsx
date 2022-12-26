import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {style} from './style';
import {AppHeader} from '../../components/Other/AppBar';
import {isIOS} from '../../constants/size';
import {colors} from '../../theme';
import {SearchIcon} from '../../assets/icons/icon';
import {MyBooksDATA} from './data';
import {Routes} from '../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';

const MyBooks = () => {
  let navigation = useNavigation();

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
        headingTitle="Мои книги"
        headingTextStyle={style.titleStyle}
      />
      <View style={style.searchContainer}>
        <TextInput
          style={style.search}
          // onChangeText={onChangeNumber}
          // value={number}
          // inlineImageRight={SearchIcon}
          placeholder="Текст"
          placeholderTextColor={colors.gray}
          keyboardType="default"
        />
        <TouchableOpacity>
          <SearchIcon size={25} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={MyBooksDATA}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
          paddingTop: 40,
        }}
        // style={{}}
        // extraData={selectedId}
        // keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <>
            <View
              style={[
                style.myBooksContainer,
                (index + 1) % 2 == 0
                  ? {
                      marginTop: 0,
                    }
                  : {top: -50},
              ]}>
              <View style={style.myBooks}>
                <View style={style.myBooksIconContainer}>
                  <TouchableOpacity
                    //@ts-ignore
                    onPress={() => navigation.navigate(Routes.MyBook)}>
                    {item.image}
                  </TouchableOpacity>
                  <TouchableOpacity style={style.btnLike}>
                    {item.iconLike}
                  </TouchableOpacity>
                </View>
                <View style={style.myBooksItem}>
                  <Text style={style.myBookName}>{item.label}</Text>
                  <Text style={style.myBookTitle}>{item.title}</Text>
                  <Text style={style.myBookPrice}>{item.price}</Text>
                </View>
              </View>
            </View>
          </>
        )}
      />
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 100 : 75}}></View> */}
    </View>
  );
};

export default MyBooks;

const styles = StyleSheet.create({});

import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {colors} from '../../theme';
import {AppHeader} from '../../components/Other/AppBar';
import {
  BookIcon,
  CharterIcon,
  SearchIcon,
  SeeIcon,
  TourIcon,
  VirtualTurIcon,
} from '../../assets/icons/icon';
import {useNavigation} from '@react-navigation/native';
import {windowWidth} from '../../constants/size';
import {Routes} from '../../../navigation/routes/routes';

const data = [
  {
    image: require('../../assets/images/userImage.png'),
    name: 'Ройтман Рафаэль',
    title: 'Lorem ipsum dolor sitamet',
  },
  {
    image: require('../../assets/images/userImage.png'),
    name: 'Ройтман Рафаэль',
    title: 'Lorem ipsum dolor sitamet',
  },
  {
    image: require('../../assets/images/userImage.png'),
    name: 'Ройтман Рафаэль',
    title: 'Lorem ipsum dolor sitamet',
  },
];

const Forum = () => {
  let navigation = useNavigation();

  const [active, setActive] = useState(true);

  const onNext = () => {
    //@ts-ignore
    navigation.navigate(Routes.UserTheme);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <AppHeader
          containerStyle={styles.containerStyle}
          logoIcon={true}
          notificatAndDetailsIcons={true}
          notificationColor={colors.black}
          detailsColor={colors.black}
          detailsIcon={true}
          onPressDetailsIcon={() =>
            //@ts-ignore
            navigation.openDrawer()
          }
          onPressNotification={() =>
            //@ts-ignore
            navigation.navigate(Routes.NotificationsStack)
          }
          headingText={true}
          headingTitle="Форум"
          headingTextStyle={styles.titleStyle}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.toglleContainer}>
            <TouchableOpacity
              onPress={() => {
                setActive(true);
                //@ts-ignore
                navigation.navigate(Routes.CreateTopic);
              }}>
              <View style={[styles.library]}>
                <Text
                  style={[
                    styles.libraryText,
                    {color: active ? colors.black : colors.lingthGray},
                  ]}>
                  Создай тему
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setActive(false);
                //@ts-ignore
                navigation.navigate(Routes.MyThemes);
              }}>
              <View style={[styles.tours]}>
                <Text
                  style={[
                    styles.toursText,
                    {color: active ? colors.lingthGray : colors.black},
                  ]}>
                  Мои темы
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="Текст"
                placeholderTextColor="#7A7A7A"
              />
              <SearchIcon fillColor="black" size={20} />
            </View>
            {data.map((e, i) => {
              return (
                <View style={styles.dataView} key={i}>
                  <TouchableOpacity onPress={onNext}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Image style={styles.dataImage} source={e.image} />
                      <View style={{marginHorizontal: 10, marginTop: 10}}>
                        <Text style={styles.dataName}>{e.name}</Text>
                        <Text style={styles.dataTitle}>{e.title}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={{justifyContent: 'space-between'}}>
                    <Text
                      style={[
                        styles.dataText,
                        {
                          right: 10,
                        },
                      ]}>
                      только что
                    </Text>
                    <View
                      style={{
                        right: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <CharterIcon size={18} fillColor="black" />
                        <Text style={[styles.dataText, {left: 5}]}>21</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginHorizontal: 10,
                        }}>
                        <SeeIcon size={18} fillColor="black" />
                        <Text style={[styles.dataText, {left: 5}]}>300</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Forum;

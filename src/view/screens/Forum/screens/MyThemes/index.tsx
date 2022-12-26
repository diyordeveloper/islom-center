import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CharterIcon, SeeIcon} from '../../../../assets/icons/icon';
import {AppHeader} from '../../../../components/Other/AppBar';
import {colors} from '../../../../theme';
import styles from './style';
import {windowWidth} from '../../../../constants/size';
import {Routes} from '../../../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';

const data = [
  // {textData: ['На проверке', 'Опубликовано', 'Удалено']},
  {
    text: (
      <View
        style={{
          borderRadius: 5,
          paddingVertical: 8,
          paddingHorizontal: 10,
          backgroundColor: '#BBBE2E',
        }}>
        <Text style={{color: colors.white}}>На проверке</Text>
      </View>
    ),
    image: require('../../../../assets/images/userImage.png'),
    name: 'Ройтман Рафаэль',
    title: 'Lorem ipsum dolor sitamet',
  },
  {
    text: (
      <View
        style={{
          borderRadius: 5,
          paddingVertical: 8,
          paddingHorizontal: 10,
          backgroundColor: '#27B17F',
        }}>
        <Text style={{color: colors.white}}>Опубликовано</Text>
      </View>
    ),
    image: require('../../../../assets/images/userImage.png'),
    name: 'Ройтман Рафаэль',
    title: 'Lorem ipsum dolor sitamet',
  },
  {
    text: (
      <View
        style={{
          borderRadius: 5,
          paddingVertical: 8,
          paddingHorizontal: 10,
          backgroundColor: '#BE2E2E',
        }}>
        <Text style={{color: colors.white}}>Удалено</Text>
      </View>
    ),
    image: require('../../../../assets/images/userImage.png'),
    name: 'Ройтман Рафаэль',
    title: 'Lorem ipsum dolor sitamet',
  },
  {
    text: (
      <View
        style={{
          borderRadius: 5,
          paddingVertical: 8,
          paddingHorizontal: 10,
          backgroundColor: '#27B17F',
        }}>
        <Text style={{color: colors.white}}>Опубликовано</Text>
      </View>
    ),
    image: require('../../../../assets/images/userImage.png'),
    name: 'Ройтман Рафаэль',
    title: 'Lorem ipsum dolor sitamet',
  },
];

const MyThemes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <AppHeader
          containerStyle={styles.containerStyle}
          notificatAndDetailsIcons={true}
          leftArrowIcon={true}
          colorLeftArrow={colors.black}
          notificationColor={colors.black}
          detailsColor={colors.black}
          detailsIcon={true}
          onPressLeftArrow={() => navigation.goBack()}
          onPressDetailsIcon={() =>
            //@ts-ignore
            navigation.openDrawer()
          }
          onPressNotification={() =>
            //@ts-ignore
            navigation.navigate(Routes.NotificationsStack)
          }
          headingText={true}
          headingTitle="Мои темы"
          headingTextStyle={styles.titleStyle}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginVertical: 20}}>
            {data.map((e, i) => {
              return (
                <View style={styles.dataView} key={i}>
                  <TouchableOpacity
                    style={{
                      top: -15,
                      width: windowWidth - 60,
                      position: 'absolute',
                      alignItems: 'flex-end',
                      marginHorizontal: 20,
                    }}>
                    {e?.text}
                  </TouchableOpacity>
                  <View style={{width: '100%', paddingTop: 10}}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        // marginTop: 10,
                        // borderWidth: 1,
                      }}>
                      <Text
                        style={[
                          styles.dataText,
                          {
                            // right: 10,
                            textAlign: 'right',
                          },
                        ]}>
                        только что
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: -30,
                        // borderWidth: 1,
                      }}>
                      <Image style={styles.dataImage} source={e.image} />
                      <View style={{marginHorizontal: 10, marginTop: 10}}>
                        <Text style={styles.dataName}>{e.name}</Text>
                        <Text style={styles.dataTitle}>{e.title}</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        // right: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        // borderWidth: 1,
                        marginTop: 10,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <CharterIcon size={18} fillColor="black" />
                        <Text style={[styles.dataText, {left: 5}]}>21</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginHorizontal: 20,
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

export default MyThemes;

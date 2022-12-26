import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './style';
import {AppHeader} from '../../../../components/Other/AppBar';
import {colors} from '../../../../theme';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../../navigation/routes/routes';
import {SeeIcon, ShareIcon} from '../../../../assets/icons/icon';

const UserTheme = () => {
  const navigation = useNavigation();

  const onNext = () => {
    //@ts-ignore
    navigation.navigate(Routes.Forum);
  };

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
          headingTitle="Форум"
          headingTextStyle={styles.titleStyle}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.line}></View>
              <Text style={styles.viewText}>
                Lorem ipsum dolor sit amet, consectetur
              </Text>
            </View>
            <ShareIcon fillColor="black" color="black" size={20} />
          </View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginRight: 30,
            }}>
            <SeeIcon size={18} fillColor="black" />
            <Text
              style={[styles.text, {marginHorizontal: 7, marginVertical: 0}]}>
              300
            </Text>
          </View>
          <Text style={styles.commit}>Комментарии</Text>
          <Text style={styles.commit}>Оставить комментарий</Text>
          <TextInput
            multiline={true}
            placeholder="Текст"
            style={styles.input}
            textAlignVertical="top"
            placeholderTextColor="#7A7A7A"
          />
          <TouchableOpacity onPress={onNext}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Оставить</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default UserTheme;

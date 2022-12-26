import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './style';
import {AppHeader} from '../../components/Other/AppBar';
import {colors} from '../../theme';
import {isIOS} from '../../constants/size';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes/routes';
import {ArrowRight} from '../../assets/icons/icon';

const TechnicalSupport = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
        <AppHeader
          leftArrowIcon={true}
          colorLeftArrow={colors.black}
          containerStyle={styles.containerStyle}
          notificatAndDetailsIcons={true}
          notificationColor={colors.black}
          detailsColor={colors.black}
          detailsIcon={true}
          //@ts-ignore
          onPressDetailsIcon={() => navigation.openDrawer()}
          onPressNotification={() =>
            //@ts-ignore
            navigation.navigate(Routes.NotificationsStack)
          }
          onPressLeftArrow={() => navigation.goBack()}
          headingText={true}
          headingTitle="Тех поддержка"
          headingTextStyle={styles.titleStyle}
        />
        <View style={styles.box}>
          <View style={styles.textBox}>
            <Text style={styles.title}>Здравствуйте.</Text>
            <Text style={styles.titleTime}>00:19</Text>
          </View>
          <Image
            style={styles.image}
            source={require('../../assets/images/userImage.png')}
          />
        </View>
        <View style={[styles.box, {backgroundColor: '#E7F8F2'}]}>
          <View style={styles.textBox}>
            <Text style={styles.title}>Здравствуйте. Чем мы можем помочь?</Text>
            <Text style={styles.titleTime}>00:19</Text>
          </View>
          <Image
            style={styles.image}
            source={require('../../assets/images/userImage.png')}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 35,
        }}>
        <TextInput
          style={styles.input}
          placeholder="Сообщение"
          placeholderTextColor="#7A7A7A"
        />
        <TouchableOpacity>
          <ArrowRight fillColor="black" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TechnicalSupport;

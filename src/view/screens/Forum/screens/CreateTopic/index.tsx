import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppHeader} from '../../../../components/Other/AppBar';
import {colors} from '../../../../theme';
import styles from './style';
import {Routes} from '../../../../../navigation/routes/routes';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {TourIcon} from '../../../../assets/icons/icon';
import {windowWidth} from '../../../../constants/size';
import {ScrollView} from 'react-native-gesture-handler';
// import ImagePicker from 'react-native-image-crop-picker';

const CreateTopic = () => {
  const navigation = useNavigation();

  const [lorem, setLorem] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Take Photo From Gallery
  const [image, setImage] = useState('');

  const takePhotoFromGallery = () => {
    // ImagePicker.openPicker({
    //   width: windowWidth / 1 - 80,
    //   height: 320,
    //   cropping: true,
    // }).then(image => {
    //   // console.log(image);
    //   setImage(image.path);
    // });
  };

  const deletePhotoFromGallery = () => {
    setImage('');
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
          headingTitle="Создать тему"
          headingTextStyle={styles.titleStyle}
        />
        <ScrollView>
          <Text style={styles.text}>Тема</Text>
          <TextInput
            value={lorem}
            placeholder="Lorem"
            style={styles.input}
            onChangeText={setLorem}
            placeholderTextColor="#7A7A7A"
          />
          <Text style={[styles.text, {marginBottom: 40}]}>Описание</Text>
          <View
            style={{
              marginBottom: -33,
              // borderWidth: 1,
              zIndex: 1,
              marginHorizontal: 45,
              alignItems: 'flex-end',
            }}>
            {image ? (
              <TouchableOpacity onPress={() => deletePhotoFromGallery()}>
                <Text
                  style={{fontSize: 18, marginBottom: -10, color: colors.gray}}>
                  X
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => takePhotoFromGallery()}>
                <TourIcon size={20} fillColor={colors.gray} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.inputBox}>
            <TextInput
              multiline={true}
              placeholder="Text"
              textAlignVertical="top"
              style={styles.bigInput}
              placeholderTextColor="#7A7A7A"
            />
            {image ? (
              <Image
                style={{
                  width: windowWidth / 1 - 80,
                  height: 320,
                  // borderWidth: 1,
                }}
                resizeMode="contain"
                source={{
                  uri: `${image}`,
                }}
              />
            ) : null}
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.button}>
            <Text style={styles.buttonText}>Добавить</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      <Modal
        style={styles.modal}
        isVisible={modalVisible}
        animationIn="bounceIn"
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection={['up', 'left', 'right', 'down']}>
        <View style={styles.modalView}>
          <Image
            style={styles.modalImage}
            source={require('../../../../assets/images/Logo2.png')}
          />
          <Text style={styles.modalText}>
            Ваша тема проходит модерацию. Это займет 2-4 часа
          </Text>
          <TouchableOpacity
            //@ts-ignore
            onPress={() => navigation.navigate(Routes.Forum)}
            style={styles.modalButton}>
            <Text style={styles.buttonText}>Главная</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default CreateTopic;

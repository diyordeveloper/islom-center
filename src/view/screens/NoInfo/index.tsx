import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsConnected,} from 'react-native-offline';

const deviceHeight = Dimensions.get('window');
const NoInfo = () => {
  // @ts-ignore
  const [show, setShow] = useState<any>(false);
  const isConnected = useIsConnected() ?? true;

  function close() {
    // @ts-ignore
    setShow(p => !p);
  }

  // Internet
  useEffect(() => {
    if (isConnected == null) {
      console.log(`Internet  ${isConnected} No Internet...`);
    } else {
      console.log(`Internet  ${isConnected} Ulangan...`);
    }
  });
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={!isConnected ? true : false}
      onRequestClose={close}>
      <View style={{flex: 1, backgroundColor: '#000000AA'}}>
        <Pressable
          onPress={() => {
            if (!show) return;
            close();
          }}
          style={{flex: 1}}></Pressable>

        <View
          style={{
            bottom: 0,
            position: 'absolute',
            width: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            maxHeight: deviceHeight.height * 0.4,
          }}>
          <View
            style={{
              margin: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image 
              style={{
                resizeMode: 'cover',
                height: 100,
                width: 100,
              }}
              source={require('../../assets/icons/NoInternet.png')}
            />
            <Text
              style={{
                alignSelf: 'center',
                color: '#182E44',
                fontSize: 20,
                fontWeight: '500',
                margin: 10,
              }}>
              Bы не подключены к интернету
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NoInfo;

const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MovieDATA} from './data';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import {colors} from '../../../../theme';
import {useAllApiContext} from '../../../../../context/allapi/AllApiContext';
import {useLangContext} from '../../../../../context/lang/LangContext';
import {TypeAllApiState} from '../../../../../context/allapi/TypeAllApi';
import {TypeLangState} from '../../../../../context/lang/TypeLang';
import {PlayIcon} from '../../../../assets/icons/icon';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useState } from 'react';
const Movie = () => {
  let navigation = useNavigation();
  const {mediaVideos} = useAllApiContext() as TypeAllApiState;
  const {language} = useLangContext() as TypeLangState;

  const [onPause,setOnPause] = useState<boolean>(false)
  return (
    <View style={style.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={mediaVideos}
        numColumns={1}
        contentContainerStyle={{
          paddingBottom: 100,
          // paddingTop: 40,
        }}
        // extraData={selectedId}
        // keyExtractor={(item) => item.id}
        renderItem={({item, index}) => {
          // console.log({index});
          return (
            <View
              style={[
                {
                  paddingHorizontal: 20,
                  width: windowWidth / 1,
                  paddingVertical: 10,
                },
              ]}
              key={index}>
              <View style={style.cardContainer}>
                <TouchableOpacity
                //@ts-ignore
                // onPress={() => navigation.navigate(Routes.StaffCard)}
                >
                  <View style={style.image}>
                    {/* <Image
                      source={{uri: `https://mamajanovs.uz/${item.link}`}}
                      resizeMode="cover"
                      style={{height: windowHeight / 4, width: '100%'}}
                    /> */}
                    <YoutubePlayer
                      // @ts-ignore
                      width={`100%`}
                      height={windowHeight / 4}
                      videoId={`${item.link.slice(item.link.length - 11, item.link.length)}`}
                    />
                    {/* <View style={{position: 'absolute'}}>
                      <PlayIcon size={80} />
                    </View> */}
                  </View>
                </TouchableOpacity>
                <View style={style.titleContainer}>
                  <Text style={style.name}>
                    {JSON.parse(item.title)[language]}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Movie;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35,
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#9485',
    width: windowWidth / 1,
    height: isIOS ? windowHeight / 8 - 20 : windowHeight / 8 - 30,
    paddingHorizontal: 20,
    // zIndex: 99,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  cardContainer: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.19,
    elevation: 2,
    marginBottom: 20,
  },

  name: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.black,
    textAlign: 'center',
  },

  titleText: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.gray,
    paddingVertical: 10,
    textAlign: 'center',
    lineHeight: 33,
  },

  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

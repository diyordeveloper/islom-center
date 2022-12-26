import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppHeader} from '../../../../components/Other/AppBar';
import {FavoriteBookReadDATA} from './data';
import {isIOS, windowWidth} from '../../../../constants/size';
import {colors} from '../../../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const FavoriteBookRead = () => {
  let navigation = useNavigation();

  const [progress, setProgress] = useState();
  const [height, setHeight] = useState(0);
  const [enableScroll] = useState();
  const [disableScroll] = useState();

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView>
        <AppHeader
          containerStyle={style.containerStyle}
          leftArrowIcon={true}
          colorLeftArrow={colors.black}
          titleText={true}
          titleTitle="QURAN MAJEED"
          titleTextStyle={style.titleStyle}
          labelText={true}
          labelTitle="Джоан Роулинг"
          labelTextStyle={style.labelStyle}
          saveIcon={true}
          saveColor={colors.black}
          //@ts-ignore
          onPressLeftArrow={() => navigation.goBack()}
          headingTextStyle={style.titleStyle}
        />
        <ScrollView
          onLayout={event => {
            const {x, y, height, width} = event.nativeEvent.layout;
            console.log(height);
            setHeight(height);
          }}
          contentContainerStyle={{paddingBottom: 80}}
          showsVerticalScrollIndicator={false}
          style={style.scrollContainer}
          onScroll={(state: NativeSyntheticEvent<NativeScrollEvent>) => {
            let {y} = state.nativeEvent.contentOffset;
            //@ts-ignore
            setProgress((3 * y) / height);
          }}
          scrollEventThrottle={16}>
          {FavoriteBookReadDATA.map((e, i) => {
            return (
              <View style={style.titleContainer} key={i}>
                <Text style={style.titleTextStyle}>{e.titleOne}</Text>
                <Text style={style.titleTextStyle}>{e.titleTwo}</Text>
                <Text style={style.titleTextStyle}>{e.titleThree}</Text>
              </View>
            );
          })}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 130,
              marginVertical: 30,
            }}>
            <Text style={{paddingRight: 20}}>4</Text>
            <MultiSlider
              max={250}
              sliderLength={250}
              enabledOne
              trackStyle={style.track}
              markerStyle={style.marker}
              containerStyle={style.view}
              selectedStyle={style.select}
              onValuesChangeStart={disableScroll}
              onValuesChangeFinish={enableScroll}
              markerContainerStyle={style.markerContainer}
            />
            <Text>104</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default FavoriteBookRead;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // backgroundColor: '#4574',
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor: colors.gray,
    width: windowWidth / 1,
    height: 60,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
  },

  labelStyle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.gray,
  },

  scrollContainer: {
    paddingHorizontal: 20,
  },

  titleContainer: {
    // paddingTop: 10,
  },

  titleTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
    paddingVertical: 15,
  },

  view: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  select: {
    height: 3,
    borderRadius: 40,
    backgroundColor: colors.black,
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  markerContainer: {
    borderRadius: 40,
    width: 25,
    height: 25,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  track: {
    height: 3,
    borderRadius: 40,
    backgroundColor: colors.green,
  },
});

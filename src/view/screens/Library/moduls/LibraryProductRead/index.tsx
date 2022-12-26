import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../../theme';
import {AppHeader} from '../../../../components/Other/AppBar';
import {style} from './style';
import {Routes} from '../../../../../navigation/routes/routes';
import {isIOS, windowWidth} from '../../../../constants/size';
import {useNavigation} from '@react-navigation/native';
import {LibraryProductReadDATA} from './data';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {SafeAreaView} from 'react-native-safe-area-context';
// @ts-ignore
const LibraryProductRead = (props) => {
  let navigation = useNavigation();

  const [progress, setProgress] = useState();
  const [height, setHeight] = useState(0);
  const [enableScroll] = useState();
  const [disableScroll] = useState();

  useEffect(() => {
    console.log(progress);
  }, [progress]);

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
          onPressLeftArrow={() => navigation.navigate(Routes.LibraryProduct)}
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
          {LibraryProductReadDATA.map((e, i) => {
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

export default LibraryProductRead;

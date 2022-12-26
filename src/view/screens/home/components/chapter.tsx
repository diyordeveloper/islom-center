import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  TouchableOpacity,
  Image,
} from 'react-native';
import {windowWidth} from '../../../constants/size';

import {colors} from '../../../theme';

export interface ChapterProps {
  chapter?: any;
  chapterTitle?: any;
  allChapter?: any;
  titleStyle?: any;

  onPress?: () => void;
}

// export interface PressableChapterProps extends React.ComponentProps<any> {
//   onPress: ((event: GestureResponderEvent) => void) | undefined;
// }

// export let PressableChapterProps = ({onPress}: PressableChapterProps) => {
//   return <TouchableOpacity onPress={onPress}></TouchableOpacity>;
// };

export function Chapter({
  chapter,
  chapterTitle,
  allChapter,
  titleStyle,
  onPress,
}: ChapterProps) {
  let props = {
    chapter,
    chapterTitle,
    allChapter,
    titleStyle,
    onPress,
  };
  return (
    <View style={style.containerStyle}>
      {chapter && (
        <View style={style.chapter}>
          <View
            style={{
              flexWrap: 'nowrap',
              width: '80%',
              height: 75,
              // borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text style={[style.title, titleStyle]}>{chapterTitle}</Text>
          </View>
          <TouchableOpacity onPress={onPress}>
            <Text style={style.btnAll}>{allChapter}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export const style = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    marginVertical: 25,
  },

  chapter: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
  },

  btnAll: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.green,
  },
});

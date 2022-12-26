import React from 'react';
import {ImageProps, TouchableWithoutFeedback} from 'react-native';
import {colors} from '../../theme';
import {
  Image,
  StyleSheet,
  TextStyle,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {IconProps} from '../../assets/icons/icon';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {CardDATA} from './data';
import {Chapter} from '../../screens/home/components/chapter';

export interface CardProps {
  onPress?: () => void;
  text?: string;
  loading?: boolean;
  style?: () => void;
  icon?: any;
  disableIcon?: boolean;
  cardStyle?: ViewStyle;
  textStyles?: TextStyle;
  Icon?: (props: IconProps) => any;
  image?: ImageProps;
}

const Card = ({onPress, cardStyle}: CardProps) => {
  return (
    <View style={styles.card}>
      {CardDATA.map((e, i) => {
        return (
          <View style={styles.cardContainer} key={i.toString()}>
            <Chapter chapter={true} chapterTitle={e.label} />
            <View
              style={{
                paddingHorizontal: 20,
              }}>
              <TouchableWithoutFeedback onPress={onPress} key={i.toString()}>
                <View style={[styles.container, cardStyle]}>
                  <View style={styles.iconContainer}>{e.icon}</View>
                  <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{e.title}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: windowWidth / 1,
    // marginVertical: 30,
  },

  cardContainer: {
    flexDirection: 'column',
  },

  container: {
    width: '100%',
    // height: windowHeight / 2 - 10,
    flexDirection: 'column',
    borderRadius: 5,
    backgroundColor: '#fff',
    // marginVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.19,

    elevation: 2,
  },

  iconContainer: {
    height: 220,
    borderRadius: 5,
  },

  textContainer: {
    // height: '50%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 5,
    paddingVertical: isIOS ? 20 : 20,
    paddingHorizontal: isIOS ? 20 : 20,
  },

  // labelText: {
  //   fontSize: 25,
  //   fontWeight: '700',
  //   color: colors.black,
  // },

  titleText: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.lingthGray,
    paddingBottom: 10,
    // paddingVertical: isIOS ? 20 : 20,
  },
});

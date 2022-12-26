import React from 'react';
import {ImageProps} from 'react-native';
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
import {windowWidth} from '../../constants/size';

export interface ButtonProps {
  onPress?: () => any;
  text?: string;
  loading?: boolean;
  style?: () => void;
  icon?: any;
  disableIcon?: boolean;
  containerStyle?: ViewStyle;
  textStyles?: TextStyle;
  Icon?: (props: IconProps) => any;
  image?: ImageProps;
  disabled: boolean;
}

const Button = ({
  onPress,
  text,
  style,
  icon,
  disableIcon,
  containerStyle,
  textStyles,
  Icon,
  image,
  disabled,
}: ButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Image source={image} />
        <Text style={[textStyles]}>{text}</Text>
        {Icon === undefined ? null : (
          //@ts-ignore
          <Icon size={20} color={icon} fillColor={icon} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    // height: 69,
    // width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    // marginHorizontal: 20,
    // marginVertical: 20,
  },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  ArrowLeft,
  DetailsIcon,
  NotificationIcon,
  IconProps,
  FavoriteIcon,
  ShareIcon,
} from '../../assets/icons/icon';
import {colors} from '../../theme';

export interface AppHeaderProps {
  containerStyle?: any;
  marginLeft?: any;
  leftArrowIcon?: any;
  colorLeftArrow?: any;
  logoIcon?: any;
  headingText?: any;
  headingTextStyle?: any;
  headingTitle?: any;
  titleText?: any;
  titleTextStyle?: any;
  titleTitle?: any;
  labelText?: any;
  labelTextStyle?: any;
  labelTitle?: any;
  notificatAndDetailsIcons?: any;
  notificationIcon?: any;
  notificationColor?: any;
  detailsIcon?: any;
  detailsSingleIcon?: any;
  detailsColor?: any;
  saveIcon?: any;
  saveColor?: any;
  shareIcon?: any;
  shareColor?: any;
  onPress?: () => void;
  onPressLeftArrow?: () => void;
  onPressNotification?: () => void;
  onPressDetailsIcon?: () => void;
  onPressSaveIcon?: () => void;
  onPressShareIcon?: () => void;
}

export interface PressableAppHeaderProps extends React.ComponentProps<any> {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export let PressableAppHeaderProps = ({onPress}: PressableAppHeaderProps) => {
  return <TouchableOpacity onPress={onPress}></TouchableOpacity>;
};

export function AppHeader({
  containerStyle,
  marginLeft,
  leftArrowIcon,
  colorLeftArrow,
  logoIcon,
  headingText,
  headingTextStyle,
  headingTitle,
  titleText,
  titleTextStyle,
  labelText,
  labelTextStyle,
  titleTitle,
  labelTitle,
  notificatAndDetailsIcons,
  notificationIcon,
  notificationColor,
  detailsIcon,
  detailsSingleIcon,
  detailsColor,
  saveIcon,
  saveColor,
  shareIcon,
  shareColor,
  onPressLeftArrow,
  onPressNotification,
  onPressDetailsIcon,
  onPressSaveIcon,
  onPressShareIcon,
}: AppHeaderProps) {
  let props = {
    containerStyle,
    marginLeft,
    leftArrowIcon,
    colorLeftArrow,
    logoIcon,
    headingText,
    headingTextStyle,
    headingTitle,
    titleText,
    titleTextStyle,
    titleTitle,
    labelText,
    labelTextStyle,
    labelTitle,
    notificatAndDetailsIcons,
    notificationIcon,
    notificationColor,
    detailsIcon,
    detailsSingleIcon,
    detailsColor,
    saveIcon,
    saveColor,
    shareIcon,
    shareColor,
    onPressLeftArrow,
    onPressNotification,
    onPressDetailsIcon,
    onPressSaveIcon,
    onPressShareIcon,
  };
  return (
    <View style={containerStyle}>
      {leftArrowIcon && (
        <TouchableOpacity onPress={onPressLeftArrow}>
          <ArrowLeft size={20} fillColor={colorLeftArrow} />
        </TouchableOpacity>
      )}

      {logoIcon && (
        <View>
          <Image
            source={require('../../assets/images/Logo.png')}
            resizeMode="cover"
            style={{width: 55, height: 55}}
          />
        </View>
      )}

      {headingText && <Text style={headingTextStyle}>{headingTitle}</Text>}

      {titleText && (
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 50,
          }}>
          <Text style={titleTextStyle}>{titleTitle}</Text>
          {labelText && <Text style={labelTextStyle}>{labelTitle}</Text>}
        </View>
      )}

      {notificationIcon && (
        <TouchableOpacity
          onPress={onPressNotification}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F0F0F0',
            borderRadius: 2,
            width: 30,
            height: 30,
          }}>
          <NotificationIcon size={20} fillColor={notificationColor} />
        </TouchableOpacity>
      )}

      {notificatAndDetailsIcons && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 58,
            marginLeft: marginLeft,
            // borderWidth: 1,
            // borderColor: colors.black,
          }}>
          {/* {notificationIcon &&  */}
          <TouchableOpacity
            onPress={onPressNotification}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: '#F0F0F0',
              // borderRadius: 2,
              // width: 30,
              // height: 30,
            }}>
            <NotificationIcon size={20} fillColor={notificationColor} />
          </TouchableOpacity>
          {/* } */}

          <TouchableOpacity onPress={onPressDetailsIcon}>
            <DetailsIcon size={18} color={detailsColor} />
          </TouchableOpacity>
        </View>
      )}

      {detailsSingleIcon && (
        <TouchableOpacity onPress={onPressDetailsIcon}>
          <DetailsIcon size={16} color={detailsColor} />
        </TouchableOpacity>
      )}

      {saveIcon && (
        <TouchableOpacity onPress={onPressSaveIcon}>
          <FavoriteIcon size={18} fillColor={saveColor} />
        </TouchableOpacity>
      )}
      {shareIcon && (
        <TouchableOpacity onPress={onPressShareIcon}>
          <ShareIcon size={20} color={shareColor} />
        </TouchableOpacity>
      )}
    </View>
  );
}

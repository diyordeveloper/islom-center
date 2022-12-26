import { Dimensions, Platform } from 'react-native';

export let { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

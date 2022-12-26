import { Dimensions, PixelRatio, Platform } from 'react-native';

export const roundPixel = (size: number): number => PixelRatio.roundToNearestPixel(size);

const { width, height } = Dimensions.get('screen');

const guideline = {
  width: 375,
  height: 812,
};

function scaleByHeightPercent(size: number): number {
  // calc percent value from style guide height
  const sizePercent = (size / guideline.height) * 100;
  // calc size percent for device screen
  const sizeForDeviceHeight = (sizePercent * height) / 100;

  return roundPixel(sizeForDeviceHeight);
}
function scaleByWidthPercent(size: number): number {
  // calc percent value from style guide height
  const sizePercent = (size / guideline.width) * 100;
  // calc size percent for device screen
  const sizeForDeviceWidth = (sizePercent * width) / 100;

  return roundPixel(sizeForDeviceWidth);
}

function responsiveFont(size: number): number {
  const newSize = size * (width / guideline.width);
  if (Platform.OS === 'android') {
    return Math.round(roundPixel(newSize)) - 2;
  }
  return Math.round(roundPixel(newSize));
}

export {
  responsiveFont as resFont,
  scaleByHeightPercent as heightPer,
  height as screenHeight,
  width as screenWidth,
  scaleByWidthPercent as widthPer,
};

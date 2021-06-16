import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';

interface LottieProps {
  style?: StyleProp<ViewStyle>;
  source: any;
}

const Lottie: React.FC<LottieProps> = ({style, source}) => {
  return <LottieView source={source} autoPlay loop style={style} />;
};

export default React.memo(Lottie);

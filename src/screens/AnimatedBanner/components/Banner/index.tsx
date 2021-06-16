import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  Layout,
  SlideInLeft,
  SlideInRight,
} from 'react-native-reanimated';

import Lottie from '../../../../components/Lottie';
import music from '../../../../assets/lottie/music.json';
import {Colors} from '../../../../constants';

const Banner = () => {
  return (
    <Animated.View entering={SlideInRight} layout={Layout.springify()}>
      <LinearGradient
        colors={['#f5f7fa', '#fed6e3a1']}
        style={styles.linearGradient}>
        <Text style={styles.title}>@connor is now online!</Text>
        <View style={styles.statusContianer}>
          <Lottie source={music} style={styles.lottie} />
          <Text style={styles.statusText}>Listening Maluma</Text>
        </View>
        <View style={styles.listenContainer}>
          <View style={styles.listenSub}>
            <Text style={styles.listenText}>Listen</Text>
            <Icon name="play" size={12} color={Colors.white} />
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

export default Banner;

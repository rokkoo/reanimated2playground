import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import Lottie from '../../../components/Lottie';
import music from '../../../assets/lottie/music.json';

const Banner = () => {
  return (
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
          <Icon name="play" size={18} color="white" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Banner;

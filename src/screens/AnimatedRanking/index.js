import React, {useCallback, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Animated, {
  AnimatedLayout,
  SlideInLeft,
  Layout,
} from 'react-native-reanimated';

import Player from './componets/Player';
import players from './data';

const AnimatedRanking = () => {
  const [show, setShow] = useState(true);

  const handlePress = useCallback(() => setShow(!show), [show]);

  return (
    <Animated.View layout={Layout.springify()}>
      <Text style={styles.text}>Ranking</Text>
      <AnimatedLayout>
        <Animated.View>
          {show &&
            players.map((player, i) => (
              <Player {...player} index={i} key={i} />
            ))}
        </Animated.View>

        <Animated.View
          entering={SlideInLeft.delay((players.length + 1) * 100)}
          style={styles.buttonContainer}
          layout={Layout.springify()}>
          <Text
            style={[
              styles.button,
              {fontSize: show ? 16 : 24, color: show ? '#283747' : '#884EA0'},
            ]}
            onPress={handlePress}>
            {show ? 'See more' : 'Details'}
          </Text>
        </Animated.View>

        {!show &&
          players.map((player, i) => {
            return (
              <Animated.View
                style={styles.detailsContainer}
                entering={SlideInLeft.delay(i * 100)}>
                <Text style={styles.nameText}>{player.name}</Text>
                <Text style={styles.distanceText}>{player.distance}</Text>
              </Animated.View>
            );
          })}
      </AnimatedLayout>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#283747',
    marginBottom: 8,
    marginLeft: 8,
  },

  buttonContainer: {
    flexShrink: 1,
    alignItems: 'center',
    marginVertical: 8,
  },

  button: {
    padding: 8,
    color: '#283747',
    fontSize: 18,
    fontWeight: 'bold',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  detailsContainer: {
    flexDirection: 'row',
    marginLeft: 8,
  },

  nameText: {
    marginLeft: 8,
    color: '#283747',
    fontSize: 16,
  },

  distanceText: {
    marginLeft: 8,
    color: '#283747',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AnimatedRanking;

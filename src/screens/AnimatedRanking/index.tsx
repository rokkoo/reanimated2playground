import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {
  AnimatedLayout,
  SlideInLeft,
  Layout,
} from 'react-native-reanimated';
import Details from './componets/Details';

import Player from './componets/Player';
import players from './data';

const AnimatedRanking = () => {
  const [show, setShow] = useState(true);

  const handlePress = useCallback(() => setShow((show) => !show), []);

  return (
    <Animated.View layout={Layout.springify()}>
      <Text style={styles.text}>Ranking</Text>

      <AnimatedLayout>
        {show && (
          <Animated.View>
            {players.map((player, i) => (
              <Player {...player} index={i} key={i} />
            ))}
          </Animated.View>
        )}

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

        {!show && (
          <Animated.View>
            {players.map((player, i) => {
              return <Details {...player} index={i} key={i} />;
            })}
          </Animated.View>
        )}
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
});

export default AnimatedRanking;

import React, {useMemo} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Animated, {Layout, SlideInLeft} from 'react-native-reanimated';

interface PlayerProps {
  name: string;
  distance: number;
  index: number;
  key: number;
}

const Player: React.FC<PlayerProps> = ({name, distance, index}) => {
  const {width} = useWindowDimensions();

  const BAR_MAX_WIDTH = useMemo(() => width * 0.7, [width]);

  return (
    <Animated.View
      style={styles.container}
      entering={SlideInLeft.delay(index * 100)}
      layout={Layout.springify()}>
      <View
        style={[
          styles.bar,
          {
            width: BAR_MAX_WIDTH * (distance / 100),
          },
        ]}
      />
      <Text style={styles.text}>{name}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  bar: {
    height: 18,
    backgroundColor: '#884EA0',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  text: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '500',
    color: '#283747',
  },
});

export default Player;

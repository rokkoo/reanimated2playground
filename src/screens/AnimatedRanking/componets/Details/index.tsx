import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {Layout, SlideInLeft} from 'react-native-reanimated';

interface DetailsProps {
  name: string;
  distance: number;
  index: number;
}

const Details: React.FC<DetailsProps> = ({name, distance, index}) => {
  return (
    <Animated.View
      style={styles.detailsContainer}
      entering={SlideInLeft.delay(index * 100)}
      layout={Layout.springify()}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.distanceText}>{distance}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
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

export default Details;

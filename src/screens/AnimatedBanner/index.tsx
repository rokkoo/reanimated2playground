import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Colors} from '../../constants';
import data from './data';
import Banner from './components/Banner';
import UserActivity from './components/UserActivity';
import {AnimatedLayout} from 'react-native-reanimated';

const AnimatedBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your friends feed!</Text>
      <AnimatedLayout>
        <Banner />
      </AnimatedLayout>

      {data.map((user, i) => (
        <UserActivity {...user} key={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 16, marginTop: 8},
  title: {
    fontSize: 32,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 16,
  },
});
export default AnimatedBanner;

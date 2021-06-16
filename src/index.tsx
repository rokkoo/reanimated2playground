import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

import AnimatedLine from './screens/AnimatedLine';
import AnimatedRanking from './screens/AnimatedRanking';
import AnimatedBanner from './screens/AnimatedBanner';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedBanner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;

import React from 'react';
import {View, StyleSheet} from 'react-native';

import AnimatedLine from './screens/AnimatedLine';

function App() {
  return (
    <View style={styles.container}>
      <AnimatedLine />
    </View>
  );
}

const styles = StyleSheet.create({container: {flex: 1}});

export default App;

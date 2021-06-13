import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

import AnimatedLine from './screens/AnimatedLine';
import AnimatedRanking from './screens/AnimatedRanking';

function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <AnimatedRanking />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({container: {flex: 1}});

export default App;

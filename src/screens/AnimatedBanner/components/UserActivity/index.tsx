import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Shadow} from 'react-native-shadow-2';

import {Colors} from '../../../../constants';

interface UserActivityProps {
  user: string;
  listen: string;
}

const UserActivity: React.FC<UserActivityProps> = ({user, listen}) => {
  return (
    <Shadow distance={10} startColor={Colors.white} radius={4}>
      {/* <View style={styles.shadow} /> */}
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Text style={styles.userText}>@{user}</Text>
          <Text style={styles.listenText}>{listen}</Text>
        </View>
        <Icon name="play-circle" size={24} color={Colors.black} />
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginBottom: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: 'white',
  },
  shadow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    elevation: 10,
    opacity: 0.2,
  },
  userContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  userText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listenText: {
    color: Colors.gray,
  },
});
export default UserActivity;

import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants';

export default StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: '700',
  },
  statusContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  lottie: {
    width: 24,
    height: 24,
    marginBottom: -6,
  },
  statusText: {
    fontSize: 18,
    marginTop: 8,
    marginLeft: 8,
    color: Colors.black,
  },
  listenContainer: {
    alignItems: 'flex-start',
    alignContent: 'center',
    marginTop: 24,
  },
  listenSub: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 32,
  },
  listenText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
});

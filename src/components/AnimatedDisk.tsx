import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  runOnJS,
} from 'react-native-reanimated';
import {height, width} from '../utils/constants';

type ComponentProps = {
  color: string;
};

const AnimatedDisk: React.FC<ComponentProps> = ({color}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-height * 0.5);

  useEffect(() => {
    setTimeout(() => {
      //   translateX.value = withSpring();
      translateY.value = withSpring(0, {stiffness: 40, mass: 0.5});
      //   console.log('executes');
    }, 200);
  }, []);

  const toggleStyle = useAnimatedStyle(() => ({
    backgroundColor: color,
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    zIndex: 3,
    transform: [{translateX: translateX.value}, {translateY: translateY.value}],
  }));

  return <Animated.View style={toggleStyle}></Animated.View>;
};

const styles = StyleSheet.create({});

export default AnimatedDisk;

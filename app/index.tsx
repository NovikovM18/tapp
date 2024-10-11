import { View, Text, StyleSheet, Image, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Href, Link } from 'expo-router'
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import colors from '@/constants/colors';

const App = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      rotateValue.setValue(0);
      Animated.loop(
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 36000,
          useNativeDriver: true,
          easing: Easing.linear,
        })
      ).start();
    };
    startRotation();
  }, [rotateValue]);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const rotatingStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.image, rotatingStyle]}
        source={require('@/assets/images/react-logo.png')} >
      </Animated.Image>
      <Link href={"/home" as Href} style={[styles.link, {color: colors.blue}]}>home</Link>
      <Link href={"/signup" as Href} style={[styles.link, {color: colors.blue}]}>login</Link>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  image: {
    width: 300,
    height: 300,
  },
  link: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default App
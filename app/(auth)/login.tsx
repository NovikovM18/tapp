import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Href, Link } from 'expo-router';
import colors from '@/constants/colors';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Link href={"/signup" as Href} style={[styles.link, {color: colors.blue}]}>signup</Link>
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
  link: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default Login
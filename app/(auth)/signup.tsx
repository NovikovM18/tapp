import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Href, Link } from 'expo-router';
import colors from '@/constants/colors';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <Link href={"/login" as Href} style={[styles.link, {color: colors.blue}]}>login</Link>
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

export default Signup
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Href, Link } from 'expo-router'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Link href={"/home" as Href} style={styles.link}>to home</Link>
      <Link href={"/login" as Href} style={styles.link}>to login</Link>
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
    color: 'blue',
  }
});

export default App
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info</Text>
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
  title: {
    color: '#000',
    fontSize: 36,
  }
})

export default Info
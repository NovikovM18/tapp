import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import colors from '@/constants/colors'

const TabsLayout = () => {
  return (
    <>
    <Tabs
        screenOptions={{
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: colors.lightBlue,
            borderTopWidth: 1,
            borderTopColor: colors.darkBlue,
            height: 96,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={styles.tab}>
                <Image
                  style={styles.tabIcon}
                  source={require('@/assets/images/react-logo.png')}
                  resizeMode="contain"
                  tintColor={color}
                />
                <Text style={[styles.tabName,{ color: color }]}>Home</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="info"
          options={{
            title: "Info",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={styles.tab}>
                <Image
                  style={styles.tabIcon}
                  source={require('@/assets/images/react-logo.png')}
                  resizeMode="contain"
                  tintColor={color}
                />
                <Text style={[styles.tabName,{ color: color }]}>Info</Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  )
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabIcon: {
    width: 36,
    height: 36,
  },
  tabName: {
    fontSize: 22,
  }
})

export default TabsLayout
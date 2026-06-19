// import { Platform, Text, View } from 'react-native';

//  Checking The Platform

/*
export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to Macrozone!</Text>
      <Text>Running on: {Platform.OS}</Text>
    </View>
  );
}
*/

//  Checking The Device Information

/*
import * as Device from 'expo-device';

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to Macrozone!</Text>
      <Text>Running on: {Platform.OS}</Text>
      <Text>Device Model: {Device.modelName}</Text>
      <Text>Device Brand: {Device.brand}</Text>
      <Text>OS Version: {Device.osVersion}</Text>
    </View>
  );
}
  */

// Inline Styling
/*
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0',padding: 20 }}>
    <Text>Hello World</Text>
  </View>
  );
}
*/

//  StyleSheet API

/*
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <Text style={styles.date}>Monday, March 16</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  date: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 4,
    marginBottom: 30,
  },
});
*/


// Update Home Screen with Global Styles
/*
import { StyleSheet, Text, ScrollView } from 'react-native';
import { globalStyles } from '@/styles/global';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>My App</Text>
      <Text style={styles.date}>Monday, March 16</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 4,
    marginBottom: 30,
  },
});

*/

// Update Home Screen With Header

/*

import { globalStyles } from '@/styles/global';
import { Text, ScrollView } from 'react-native';
import HomeHeader from '@/components/HomeHeader';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>My App</Text>
      <HomeHeader />
    </ScrollView>
  );
}
  */

// Navigating Screens & Links

import { globalStyles } from '@/styles/global';
import { Link } from 'expo-router';
import { Text, ScrollView } from 'react-native';
import HomeHeader from '../../components/HomeHeader';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>My App</Text>
     <HomeHeader />
      
    </ScrollView>
  );
}
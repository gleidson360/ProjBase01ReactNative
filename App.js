import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import React from "react" 

export default function App() {
  return <ScrollView>
    <StatusBar barStyle="light-content" backgroundColor="#19282F"/>
    
    <Text> Oi, meu primeiro App! </Text>
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

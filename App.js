import { StyleSheet, Text, View, ScrollView, StatusBar, Image } from 'react-native';
import React from "react" 

export default function App() {
  return <ScrollView>
    <StatusBar barStyle="light-content" backgroundColor="#19282F"/>

    <View>
      <Text> Titulo do App </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </Text>

      <Image source={{ uri: "https://picsum.photos/200/200" }}/>
    </View>
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

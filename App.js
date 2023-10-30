import { StyleSheet, Text, View, ScrollView, StatusBar, Image } from 'react-native';
import React from "react" 

export default function App() {
  return <ScrollView style={ styles.tela }>
    <StatusBar barStyle="light-content" backgroundColor="#19282F"/>

    <View>
      <Text style={ styles.titulo }> Titulo do App </Text>
      <Text style={ styles.texto }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </Text>

      <Image style={ styles.imagem } source={{ uri: "https://picsum.photos/200/200" }}/>
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
  tela: {
    backgroundColor: "#19282F"
  },
  titulo: {
    color: "#FF6464",
    fontSize: 48,
    marginVertical: 32,
    textAlign: "center"
  },
  texto: {
    color: "#aaa",
    fontSize: 20,
    margin: 32
  },
  imagem: {
    height: 200,
    width: "100%" 
  }
});

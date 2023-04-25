import React from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Button, Image,  } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";


function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.filme} source={{ uri: props.filme.capa }} />
      <Text style={{ color: "black" }}> {props.filme.titulo} </Text>

    </View>
  );
}

const HomeScreen = () => {
  const clickHandler = () => {
    alert("Botão Clicado");
  };

  const [Filmes, setFilmes] = useState([
    {
      id: '1',
      capa: "https://m.media-amazon.com/images/I/71yJLhQekBL.jpg",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
    },
    
  ]);

  function deleteObject(id) {
    setFilmes(Filmes => Filmes.filter(filme => filme.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View style={styles.texto}>
        <Text>Seus Livros</Text>
      </View>
      <View style={styles.conteudo}>
        {Filmes.map((filme) => (
          <Card filme={filme} onPress={() => {
            deleteObject(filme.id)
          }} />
        ))}
        <Text>AAAAAAAAA</Text>
      </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}
        >
          <MaterialCommunityIcons name="book-plus-multiple" color={"#0f172a"} size={35} elevation={25}
       />
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#cbd5e1',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  conteudo: {
    backgroundColor: "white",
    flex: 3,
    flexDirection : 'row',
    width: "100%",
    textAlign: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: "#0284c7",
    height: 200,
    borderRadius: 10,
    margin: 20,
  },
  filme: {
    resizeMode: "stretch",
    width: "100%",
    height: '100%',
    borderRadius: 10,
  },
  texto: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

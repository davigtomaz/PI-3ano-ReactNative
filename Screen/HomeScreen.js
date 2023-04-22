import React from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Button, Image,  } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";


function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.filme} source={{ uri: props.filme.capa }} />
      <Text style={{ color: "black" }}> {props.filme.titulo} </Text>
      <Text style={{ fontSize: 12, color: 'black' }}> Autor: {props.filme.autor}</Text>
      <Button title="Remover" onPress={props.onPress} />
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
    {
      id: '2',
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
      </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}
        >
          <MaterialCommunityIcons name="book-plus-multiple" color={"#0f172a"} size={45} elevation={25}
       />
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#cbd5e1'
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 60,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    left: 120,
    bottom: 60,
  },
  conteudo: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  card: {
    backgroundColor: "#0284c7",
    width: "40%",
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

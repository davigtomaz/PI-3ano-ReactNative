import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';

function Card(props) {
  return (
    <View style={styles.card}>
      <View>
        <Image style={styles.filme} source={{ uri: props.filme.capa }} />
        <Text style={{ color: "black" }}> {props.filme.titulo} </Text>
      </View>
      <View>
        <Text style={{ color: "black" }}> {props.filme.descricao} </Text>
        <Text style={{ color: "black" }}> {props.filme.preco} </Text>
      </View>
    </View>
  );
}

const HomeScreen = () => {
  const clickHandler = () => {
    alert("Botão Clicado");
  };

  const [Filmes, setFilmes] = useState([
    {
      id: "1",
      capa: "https://m.media-amazon.com/images/I/71yJLhQekBL.jpg",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
      descricao: "Texto que eu quero no lado",
      preco: 24.99,
    },
    {
      id: "2",
      capa: "https://m.media-amazon.com/images/I/71yJLhQekBL.jpg",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
      descricao: "Texto que eu quero no lado",
      preco: 24.99,
    },
    {
      id: "3",
      capa: "https://m.media-amazon.com/images/I/71yJLhQekBL.jpg",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
      descricao: "Texto que eu quero no lado",
      preco: 24.99,
    },
    {
      id: "4",
      capa: "https://m.media-amazon.com/images/I/71yJLhQekBL.jpg",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
      descricao: "Texto que eu quero no lado",
      preco: 24.99,
    },
  ]);

  function deleteObject(id) {
    setFilmes((Filmes) => Filmes.filter((filme) => filme.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View>
        <View style={styles.texto}>
          <Text>Seus Livros</Text>
        </View>
        
          <View style={styles.conteudo}>
            {Filmes.map((filme) => (
              <Card
              key = {filme.id}  
              filme={filme}
                onPress={() => {
                  deleteObject(filme.id);
                }}
              />
            ))}
          </View>
        
      </View>
      </ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}
        >
          <MaterialCommunityIcons
            name="book-plus-multiple"
            color={"gray"}
            size={35}
            elevation={35}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#cbd5e1",
  },
  scrollView: {

    marginHorizontal: 9,
  },
  touchableOpacityStyle: {
    position: "absolute",
    bottom: 100,
    right: 30,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  conteudo: {
    width: "100%",
    textAlign: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "orange",
    height: 200,
    borderRadius: 10,
    flexDirection: "row",
    margin: 20,
  },
  filme: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  texto: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

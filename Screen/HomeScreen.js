import React, { useState } from "react";
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
import { StatusBar } from "expo-status-bar";
import { IconButton, TextInput } from "@react-native-material/core";

import Card from "../components/Card.js";
import ModalComponent from "../components/ModalComponent.js";

const HomeScreen = () => {
  const [modalActive, setModalActive] = useState(false);

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

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.texto}>Seus Livros</Text>
          </View>

          <View style={styles.conteudo}>
            {Filmes.map((filme) => (
              <Card key={filme.id} filme={filme} />
            ))}
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={openModal}
          style={styles.touchableOpacityStyle}
        >
          <MaterialCommunityIcons
            name="book-plus-multiple"
            color={"white"}
            size={35}
            elevation={35}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <ModalComponent modalVisible={modalActive} closeModal={closeModal} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#cad2c5",
  },
  scrollView: {
    marginHorizontal: 9,
  },
  touchableOpacityStyle: {
    position: "absolute",
    bottom: 100,
    right: 30,
    zIndex: 1,
    backgroundColor: "#2f3e46",
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
    texto: {
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    },
    });
    
    export default HomeScreen;

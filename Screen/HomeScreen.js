import React, { useState, useEffect } from "react";
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
import { StatusBar } from "expo-status-balivrort CategoriasService from '../slivroes/categorias.js';

import LivrosService from '../src/services/livros.js';



import Card from "../components/Card.js";
import ModalComponent from "../components/ModalComponent.js";

const HomeScreen = () => {
  const [modalActive, setModalActive] = useState(false);

  const [Livros, setLivros] = useState([]);

  useEffect(async () => {
    const data = await LivrosService.getAllLivros();
    setLivros(data);
  }, []);

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
            {Livros.map((Livro) => (
              <Card key={Livro.id} livro={livro} />
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
      <ModalComponent modalActive={modalActive} closeModal={closeModal} />
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

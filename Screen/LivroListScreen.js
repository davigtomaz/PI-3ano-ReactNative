import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,

  Image,
  ScrollView,
} from "react-native";
import { FAB } from 'react-native-paper'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import livroService from "../src/services/livros.js";

import Card from "../components/Card.js";
import ModalComponent from "../components/ModalComponent.js";

const LivroListScreen = () => {
  const [modalActive, setModalActive] = useState(false);

  const [Livros, setLivros] = useState([]);

  async function BuscarDados() {
    const data = await livroService.getAllLivros();
    setLivros(data);
  }

  useEffect(() => {
    BuscarDados();
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
              <Card key={Livro.id} livro={Livro} />
            ))}
          </View>
        </View>
      <View style={styles.buttons}>
        <FAB mode="contained" label="+">
          Adicionar
        </FAB>
      </View>
      </ScrollView>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
});

export default LivroListScreen;

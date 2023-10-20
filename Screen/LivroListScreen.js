import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  RefreshControl
} from "react-native";
import { FAB, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import livroService from "../src/services/livros.js";

import Card from "../components/Card.js";

export default function LivroListScreen({ navigation }) {

  const handleDeleteLivro = async (livro) => {
    try {
      await livroService.deleteLivro(livro);
      // Atualize o estado ou faça qualquer ação adicional após a exclusão
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      // Trate o erro conforme necessário
    }
  };


  const [refreshing, setRefreshing] = useState(false);
  const [Livros, setLivros] = useState([]);

  
  async function BuscarDados() {
    const data = await livroService.getAllLivros();
    setLivros(data);
  }
  
  useEffect(() => {
    BuscarDados();
  }, []);
  
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await BuscarDados();
    setRefreshing(false);
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.texto}>Seus Livros</Text>
          </View>
          <View style={styles.conteudo}>
            {Livros.map((Livro) => (
              <Card key={Livro.id} livro={Livro} onDelete={handleDeleteLivro} />
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <FAB
          mode="contained"
          icon="book-plus"
          color='white'
          style={styles.fab}
          onPress={() => navigation.navigate("LivroAdd")}
        >
        </FAB>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#cad2c5",
  },
  scrollView: {
    marginHorizontal: 9,
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
    position: "absolute",
    bottom: 100,
    right: 30,
    zIndex: 1,
    borderRadius: 20,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    backgroundColor: "#2f3e46",
  },
});

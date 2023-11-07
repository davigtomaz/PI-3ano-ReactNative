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


import emprestimoService from "../src/services/emprestimos.js"

import CardEmprestimo from "../components/CardEmprestimo.js";

export default function LoanScreen({ navigation }) {

  const handleDeleteEmprestimo = async (emprestimo) => {
    try {
      await emprestimoService.deleteEmprestimo(emprestimo);
     
    } catch (error) {
      console.error("Erro ao excluir emprestimo:", error);

    }
  };


  const [refreshing, setRefreshing] = useState(false);
  const [emprestimos, setEmprestimos] = useState([]);

  
  async function BuscarDados() {
    const data = await emprestimoService.getAllEmprestimos();
    setEmprestimos(data);
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
            <Text style={styles.texto}>Seus Empréstimos</Text>
          </View>
          <View style={styles.conteudo}>
            {emprestimos.map((Emprestimo) => (
              <CardEmprestimo key={Emprestimo.id} emprestimo={Emprestimo} onDelete={handleDeleteEmprestimo} />
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

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <View style={{ height: "100%", width: "45%" }}>
        <Image style={styles.filme} source={{ uri: props.livro.capa }} />
      </View>
      <View>
        <Text style={styles.texto1}> {props.livro.titulo} </Text>
        <Text style={styles.texto2}> Categoria: {props.livro.categoria} </Text>
        <Text style={styles.texto2}> Editora: {props.livro.editora} </Text>
        <Text style={styles.texto2}> Autores: {props.livro.autores} </Text>
        <Text style={styles.texto2}> Localização: {props.livro.localizacao} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "90%",
    backgroundColor: "#2f3e46",
    height: 200,
    borderRadius: 10,
    flexDirection: "row",
    margin: 20,
    color: "white",
    elevation: 15,
  },
  filme: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  texto1: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  texto2: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 13,
  },
});

export default Card;

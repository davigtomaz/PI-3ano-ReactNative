import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <View style={{ height: "100%", width: "45%" }}>
        <Image style={styles.filme} source={{ uri: props.filme.capa }} />
      </View>
      <View>
        <Text style={styles.texto}> {props.filme.descricao} </Text>
        <Text style={styles.texto}> {props.filme.preco} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "white",
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
    elevation: 20,
  },
  texto: {
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
});

export default Card;

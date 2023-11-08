import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FAB,  } from "react-native-paper";

function Card(props) {

  const handleDelete = () => {
    
    props.onDelete(props.emprestimo);
  };

  return (
    <View style={styles.card}>
      
      <View>
      <Text style={styles.texto2}> Livro: {props.emprestimo.nome_livro} </Text>
        <Text style={styles.texto2}>Emprestado para: {props.emprestimo.nome} </Text>
        <Text style={styles.texto2}>Contato: {props.emprestimo.contato}</Text>
        <Text style={styles.texto2}>Empréstimo : {props.emprestimo.inicio} </Text>
        <Text style={styles.texto2}>Devolução : {props.emprestimo.final} </Text>
        <View style={styles.buttons}>
        <FAB
          mode="contained"
          icon="trash-can-outline"
          color='white'
          style={styles.fab}
          onPress={handleDelete}
        >
        </FAB>
        </View>
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
    justifyContent: 'center',
    alignItems: "center"
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
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
  },
  fab: {
    backgroundColor: "#2f3e46",
    width: 40, 
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    position: "relative",
    left: 130,
    bottom: 5,
    zIndex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Card;

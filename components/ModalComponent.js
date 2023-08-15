import React from "react";
import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import { IconButton, TextInput } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MultiSelectComponent from "../components/MultiSelectComponent.js";
import Modal2  from "../components/ModalComponent2.js"

function ModalComponent2({ modalVisible2, closeModal2}){
  return (
    <Modal2
    animationType="fade"
    transparent={true}
    visible={modalVisible2}
    onRequestClose={closeModal2}>

    </Modal2>
  )
}


function ModalComponent({ modalVisible, closeModal }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.outerView}>
        <View style={styles.modalView}>
          <Text style={{ fontSize: 30, paddingBottom: 10 }}>
            Adicionar Livros
          </Text>
          <View style={styles.inputView}>
            <Text>Titulo</Text>
            <TextInput
              style={styles.TextInput}
              placeholderTextColor="#2f3e46"
            />
          </View>
          <View style={styles.inputView}>
            <Text>Autor</Text>
            <TextInput
              style={styles.TextInput}
              placeholder=""
              placeholderTextColor="#2f3e46"
            />
          </View>
          <View style={styles.inputView}>
            <Text>Localização</Text>
            <TextInput
              style={styles.TextInput}
              placeholderTextColor="#2f3e46"
            />
          </View>
          <View style={styles.inputView}>
            <Text>Editora</Text>
            <TextInput
              style={styles.TextInput}
              placeholderTextColor="#2f3e46"
            />
          </View>

          <TouchableOpacity onPress={modalVisible2} style={styles.loginBtn}>
            <Text style={{ color: "white" }}>Próxima</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalView: {
    width: 400,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
  },
  inputView: {
    backgroundColor: "white",
    width: "100%",
    height: 60,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    alignItems: "center",
  },
  loginBtn: {
    width: "50%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#2f3e46",
    color: "white",
    marginBottom: 10,
  },
});

export default ModalComponent;

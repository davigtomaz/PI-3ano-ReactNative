import React, { useEffect, useState } from "react";
import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import { IconButton, TextInput } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MultiSelectComponent from "../components/MultiSelectComponent.js";

function ModalComponent2({ modalVisible2, closeModal2 }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible2}
      onRequestClose={closeModal2}
    >
      <View style={styles.outerView}>
        <View style={styles.modalView}>
          <Text style={{ fontSize: 30, paddingBottom: 10 }}>Modal Interno</Text>
          {/* Conteúdo do segundo modal */}
          <TouchableOpacity onPress={closeModal2} style={styles.loginBtn}>
            <Text style={{ color: "white" }}>Fechar Modal Interno</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

function ModalComponent(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  useEffect(() => {
    if (props.modalActive) {
      openModal() 
    }
  },[props.modalActive])

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal2 = () => {
    setModalVisible2(true);
  };

  const closeModal2 = () => {
    setModalVisible2(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.outerView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 30, paddingBottom: 10 }}>Modal Externo</Text>
            {/* Conteúdo do primeiro modal */}
            <TouchableOpacity onPress={openModal2} style={styles.loginBtn}>
              <Text style={{ color: "white" }}>Abrir Modal Interno</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ModalComponent2 modalVisible2={modalVisible2} closeModal2={closeModal2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  outerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 400,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
  },
  openModalBtn: {
    padding: 10,
    backgroundColor: "#2f3e46",
    borderRadius: 5,
  },
  loginBtn: {
    width: "50%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#2f3e46",
    color: "white",
    marginBottom: 10,
  },
});

export default ModalComponent;
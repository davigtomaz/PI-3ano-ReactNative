import React from "react";
import { View, StyleSheet, Modal, Pressable, Text } from "react-native";
import { IconButton, TextInput } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          <TextInput
            style={{ margin: 16, width: 250, height: 100 }}
            label="ISBN"
            variant="standard"
            trailing={(props) => (
              <IconButton
                icon={(props) => (
                  <MaterialCommunityIcons name="magnify" {...props} />
                )}
                {...props}
              />
            )}
          />
          <Pressable onPress={closeModal}>
            <Text style={{ backgroundColor: "gray" }}>Fechar</Text>
          </Pressable>
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
    width: 300,
    height: 300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
  },
});

export default ModalComponent;

// PerfilScreen.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Stack, Avatar } from "@react-native-material/core";

import Graphic from "../components/Graphic.js";

const PerfilScreen = () => {
  return (
    <View>
        <Graphic />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#95d5b2",
    alignItems: "center",
    justifyContent: "center",
  },

  // Quero que a imagem do avatar fique maior

  avatar: {},
});

export default PerfilScreen;

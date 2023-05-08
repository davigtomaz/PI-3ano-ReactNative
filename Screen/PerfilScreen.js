// PerfilScreen.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";


const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Perfil!</Text>
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
});

export default PerfilScreen;

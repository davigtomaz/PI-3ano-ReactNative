// PerfilScreen.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Stack, Avatar } from "@react-native-material/core";

const PerfilScreen = () => {
  return (
    <Stack fill center spacing={4} style={styles.avatar}>
    <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
  </Stack>
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


  avatar:{
    
  }
});

export default PerfilScreen;

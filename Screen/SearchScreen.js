// SearchScreen.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pesquisar!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchScreen;

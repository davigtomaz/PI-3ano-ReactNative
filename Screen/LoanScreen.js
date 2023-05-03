// LoanScreen.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";


const LoanScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Empréstimos!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b7e4c7",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoanScreen;

import React from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const clickHandler = () => {
    alert("Botão Clicado");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}
        >
          <MaterialCommunityIcons name="plus-circle" color={"#000"} size={60} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#cbd5e1'
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    left: 120,
    bottom: 60,
  },
});

export default HomeScreen;

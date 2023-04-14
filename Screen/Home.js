import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Card,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function HomeScreen() {
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
            <MaterialCommunityIcons name="plus-circle" color={"#000"} size={60}   />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
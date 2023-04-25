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


import HomeScreen from "./Screen/HomeScreen.js";
import PerfilScreen from "./Screen/PerfilScreen.js";
import SearchScreen from "./Screen/SearchScreen.js";
import LoanScreen from "./Screen/LoanScreen.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "white",
          tabBarStyle: {
            height: 60,
            position: "absolute",
            bottom: 10,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: 'white',
            marginHorizontal: 15,
          },
        }}
      >
        <Tab.Screen
          name="Homee"
          component={HomeScreen}
          options={{
            headerStyle: {
              flex: '1',
              backgroundColor: '#f4511e',
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabBarIconStyle: { backgroundColor: "blue" },
            tabBarActiveTintColor: "orange",
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size, focused, }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Pesquisar"
          component={SearchScreen}
          options={{
            tabBarActiveTintColor: "blue",
            tabBarLabel: "Pesquisar",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Empréstimos"
          component={LoanScreen}
          options={{
            tabBarActiveTintColor: "red",
            tabBarLabel: "Empréstimos",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            tabBarActiveTintColor: "purple",
            tabBarLabel: "Conta",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    left: 120,
    bottom: 20,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 80,
    height: 70,
  },
});

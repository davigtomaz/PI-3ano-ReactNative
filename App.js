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
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShadowVisible: false,
          tabBarActiveTintColor: "white",
          tabBarStyle: {
            zIndex: 1,
            height: 60,
            borderTopColor: '#2f3e46', 
            position: "absolute",
            bottom: 10,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: '#2f3e46',
            marginHorizontal: 15,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#2f3e46',
            
            },
            tabScreenStyle: {
              zIndex: 1,
            },
            headerTintColor:'white',
            justifyContent: 'center',
            tabBarActiveTintColor: "#cad2c5",
            tabBarInactiveTintColor: 'white',
            headerShadowVisible: false,
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
            tabBarActiveTintColor: "#d8f3dc",
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
            tabBarActiveTintColor: "#b7e4c7",
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
            tabBarActiveTintColor: "#95d5b2",
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
    backgroundColor: "green",
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
    color: 'white'
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

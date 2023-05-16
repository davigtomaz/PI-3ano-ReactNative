import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../Screen/HomeScreen";
import SearchScreen from "../Screen/SearchScreen";
import LoanScreen from "../Screen/LoanScreen";
import PerfilScreen from "../Screen/PerfilScreen";

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
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
          tabBarIcon: ({ color, size, focused }) => (
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
  );
}

export default MainTabNavigator;

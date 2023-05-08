import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="bookshelf" color={'white'} size={200} style={styles.icon}  />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#2f3e46"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Senha"
          placeholderTextColor="#2f3e46"
          secureTextEntry={true}
          onChangeText={(senha) => setSenha(senha)}
        /> 
      </View> 
      <TouchableOpacity >
        <Text style={{color: 'white'}}> Esqueceu sua senha?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Entrar</Text> 
      </TouchableOpacity> 
      <TouchableOpacity >
        <Text  style={{color: 'white'}}>Criar uma conta</Text> 
      </TouchableOpacity>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f3e46",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginBottom: 50,
    shadowOpacity: 10,
    textShadowRadius: 10,
    textShadowOffset: {width: 10, height: 10},
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    elevation: 15,
  },
  TextInput: {
    height: 50,
    flex: 1,
    alignItems: "center",    
  },
  senhaE: {
    color: 'white',
   
  },
  CriarC: {
    color: 'white',
  
  },
  loginBtn: {
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "white",
    color: '#2f3e46',
    elevation: 10,
  },
  loginText: {
    color: '#2f3e46'
  }
});
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Button,
  Image,
  ScrollView,
  Modal,
  Pressable
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from 'expo-status-bar'; 

function Card(props) {
  return (
    <View style={styles.card}>
      <View style={{height: "100%", width: "45%"}}>
        <Image style={styles.filme} source={{ uri: props.filme.capa }} />
      </View>
      <View>
        <Text style={styles.texto}> {props.filme.descricao} </Text>
        <Text style={styles.texto}> {props.filme.preco} </Text>
      </View>
    </View>
  );
}

// Faça uma function que retorne o Modal

 
const HomeScreen = () => {
  const [modalActive, setModalActive] = useState(false);

  const [Filmes, setFilmes] = useState([
    {
      id: "1",
      capa: "https://m.media-amazon.com/images/I/71yJLhQekBL.jpg",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
      descricao: "Texto que eu quero no lado",
      preco: 24.99,
    },
    {
      id: "2",
      capa: "https://m.media-amazon.com/images/I/71yJLhQekBL.jpg",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
      descricao: "Texto que eu quero no lado",
      preco: 24.99,
    },
    {
      id: "3",
      capa: "https://m.media-amazon.com/images/I/71yJLhQekBL.jpg",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
      descricao: "Texto que eu quero no lado",
      preco: 24.99,
    },
    {
      id: "4",
      capa: "https://m.media-amazon.com/images/I/71yJLhQekBL.jpg",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
      descricao: "Texto que eu quero no lado",
      preco: 24.99,
    },
  ]);
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.texto}>Seus Livros</Text>
        </View>
        
          <View style={styles.conteudo}>
            {Filmes.map((filme) => (
              <Card
              key = {filme.id}  
              filme={filme}
                onPress={() => {
                  deleteObject(filme.id);
                }}
              />
            ))}
          </View>
        
      </View>
      </ScrollView>
      <View >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setModalActive(true)}
          style={styles.touchableOpacityStyle}
        >
          <MaterialCommunityIcons
            name="book-plus-multiple"
            color={"white"}
            size={35}
            elevation={35}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <Modal
       animationType="fade"
       transparent={true}
       visible={modalActive}
       onRequestClose={() => setModalActive(false)}
      >
      <View style={styles.outerView}>
          <View style={styles.modalView}>
            <Text>Modal</Text>
          <Pressable onPress={() => setModalActive(false)}>
            <Text>Fechar</Text>
          </Pressable>
          </View>
      </View>
      </Modal>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    
  },
  outerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalView: {
    width: 300,
    height: 300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
  },
  scrollView: {
    marginHorizontal: 9,
  },
  touchableOpacityStyle: {
    position: "absolute",
    bottom: 100,
    right: 30,
    zIndex: 1,
    backgroundColor: "#1e293b",
    borderRadius: 20,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  conteudo: {
    width: "100%",
    textAlign: "center",
    
  },
  card: {
    width: "90%",
    backgroundColor: "white",
    height: 200,
    borderRadius: 10,
    flexDirection: "row",
    margin: 20,
    color: 'white',
    elevation: 15,
  },
  filme: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    elevation: 20,
  },
  texto: {
    justifyContent: "center",
    alignItems: "center",
    color: 'black',
  },
});

export default HomeScreen;

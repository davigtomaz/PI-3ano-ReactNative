import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { useTheme } from 'react-native-paper';

import imageService from '../src/services/images';
import livroService from '../src/services/livros';


export default function MovieAdd({ navigation }) {
  const theme = useTheme();

  const [isFocus, setIsFocus] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [livro, setLivro] = useState({
    titulo: '',  
    categoria: [],
    editora: null,
    autores: [],
    localizacao: null,
  });


  

  const save = async () => {
    const image = await imageService.uploadImage(file);
    setLivro((livro) => ({
      ...livro,
      capa_attachment_key: image.attachment_key,
    }));
    const data = await livroService.saveLivro(livro);
    navigation.goBack();
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setFile(result.assets[0]);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={styles.image}
          onPress={pickImageAsync}
        />
      )}
      {!selectedImage && (
        <View style={styles.buttons}>
          <Button mode="contained" onPress={pickImageAsync}>
            Selecionar imagem
          </Button>
        </View>
      )}
      <View style={{ marginHorizontal: 10 }}>
        <TextInput
          label="Título"
          style={{ marginBottom: 10 }}
          onChangeText={(text) =>
            setLivro((livro) => ({ ...livro, titulo: text }))
          }
        />
        <TextInput
          label="Categoria(s)"
          style={{ marginBottom: 10 }}
          onChangeText={(text) =>
            setLivro((livro) => ({ ...livro, categoria: text }))
          }
        />
        <TextInput
          label="Editora"
          style={{ marginBottom: 10 }}
          onChangeText={(text) =>
            setLivro((livro) => ({ ...livro, editora: text }))
          }
        />
        <TextInput
          label="Autor(s)"
          style={{ marginBottom: 10 }}
          onChangeText={(text) =>
            setLivro((livro) => ({ ...livro, autores: text }))
          }
        />
        <TextInput
          label="Localização"
          style={{ marginBottom: 10 }}
          onChangeText={(text) =>
            setLivro((livro) => ({ ...livro, localizacao: text }))
          }
        />
        
      </View>
      <View style={styles.buttons}>
        <Button mode="contained" onPress={save}>
          Adicionar
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },

  placeholderStyle: {
    fontSize: 14,
    color: '#000a',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
  },
});

import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";

import { useTheme } from "react-native-paper";

import imageService from "../src/services/images";
import livroService from "../src/services/livros";
import categoriaService from "../src/services/categorias";
import editoraService from "../src/services/editoras";
import autorService from "../src/services/autor";
import localizacaoService from "../src/services/localizacao";

export default function MovieAdd({ navigation }) {
  const theme = useTheme();

  const [isFocus, setIsFocus] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [livro, setLivro] = useState({
    titulo: "",
    categoria: null,
    editora: null,
    autores: null,
    localizacao: null,
  });

  const [categorias, setCategorias] = useState([]);

  const getCategorias = async () => {
    const data = await categoriaService.getAllCategorias();
    setCategorias(data);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  const [editoras, setEditoras] = useState([]);

  const getEditoras = async () => {
    const data = await editoraService.getAllEditoras();
    setEditoras(data);
  };

  useEffect(() => {
    getEditoras();
  }, []);

  const [autores, setAutores] = useState([]);

  const getAutores = async () => {
    const data = await autorService.getAllAutores();
    setAutores(data);
  };

  useEffect(() => {
    getAutores();
  }, []);

  const [localizacao, setLocalizacao] = useState([]);

  const getLocalizacao = async () => {
    const data = await localizacaoService.getAllLocalizacao();
    setLocalizacao(data);
  };

  useEffect(() => {
    getLocalizacao();
  }, []);

  
  
  const save = async () => {
    const image = await imageService.uploadImage(file);
    setLivro((livro) => ({
      ...livro,
      categoria: livro.categoria ? [livro.categoria] : [],
      autores: livro.autores ? [livro.autores] : [],
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
      alert("You did not select any image.");
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
        <Dropdown
          style={[
            styles.dropdown,
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
            isFocus && {
              borderBottomColor: theme.colors.primary,
              borderBottomWidth: 1.5,
            },
          ]}
          containerStyle={[
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
          ]}
          placeholderStyle={styles.placeholderStyle}
          itemContainerStyle={[
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
          ]}
          selectedTextStyle={styles.selectedTextStyle}
          data={categorias}
          maxHeight={300}
          labelField="nome"
          valueField="id"
          placeholder={isFocus ? "..." : "Selecionar Categoria"}
          value={livro.categoria}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setLivro((livro) => ({ ...livro, categoria: item.id }));
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={[
            styles.dropdown,
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
            isFocus && {
              borderBottomColor: theme.colors.primary,
              borderBottomWidth: 1.5,
            },
          ]}
          containerStyle={[
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
          ]}
          placeholderStyle={styles.placeholderStyle}
          itemContainerStyle={[
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
          ]}
          selectedTextStyle={styles.selectedTextStyle}
          data={editoras}
          maxHeight={300}
          labelField="nome"
          valueField="id"
          placeholder={isFocus ? "..." : "Selecionar Editora"}
          value={livro.editora}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setLivro((livro) => ({ ...livro, editora: item.id }));
            setIsFocus(false);
          }}
        />
         <Dropdown
          style={[
            styles.dropdown,
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
            isFocus && {
              borderBottomColor: theme.colors.primary,
              borderBottomWidth: 1.5,
            },
          ]}
          containerStyle={[
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
          ]}
          placeholderStyle={styles.placeholderStyle}
          itemContainerStyle={[
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
          ]}
          selectedTextStyle={styles.selectedTextStyle}
          data={autores}
          maxHeight={300}
          labelField="nome"
          valueField="id"
          placeholder={isFocus ? "..." : "Selecionar Autor"}
          value={livro.autores}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setLivro((livro) => ({ ...livro, autores: item.id }));
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={[
            styles.dropdown,
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
            isFocus && {
              borderBottomColor: theme.colors.primary,
              borderBottomWidth: 1.5,
            },
          ]}
          containerStyle={[
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
          ]}
          placeholderStyle={styles.placeholderStyle}
          itemContainerStyle={[
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
          ]}
          selectedTextStyle={styles.selectedTextStyle}
          data={localizacao}
          maxHeight={300}
          labelField="nome"
          valueField="id"
          placeholder={isFocus ? "..." : "Selecionar Localização"}
          value={livro.localizacao}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setLivro((livro) => ({ ...livro, localizacao: item.id }));
            setIsFocus(false);
          }}
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
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  dropdown: {
    height: 55,
    borderBottomColor: "#000a",
    borderBottomWidth: 0.8,
    borderTopRadius: 4,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 14,
    color: "#000a",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
  },
});

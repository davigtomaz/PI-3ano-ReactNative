import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Image, View, ScrollView, Pressable } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import { useTheme } from "react-native-paper";

import livrosService from "../src/services/livros";
import emprestimoService from "../src/services/emprestimos";


export default function LoanAdd({ navigation }) {
  const theme = useTheme();

  const [isFocus, setIsFocus] = useState(false);
  const [emprestimo, setEmprestimo] = useState({
    nome: "",
    contato: "",
    inicio: new Date(),
    final: new Date(),
    nome_livro: null,
  });

  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    const data = await livrosService.getAllLivros();
    setLivros(data);
  };

  useEffect(() => {
    getLivros();
  }, []);

  const save = async () => {

    const inicioFormatado = emprestimo.inicio.toISOString().substring(0, 10);
    const finalFormatado = emprestimo.final.toISOString().substring(0, 10);

    
    const emprestimoFormatado = {
      ...emprestimo,
      inicio: inicioFormatado,
      final: finalFormatado,
    };


    const data = await emprestimoService.saveEmprestimo(emprestimoFormatado);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginHorizontal: 10 }}>
        <TextInput
          label="Nome"
          style={{ marginBottom: 5 }}
          onChangeText={(text) =>
            setEmprestimo((emprestimo) => ({ ...emprestimo, nome: text }))
          }
        />
        <TextInput
          label="Contato"
          style={{ marginBottom: 5 }}
          onChangeText={(text) =>
            setEmprestimo((emprestimo) => ({ ...emprestimo, contato: text }))
          }
        />
        <TextInput
          label="Inicio"
          style={{ marginBottom: 5 }}
          onChangeText={(date) =>
            setEmprestimo((emprestimo) => ({
              ...emprestimo,
              inicio: date ? new Date(date) : new Date(),
            }))
          }
        />
        <TextInput
          label="Final"
          style={{ marginBottom: 5 }}
          onChangeText={(date) =>
            setEmprestimo((emprestimo) => ({
              ...emprestimo,
              final: date ? new Date(date) : new Date(),
            }))
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
          data={livros}
          maxHeight={300}
          labelField="titulo"
          valueField="id"
          placeholder={isFocus ? "..." : "Selecionar o Livro"}
          value={emprestimo.nome_livro}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setEmprestimo((emprestimo) => ({
              ...emprestimo,
              nome_livro: item.id,
            }));
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

  dateComponent: {
    width: 350,
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

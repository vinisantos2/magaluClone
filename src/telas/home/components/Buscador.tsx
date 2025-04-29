import { useState } from "react";
import { TextInput, View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CORES } from "../../../constants/Cores";

const produtos = [
    "Smartphone Samsung",
    "iPhone 14",
    "Notebook Dell",
    "Smart TV LG",
    "Fone de Ouvido JBL",
    "Cafeteira Nespresso",
];

export default function BuscadorProduto() {
    const [query, setQuery] = useState("");
    const [resultados, setResultados] = useState([]);

    const buscar = (texto) => {
        setQuery(texto);
        if (texto.length > 1) {
            const filtrados = produtos.filter((item) =>
                item.toLowerCase().includes(texto.toLowerCase())
            );
            setResultados(filtrados);
        } else {
            setResultados([]);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Ionicons name="search" size={20} color="#888" />
                <TextInput
                    style={styles.input}
                    placeholder="Buscar produtos..."
                    value={query}
                    onChangeText={buscar}
                />
            </View>
            {resultados.length > 0 && (
                <FlatList
                    data={resultados}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.resultItem}>
                            <Text style={styles.resultText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: CORES.MAGALU,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#FFF",
        backgroundColor: CORES.BRANCO,
        borderRadius: 30,
        marginTop: 10

    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
        borderRadius: 30,

    },
    resultItem: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    resultText: {
        color: "#333",
    },
});

import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BuscadorProduto from "./components/Buscador";
import CarrosselPropagandas from "./components/CarrosselPropagandas";
import Produtos from "./views/produtos";

export default function TelaHome() {
    return (
        <View style={styles.container}>
            <BuscadorProduto />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <CarrosselPropagandas />
                <View style={styles.produtosContainer}>
                    <Produtos />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    scrollContent: {
        paddingBottom: 20,
    },
    produtosContainer: {
        flexGrow: 1,
    },
});

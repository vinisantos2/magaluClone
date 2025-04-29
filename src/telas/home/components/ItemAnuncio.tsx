import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image, Text, View, StyleSheet } from "react-native";
import { ROTAS } from "../../../rotas/Rotas";
import { Anuncio } from "../../../models/Anuncio";



export default function ItemAnuncio({ item }: { item: Anuncio }) {
    const navigation = useNavigation();

    function abrirTelaAnuncio() {
        navigation.navigate(ROTAS.ANUNCIO, { item });
    }

    return (
        <TouchableOpacity onPress={abrirTelaAnuncio} style={styles.card}>
            <Image source={{ uri: item.imagemUrl }} style={styles.image} />
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.valor}>R$ {item.valor}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: 160,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    descricao: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
    },
    valor: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#e60000",
        marginVertical: 4,
    },
});

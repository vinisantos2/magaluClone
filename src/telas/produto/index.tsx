import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Anuncio } from "../../models/Anuncio";

export default function TelaAnuncio({ route }) {
    const { item } = route.params ? route.params : {};
    const anuncio: Anuncio = item;

    return (
        <View style={styles.container}>
            {/* Imagem do Produto */}
            <Image source={{ uri: anuncio.imagemUrl }} style={styles.image} />

            {/* Informações */}
            <View style={styles.infoContainer}>
                <Text style={styles.descricao}>{anuncio.descricao}</Text>
                <Text style={styles.valor}>R$ {anuncio.valor}</Text>
                <Text style={styles.pagamento}>{anuncio.detalhesDoPagamento}</Text>

                {/* Botão de Comprar */}
                <TouchableOpacity style={styles.botaoComprar}>
                    <Text style={styles.botaoTexto}>Comprar Agora</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 50,
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
        backgroundColor: "#f5f5f5",
        borderBottomLeftRadius: 20, // Bordas arredondadas para um visual mais suave
        borderBottomRightRadius: 20,
    },
    infoContainer: {
        padding: 16,
    },
    descricao: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    valor: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#e60000",
        marginBottom: 8,
    },
    pagamento: {
        fontSize: 14,
        color: "#555",
        marginBottom: 20,
    },
    botaoComprar: {
        backgroundColor: "#2D6A4F",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        shadowColor: "#000", // Adiciona sombra no botão
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3, // Eleva o botão acima dos outros elementos
    },
    botaoTexto: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

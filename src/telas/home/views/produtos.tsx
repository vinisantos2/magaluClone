import { StyleSheet, View } from "react-native";
import { LISTA_PRODUTOS } from "../../../constants/ListaProdutos";
import ItemAnuncio from "../components/ItemAnuncio";
import { useNavigation } from "@react-navigation/native";
import { ROTAS } from "../../../rotas/Rotas";

export default function Produtos() {
  
    return (
        <View style={styles.container}>
            {LISTA_PRODUTOS.map((anuncio) => (
                <ItemAnuncio
              
                    key={anuncio.id} item={anuncio} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingBottom: 20, // Para evitar que fique colado no final
    },
});

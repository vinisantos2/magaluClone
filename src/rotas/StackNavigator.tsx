import { createStackNavigator } from "@react-navigation/stack";
import { ROTAS } from "./Rotas";
import TelaHome from "../telas/home";
import TelaAnuncio from "../telas/produto";

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            id={undefined}

            initialRouteName={ROTAS.HOME}
            screenOptions={{ headerShown: false }} // Oculta o header globalmente
        >
            <Stack.Screen name={ROTAS.HOME} component={TelaHome} />
            <Stack.Screen name={ROTAS.ANUNCIO} component={TelaAnuncio} />
        </Stack.Navigator>
    );
}

import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";

import theme from "./src/global/styles/theme";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BemVindoScreen, ListaScreen, DetalhesScreen } from "./src/screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="auto"
        backgroundColor={theme.colors.background.primary}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BemVindoScreen" component={BemVindoScreen} />
          <Stack.Screen name="ListaScreen" component={ListaScreen} />
          <Stack.Screen name="DetalhesScreen" component={DetalhesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

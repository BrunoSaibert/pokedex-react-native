import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";

import theme from "./src/global/styles/theme";

import { BemVindoScreen, ListaScreen, DetalhesScreen } from "./src/screens";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="auto"
        backgroundColor={theme.colors.background.primary}
      />

      <BemVindoScreen />
    </ThemeProvider>
  );
}

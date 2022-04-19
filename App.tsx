import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";

import theme from "./src/global/styles/theme";

import { WelcomeScreen, HomeScreen, DetailsScreen } from "./src/screens";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" backgroundColor="#F76D6D" />

      <WelcomeScreen />
    </ThemeProvider>
  );
}

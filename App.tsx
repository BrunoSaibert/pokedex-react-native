import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import theme from "./src/global/styles/theme";

import { Routes } from "./src/routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="auto"
        backgroundColor={theme.colors.background.primary}
      />

      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

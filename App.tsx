import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

import { WelcomeScreen, HomeScreen, DetailsScreen } from "./src/screens";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}

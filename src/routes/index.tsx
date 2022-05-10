import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BemVindoScreen, ListaScreen } from "../screens";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="BemVindoScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BemVindoScreen" component={BemVindoScreen} />
      <Stack.Screen name="ListaScreen" component={ListaScreen} />
    </Stack.Navigator>
  );
}

import { NativeStackScreenProps } from "@react-navigation/native-stack";

type NavigationParamList = {
  BemVindoScreen: undefined;
  ListaScreen: undefined;
  DetalhesScreen: { id: number };
};

export type NavigationScreenProps<T extends keyof NavigationParamList> =
  NativeStackScreenProps<NavigationParamList, T>;

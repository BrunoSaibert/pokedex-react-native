import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";

import pokebolaAnimation from "./pokebola.json";

import * as S from "./WelcomeScreen.styles";

export function WelcomeScreen() {
  return (
    <S.Container>
      <StatusBar style="light" translucent />

      <S.Content>
        <S.WrapperAnimation>
          <AnimatedLottieView autoPlay source={pokebolaAnimation} loop />
        </S.WrapperAnimation>
        <S.Title>Bem vindo</S.Title>
        <S.Paragraph>Encontre todos os pokémons em um só lugar</S.Paragraph>
      </S.Content>

      <S.Button activeOpacity={0.7}>
        <S.ButtonText>Entrar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}

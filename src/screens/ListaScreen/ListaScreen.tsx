import React from "react";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";

import { CardPokemon } from "../../components/CardPokemon";

import * as S from "./ListaScreen.styles";

export function ListaScreen() {
  return (
    <S.Container>
      <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

      <S.ScrollView>
        <S.Title>Pokédex</S.Title>
        <S.Paragraph>Encontre todos os pokémons em um só lugar.</S.Paragraph>

        <S.Content>
          <CardPokemon id={1} nome="Bruno" cor="#e48" />
        </S.Content>
      </S.ScrollView>
    </S.Container>
  );
}

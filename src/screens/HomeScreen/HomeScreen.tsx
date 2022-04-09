import React from "react";
import { StatusBar } from "expo-status-bar";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";
import pokeballCardImage from "../../global/assets/Pokeball.png";
import dotsCardImage from "../../global/assets/Pattern.png";

import * as S from "./HomeScreen.styles";

export function HomeScreen() {
  return (
    <S.Container>
      <StatusBar style="light" translucent />

      <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

      <S.ScrollView>
        <S.Title>Pokédex</S.Title>
        <S.Paragraph>Encontre todos os pokémons em um só lugar.</S.Paragraph>

        <S.Content>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <S.Card key={item} activeOpacity={0.9}>
              <S.CardLeft>
                <S.CardDotsBackgroundImage source={dotsCardImage} />

                <S.CardPokemonNumber>#001</S.CardPokemonNumber>
                <S.CardPokemonName>Bulbasaur</S.CardPokemonName>

                <S.CardPokemonTypeList>
                  <S.CardPokemonTypeBadge>
                    <S.CardPokemonType>Grass</S.CardPokemonType>
                  </S.CardPokemonTypeBadge>

                  <S.CardPokemonTypeBadge>
                    <S.CardPokemonType>Poison</S.CardPokemonType>
                  </S.CardPokemonTypeBadge>
                </S.CardPokemonTypeList>
              </S.CardLeft>

              <S.CardRigth>
                <S.CardPokemonBackgroundImage source={pokeballCardImage} />

                <S.CardPokemonImage
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item}.png`,
                  }}
                />
              </S.CardRigth>
            </S.Card>
          ))}
        </S.Content>
      </S.ScrollView>
    </S.Container>
  );
}

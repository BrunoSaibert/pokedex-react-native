import React from "react";
import { View } from "react-native";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg.png";
import dotsCardImage from "../../global/assets/Pattern.png";

import * as S from "./DetailsScreen.styles";

export function DetailsScreen() {
  return (
    <S.Container>
      <S.Header>
        <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

        <S.DotsBackgroundImage source={dotsCardImage} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <S.PokemonName>Bulbasaur</S.PokemonName>
            <S.TypeList>
              <S.Badge>
                <S.BadgeText>Grass</S.BadgeText>
              </S.Badge>

              <S.Badge>
                <S.BadgeText>Poison</S.BadgeText>
              </S.Badge>
            </S.TypeList>
          </View>
          <S.PokemonNumber>#001</S.PokemonNumber>
        </View>

        <S.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`,
          }}
        />
      </S.Header>

      <S.Content>
        <S.ScrollView>
          <S.Paragraph>
            Bulbasaur can be seen napping in bright sunlight. There is a seed on
            its back. By soaking up the sun's rays, the seed grows progressively
            larger.
          </S.Paragraph>
        </S.ScrollView>
      </S.Content>
    </S.Container>
  );
}

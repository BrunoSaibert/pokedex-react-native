import React from "react";
import { View } from "react-native";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg.png";
import dotsCardImage from "../../global/assets/Pattern.png";
import backImage from "../../global/assets/Back.png";

import * as S from "./DetalhesScreen.styles";

export function DetalhesScreen() {
  return (
    <S.Container>
      <S.Header>
        <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

        <S.DotsBackgroundImage source={dotsCardImage} />

        <S.GoBackButton>
          <S.GoBackImage source={backImage} />
        </S.GoBackButton>

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
          <S.Paragraph>Status</S.Paragraph>

          <S.Status>
            <S.Type>HP</S.Type>
            <S.Value>45</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type>Attack</S.Type>
            <S.Value>49</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type>Defense</S.Type>
            <S.Value>49</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type>Sp. Atk</S.Type>
            <S.Value>65</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type>Sp Def</S.Type>
            <S.Value>65</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type>Speed</S.Type>
            <S.Value>45</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type>Total</S.Type>
            <S.Value>318</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>
        </S.ScrollView>
      </S.Content>
    </S.Container>
  );
}

import React from "react";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";
import pokeballCardImage from "../../global/assets/Pokeball.png";
import dotsCardImage from "../../global/assets/Pattern.png";

import * as S from "./HomeScreen.styles";

export function HomeScreen() {
  return (
    <S.Container>
      <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

      <S.ScrollView>
        <S.Title>Pokédex</S.Title>
        <S.Paragraph>Encontre todos os pokémons em um só lugar.</S.Paragraph>

        <S.Content>
          <S.Card activeOpacity={0.9}>
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
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`,
                }}
              />
            </S.CardRigth>
          </S.Card>

          <S.Card activeOpacity={0.9}>
            <S.CardLeft>
              <S.CardDotsBackgroundImage source={dotsCardImage} />

              <S.CardPokemonNumber>#002</S.CardPokemonNumber>
              <S.CardPokemonName>Ivysaur</S.CardPokemonName>

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
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`,
                }}
              />
            </S.CardRigth>
          </S.Card>

          <S.Card activeOpacity={0.9}>
            <S.CardLeft>
              <S.CardDotsBackgroundImage source={dotsCardImage} />

              <S.CardPokemonNumber>#003</S.CardPokemonNumber>
              <S.CardPokemonName>Venusaur</S.CardPokemonName>

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
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png`,
                }}
              />
            </S.CardRigth>
          </S.Card>

          <S.Card activeOpacity={0.9}>
            <S.CardLeft>
              <S.CardDotsBackgroundImage source={dotsCardImage} />

              <S.CardPokemonNumber>#004</S.CardPokemonNumber>
              <S.CardPokemonName>Charmander</S.CardPokemonName>

              <S.CardPokemonTypeList>
                <S.CardPokemonTypeBadge>
                  <S.CardPokemonType>Fire</S.CardPokemonType>
                </S.CardPokemonTypeBadge>
              </S.CardPokemonTypeList>
            </S.CardLeft>

            <S.CardRigth>
              <S.CardPokemonBackgroundImage source={pokeballCardImage} />

              <S.CardPokemonImage
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png`,
                }}
              />
            </S.CardRigth>
          </S.Card>

          <S.Card activeOpacity={0.9}>
            <S.CardLeft>
              <S.CardDotsBackgroundImage source={dotsCardImage} />

              <S.CardPokemonNumber>#005</S.CardPokemonNumber>
              <S.CardPokemonName>Charmeleon</S.CardPokemonName>

              <S.CardPokemonTypeList>
                <S.CardPokemonTypeBadge>
                  <S.CardPokemonType>Fire</S.CardPokemonType>
                </S.CardPokemonTypeBadge>
              </S.CardPokemonTypeList>
            </S.CardLeft>

            <S.CardRigth>
              <S.CardPokemonBackgroundImage source={pokeballCardImage} />

              <S.CardPokemonImage
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png`,
                }}
              />
            </S.CardRigth>
          </S.Card>

          <S.Card activeOpacity={0.9}>
            <S.CardLeft>
              <S.CardDotsBackgroundImage source={dotsCardImage} />

              <S.CardPokemonNumber>#006</S.CardPokemonNumber>
              <S.CardPokemonName>Charizard</S.CardPokemonName>

              <S.CardPokemonTypeList>
                <S.CardPokemonTypeBadge>
                  <S.CardPokemonType>Fire</S.CardPokemonType>
                </S.CardPokemonTypeBadge>

                <S.CardPokemonTypeBadge>
                  <S.CardPokemonType>Flying</S.CardPokemonType>
                </S.CardPokemonTypeBadge>
              </S.CardPokemonTypeList>
            </S.CardLeft>

            <S.CardRigth>
              <S.CardPokemonBackgroundImage source={pokeballCardImage} />

              <S.CardPokemonImage
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png`,
                }}
              />
            </S.CardRigth>
          </S.Card>

          <S.Card activeOpacity={0.9}>
            <S.CardLeft>
              <S.CardDotsBackgroundImage source={dotsCardImage} />

              <S.CardPokemonNumber>#007</S.CardPokemonNumber>
              <S.CardPokemonName>Squirtle</S.CardPokemonName>

              <S.CardPokemonTypeList>
                <S.CardPokemonTypeBadge>
                  <S.CardPokemonType>Water</S.CardPokemonType>
                </S.CardPokemonTypeBadge>
              </S.CardPokemonTypeList>
            </S.CardLeft>

            <S.CardRigth>
              <S.CardPokemonBackgroundImage source={pokeballCardImage} />

              <S.CardPokemonImage
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png`,
                }}
              />
            </S.CardRigth>
          </S.Card>

          <S.Card activeOpacity={0.9}>
            <S.CardLeft>
              <S.CardDotsBackgroundImage source={dotsCardImage} />

              <S.CardPokemonNumber>#008</S.CardPokemonNumber>
              <S.CardPokemonName>Wartortle</S.CardPokemonName>

              <S.CardPokemonTypeList>
                <S.CardPokemonTypeBadge>
                  <S.CardPokemonType>Water</S.CardPokemonType>
                </S.CardPokemonTypeBadge>
              </S.CardPokemonTypeList>
            </S.CardLeft>

            <S.CardRigth>
              <S.CardPokemonBackgroundImage source={pokeballCardImage} />

              <S.CardPokemonImage
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png`,
                }}
              />
            </S.CardRigth>
          </S.Card>

          <S.Card activeOpacity={0.9}>
            <S.CardLeft>
              <S.CardDotsBackgroundImage source={dotsCardImage} />

              <S.CardPokemonNumber>#009</S.CardPokemonNumber>
              <S.CardPokemonName>Blastoise</S.CardPokemonName>

              <S.CardPokemonTypeList>
                <S.CardPokemonTypeBadge>
                  <S.CardPokemonType>Water</S.CardPokemonType>
                </S.CardPokemonTypeBadge>
              </S.CardPokemonTypeList>
            </S.CardLeft>

            <S.CardRigth>
              <S.CardPokemonBackgroundImage source={pokeballCardImage} />

              <S.CardPokemonImage
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png`,
                }}
              />
            </S.CardRigth>
          </S.Card>
        </S.Content>
      </S.ScrollView>
    </S.Container>
  );
}

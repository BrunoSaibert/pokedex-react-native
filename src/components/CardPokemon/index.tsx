import React from "react";

import pokeballCardImage from "../../global/assets/Pokeball.png";
import dotsCardImage from "../../global/assets/Pattern.png";

import * as S from "./styles";

export type CardPokemonProps = {
  id: number;
  nome: string;
  cor: string;
};

export function CardPokemon({ cor, id, nome }: CardPokemonProps) {
  return (
    <S.Card activeOpacity={0.9} cor={cor}>
      <S.CardLeft>
        <S.CardDotsBackgroundImage source={dotsCardImage} />

        <S.CardPokemonNumber>
          #{id.toString().padStart(3, "0")}
        </S.CardPokemonNumber>
        <S.CardPokemonName>{nome}</S.CardPokemonName>

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
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
        />
      </S.CardRigth>
    </S.Card>
  );
}

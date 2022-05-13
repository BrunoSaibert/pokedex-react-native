import React, { useState, useEffect } from "react";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";
import { CardPokemon } from "../../components/CardPokemon";
import { api } from "../../api";

import * as S from "./ListaScreen.styles";

type PokemonProps = {
  id: number;
  name: string;
  type: string[];
};

export function ListaScreen() {
  const [listaPokemon, setListaPokemon] = useState<PokemonProps[]>([]);

  useEffect(() => {
    async function carregarLista() {
      const response = await api.get("pokemons");

      setListaPokemon(response.data);
    }

    carregarLista();
  }, []);

  return (
    <S.Container>
      <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

      <S.ScrollView>
        <S.Title>Pokédex</S.Title>
        <S.Paragraph>Encontre todos os pokémons em um só lugar.</S.Paragraph>

        <S.Content>
          {listaPokemon.map((pokemon, index) => (
            <CardPokemon
              key={index}
              id={pokemon.id}
              nome={pokemon.name}
              tipo={pokemon.type}
            />
          ))}
        </S.Content>
      </S.ScrollView>
    </S.Container>
  );
}

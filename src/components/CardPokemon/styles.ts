import styled, { css } from "styled-components/native";

type CardProps = {
  cor: string;
};

export const Card = styled.TouchableOpacity<CardProps>`
  ${(props) => css`
    flex-direction: row;
    justify-content: space-between;

    position: relative;

    background: ${props.cor ?? props.theme.colors.backgroundType.normal};
    border-radius: 10px;
    padding: 20px;
    margin-top: 30px;
  `}
`;

export const CardLeft = styled.View``;

export const CardRigth = styled.View``;

export const CardDotsBackgroundImage = styled.ImageBackground`
  width: 74px;
  height: 32px;

  position: absolute;
  top: -15px;
  right: -10px;
`;

export const CardPokemonNumber = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.black};
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
    opacity: 0.6;
  `}
`;

export const CardPokemonName = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.white};
    font-size: 26px;
    line-height: 31px;
    font-weight: 700;
  `}
`;

export const CardPokemonTypeList = styled.View`
  flex-direction: row;
`;

export const CardPokemonTypeBadge = styled.View`
  ${(props) => css`
    background: ${props.theme.colors.type.normal};
    border-radius: 3px;
    padding: 5.5px 5px;
    margin-top: 5px;
    margin-right: 5px;
  `}
`;

export const CardPokemonType = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.white};
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
  `}
`;

export const CardPokemonImage = styled.Image`
  width: 130px;
  height: 130px;

  position: absolute;
  top: -50px;
  right: -10px;
`;

export const CardPokemonBackgroundImage = styled.ImageBackground`
  width: 130px;
  height: 115px;

  position: absolute;
  top: -20px;
  right: -20px;
`;

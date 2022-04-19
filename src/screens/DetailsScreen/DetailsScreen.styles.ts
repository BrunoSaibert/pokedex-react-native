import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    background: ${theme.colors.backgroundWater};
    flex: 1;
    position: relative;
  `}
`;

export const ContainerBackgroundImage = styled.ImageBackground`
  width: 190px;
  height: 190px;
  opacity: 0.3;

  position: absolute;
  bottom: -20px;
  right: -20px;
`;

export const DotsBackgroundImage = styled.ImageBackground`
  width: 74px;
  height: 32px;

  position: absolute;
  bottom: 120px;
  left: 60px;
`;

export const Header = styled.View`
  margin-top: 30px;
  padding: 50px 20px;

  position: relative;
  height: 40%;

  z-index: 1;
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text_white};
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
  `}
`;

export const PokemonNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text_white};
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
  `}
`;

export const TypeList = styled.View`
  flex-direction: row;
`;

export const Badge = styled.View`
  ${({ theme }) => css`
    margin-right: 5px;

    background: ${theme.colors.text_black};
    border-radius: 3px;
    padding: 5.5px 5px;
    margin-top: 5px;
  `}
`;

export const BadgeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text_white};
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
  `}
`;

export const PokemonImage = styled.Image`
  width: 250px;
  height: 250px;
  margin: 0 auto;

  position: relative;
  bottom: 10px;
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    height: 60%;
    z-index: 0;

    background: ${theme.colors.background};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    padding: 40px 20px 20px;

    position: relative;
  `}
`;

export const ScrollView = styled.ScrollView``;

export const Paragraph = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text_gray};
    font-size: 16px;
    margin-top: 10px;
    font-weight: 400;
  `}
`;

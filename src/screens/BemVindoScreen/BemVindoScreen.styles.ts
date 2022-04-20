import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;

    background: ${theme.colors.backgroundRed};
    padding: 20px;
  `}
`;

export const Content = styled.View`
  height: 70%;

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WrapperAnimation = styled.View`
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-top: 20px;
    color: ${theme.colors.text.white};
    font-size: 32px;
    line-height: 39px;
    font-weight: bold;
  `}
`;

export const Paragraph = styled.Text`
  ${({ theme }) => css`
    margin-top: 10px;
    color: ${theme.colors.text.white};
    text-align: center;
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
  `}
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text.black};
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  `}
`;

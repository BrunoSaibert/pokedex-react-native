import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${(props) => css`
    flex: 1;

    background: ${props.theme.colors.background.primary};
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
  ${(props) => css`
    margin-top: 20px;
    color: ${props.theme.colors.text.white};
    font-size: 32px;
    line-height: 39px;
    font-weight: bold;
  `}
`;

export const Paragraph = styled.Text`
  ${(props) => css`
    margin-top: 10px;
    color: ${props.theme.colors.text.white};
    text-align: center;
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
  `}
`;

export const Button = styled.TouchableOpacity`
  ${(props) => css`
    background: ${props.theme.colors.background.white};
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px;
  `}
`;

export const ButtonText = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.black};
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  `}
`;

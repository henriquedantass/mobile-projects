import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
  type: "up" | "down";
}

interface ContainerProps {
  type: "up" | "down";
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  border-radius: 5px;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  flex-direction: row;
  justify-content: center;
  padding: 16px;
  width: 48%;

  ${({ theme, isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${theme.colors.attention_light};
      border: 0;
    `}

  ${({ theme, isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${theme.colors.sucess_light};
      border: 0;
    `}
`;

export const Icon = styled(Feather)<IconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.sucess : theme.colors.attention};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

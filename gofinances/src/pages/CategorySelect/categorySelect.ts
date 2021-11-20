import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${RFValue(113)}px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const CategoryList = styled(FlatList)`
  flex: 1;
`;

export const Category = styled.View`
  align-items: center;
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.text};
  height: 1px;
  width: 100%;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;

export const ButtonText = styled.Text``;

import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secundary};
  padding: 18px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;

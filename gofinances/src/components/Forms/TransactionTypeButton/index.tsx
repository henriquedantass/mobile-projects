import React from "react";
import { Container, Icon, Title } from "./transactionTypeButton.styles";
import { TouchableOpacityProps } from "react-native";

interface TransactionButtonTypeProps extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

export const TransactionTypeButton = ({
  title,
  type,
  isActive,
  ...rest
}: TransactionButtonTypeProps) => {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon type={type} name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
};

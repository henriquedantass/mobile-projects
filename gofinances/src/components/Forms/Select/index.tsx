import React from "react";

import { Container, Category, Icon } from "./select.styles";

interface SelectProps {
  title: string;
  onPress: () => void;
}

export const Select = ({ title, onPress }: SelectProps) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

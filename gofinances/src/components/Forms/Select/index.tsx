import React from "react";

import { Container, Category, Icon } from "./select.styles";

interface SelectProps {
  title: string;
}

export const Select = ({ title }: SelectProps) => {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

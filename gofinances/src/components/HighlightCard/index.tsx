import React from "react";
import {
  Amount,
  Container,
  Footer,
  Header,
  LastTransaction,
  Title,
  Icon,
} from "./hightlightCard.style";

export const HighlightCard = () => {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$200,00</Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  );
};

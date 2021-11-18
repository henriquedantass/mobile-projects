import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./transactionCard.styles";
export const TransactionCard = () => {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>
      <Amount>R$1000,00</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>13/04/2021</Date>
      </Footer>
    </Container>
  );
};

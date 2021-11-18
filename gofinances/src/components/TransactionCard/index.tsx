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

interface Category {
  name: string;
  icon: string;
}

interface TransactionCardProps {
  data: {
    title: string;
    amount: string;
    category: Category;
    date: string;
  };
}

export const TransactionCard = ({ data }: TransactionCardProps) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

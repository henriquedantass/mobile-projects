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

export interface TransactionCardProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface DataProps {
  data: TransactionCardProps;
}

export const TransactionCard = ({ data }: DataProps) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === "negative" && "-"}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

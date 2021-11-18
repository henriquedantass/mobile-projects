import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";
import {
  Container,
  Header,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./dashboard.style";

export interface DataListProps extends TransactionCardProps {
  id: number;
}

export const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: 1,
      type: "positive",
      title: "Desenvolvimento de website",
      amount: "R$2500,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/02/2021",
    },

    {
      id: 2,
      type: "negative",
      title: "Aluguel",
      amount: "R$500,00",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
      date: "13/02/2021",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserName />
            <Photo source={{ uri: "https://github.com/henriquedantass.png" }} />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Henrique</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards
        contentContainerStyle={{ paddingHorizontal: 24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saidas"
          amount="R$ 1.400,00"
          lastTransaction="Última saida dia 3 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.000,00"
          lastTransaction="01 a 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        ></TransactionList>
      </Transactions>
    </Container>
  );
};

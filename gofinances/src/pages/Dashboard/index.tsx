import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
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
} from "./dashboard.style";

export const Dashboard = () => {
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
    </Container>
  );
};

import React from "react";
import {
  Container,
  Header,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from "./styles";

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
        </UserWrapper>
      </Header>
    </Container>
  );
};

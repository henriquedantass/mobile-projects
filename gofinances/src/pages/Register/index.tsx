import React, { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./register.styles";

export const Register = () => {
  const [transactionType, setTransactionType] = useState("");

  const handleSelectTransactionType = (type: "up" | "down") => {
    setTransactionType(type);
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionsTypes>
            <TransactionTypeButton
              isActive={transactionType === "up"}
              onPress={() => handleSelectTransactionType("up")}
              title="Income"
              type="up"
            />
            <TransactionTypeButton
              isActive={transactionType === "down"}
              onPress={() => handleSelectTransactionType("down")}
              title="Outcome"
              type="down"
            />
          </TransactionsTypes>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

import React from "react";
import {
  Wrapper,
  Container,
  MainItem,
  MainText,
  InfoContainer,
  InfoText,
  Line,
  ActivityContainer,
  ActivityText,
  ActivityLine,
  ConsorcioContainer,
  NewStyle,
  NewText,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

function index() {
  return (
    <Wrapper>
      <Container>
        <MainItem>
          <MainText>Institucional</MainText>
          <MaterialIcons name="keyboard-arrow-up" size={30} color="white" />
        </MainItem>

        <InfoContainer>
          <InfoText>Quem Somos</InfoText>
          <Line />
          <InfoText>Fale Conosco</InfoText>
          <Line />
          <InfoText>Endereços</InfoText>
          <Line />
        </InfoContainer>

        <ActivityContainer>
          <ActivityText>Novos</ActivityText>
          <ActivityLine />
          <ActivityText>Ofertas</ActivityText>
          <ActivityLine />
          <ActivityText>Seminovos</ActivityText>
          <ActivityLine />
          <ConsorcioContainer>
          <ActivityText>Consórcio</ActivityText>
          <NewStyle><NewText>Novo</NewText></NewStyle>
          </ConsorcioContainer>
          <ActivityLine />
          <ActivityText>Vendas Direta</ActivityText>
          <ActivityLine />
          <ActivityText>Lifestyle</ActivityText>
          <ActivityLine />
          <ActivityText>Pós-vendas</ActivityText>
         
        </ActivityContainer>
      </Container>
    </Wrapper>
  );
}

export default index;

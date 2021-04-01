import React from "react";
import { Text } from "react-native";
import {
  Wrapper,
  HeaderContainer,
  Header,
  ContactView1,
  ContactView2,
  ImgLogo,
  ImgMenuIcon,
  ButtonCellphone,
  ImgTelefone,
  ImgWhats,
  ButtonWhatsapp,
  ImgFiat,
} from "./styles";

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import logoDealer from "../../../assets/imgLogo.png";
import menuIcon from "../../../assets/menuIcon.png";
import telefone from "../../../assets/telefone.png";
import whatsLogo from "../../../assets/whatsLogo.png";
import fiatLogo from "../../../assets/fiatLogo.png";

function index() {
  return (
    <Wrapper>
      <HeaderContainer>
        <Header>
          <ImgMenuIcon source={menuIcon} />
          <ImgLogo source={logoDealer} />
          <ContactView1>
            <ButtonCellphone></ButtonCellphone>
            <ImgTelefone source={telefone} />
          </ContactView1>

          <ContactView2>
            <ButtonWhatsapp></ButtonWhatsapp>
            <ImgWhats source={whatsLogo} />
          </ContactView2>

          <ImgFiat source={fiatLogo} />
        </Header>
      </HeaderContainer>
      <Menu />
      <Footer />
    </Wrapper>
  );
}

export default index;

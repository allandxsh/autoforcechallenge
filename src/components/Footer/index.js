import React from "react";
import { Wrapper, Container, ImgBar, Button, ContainerWhats, ImgWhats } from "./styles";

import whats2 from "../../../assets/whats2.png";

import bar from "../../../assets/bar.png";

function index() {
  return (
    <Wrapper>
      <Container>
        <ImgBar source={bar} />
        <ContainerWhats>
            <ImgWhats source={whats2} />
        </ContainerWhats>
        <Button>VER TODOS OS MODELOS</Button>
      </Container>
    </Wrapper>
  );
}

export default index;

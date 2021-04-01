import React from "react";
import { Wrapper, Container, ImgBar, Button } from "./styles";

import bar from "../../../assets/bar.png";

function index() {
  return (
    <Wrapper>
      <Container>
        <ImgBar source={bar} />
        <Button>VER TODOS OS MODELOS</Button>
      </Container>
    </Wrapper>
  );
}

export default index;

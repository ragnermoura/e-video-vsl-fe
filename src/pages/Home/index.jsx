import { Container } from "./styles";
import Logo from "../../assets/img/logo.png";
import { useState } from "react";
import { authApi } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export default () => {
  return (
    <Container>
      <h1>Site aqui</h1>
    </Container>
  );
};

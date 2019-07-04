import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { Container, ButtonLogin, TextButton } from "./styles";

export class Login extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ButtonLogin>
          <TextButton>Login</TextButton>
        </ButtonLogin>
      </Container>
    );
  }
}

export default Login;

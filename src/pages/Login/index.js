import React, { Component } from "react";
import { Text, View, StatusBar, Image } from "react-native";
import { Container, ButtonLogin, TextButton } from "./styles";
import icon from "../../assets/images/americanas.png";
import icon_logo from '../../assets/images/americanas_logo.png';

export class Login extends Component {

  
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Image source={icon_logo} style={{width: '100%'}} resizeMode="contain"/>
        <ButtonLogin onPress={() => navigation.navigate('Home')}>
          <TextButton>Login</TextButton>
        </ButtonLogin>
      </Container>
    );
  }
}

export default Login;

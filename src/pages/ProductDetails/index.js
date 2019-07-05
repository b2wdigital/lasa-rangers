import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container , ContainerPhoto, ContainerPhotos, FirstLine, SecondLine, ThirdLine, Price, Buy, TitleLine, TextButton } from './styles';
import foto_10 from '../../assets/images/10.png';
import foto_11 from '../../assets/images/11.png';
import foto_12 from '../../assets/images/12.png';

export class ProductDetails extends Component {

  static navigationOptions = {
    title: 'DETALHES',
    headerTintColor: "#ffffff",
    headerBackTitle: null,
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Icon
            name="search"
            size={22}
            style={{ paddingRight: 16, color: '#FFF' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="share"
            size={22}
            style={{ paddingRight: 16, color: '#FFF' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="shopping-basket"
            size={22}
            style={{ paddingRight: 16, color: '#FFF' }}
          />
        </TouchableOpacity>
      </View>
    ),
    headerLeft: (
      <Icon name="arrow-left" size={22} style={{ paddingLeft: 16, color: '#FFF' }} />
    ),
    headerStyle: {
      backgroundColor: 'red',
    },
  };


    render() {
      const {navigation} = this.props;
        return (
            <Container>
              <ContainerPhotos>
                <ScrollView horizontal pagingEnabled>
                <ContainerPhoto>
                  <Image source={foto_10} resizeMode="contain" style={{height: '100%', width: '100%' }}/>
                </ContainerPhoto>

                <ContainerPhoto>
                  <Image source={foto_11} resizeMode="contain" style={{height: '100%', width: '100%' }} />
                </ContainerPhoto>

                <ContainerPhoto>
                  <Image source={foto_12} resizeMode="contain" style={{height: '100%', width: '100%' }} />
                </ContainerPhoto>

                </ScrollView>
              </ContainerPhotos>

              <FirstLine>
                <TitleLine>
                Jaqueta Jeans Feminina Oversized
                </TitleLine>

              </FirstLine>
              <SecondLine>
                <Text>Tamanho ( 6 opcoes )</Text>
              </SecondLine>
              <ThirdLine>
              <Text>Selecione uma cor</Text>
              </ThirdLine>

              <Price>

                RS 249,00

              </Price>

              <Buy>
                <TextButton>
                  COMPRAR
                </TextButton>
              </Buy>

              <Buy>
                <TextButton>
                  PAGUE COM O AME
                </TextButton>
              </Buy>

              <Buy onPress={() => navigation.navigate('Maps')}>
                <TextButton>
                  RETIRE NA LOJA
                </TextButton>
              </Buy>
            </Container>
        )
    }
}

export default ProductDetails;

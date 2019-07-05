import React, { Component } from 'react';
import { Text, View , ScrollView, Image, TouchableOpacity} from 'react-native';
import { Container, FirstLine, SecondLine, LineItem, LeftArea, RightArea, Title, Price, SubtitlePrime} from './styles';

import foto_1 from '../../assets/images/1.png';
import foto_2 from '../../assets/images/2.png'
import foto_3 from '../../assets/images/3.png'
import foto_4 from '../../assets/images/4.png'
import foto_5 from '../../assets/images/5.png'
import foto_6 from '../../assets/images/6.png'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Divider } from 'react-native-elements';
export class Main extends Component {
  static navigationOptions = {
    title: 'BUSCA PERSONALIZADO',
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
      backgroundColor: 'red'
    },
  };

  state = {
    data: []
  }
    render() {
      const { navigation } = this.props;
        return (
            <Container>
              <FirstLine>
                <Text>
                  Icone
                </Text>
                <Text style={{color: 'red', fontSize: 15}}>
                  refinar
                </Text>
              </FirstLine>
              <SecondLine>
                <Text style={{
                  fontSize: 15,
                  textAlign: 'center'
                }}>
                  15.300 resultados
                </Text>
              </SecondLine>
              <ScrollView>
                  <LineItem onPress={() => navigation.navigate('ProductDetails')}>
                    <LeftArea>
                      <Image source={foto_2} resizeMode="contain" style={{height: '100%', width: '100%'}}/>
                    </LeftArea>
                    <RightArea>
                      <Title>Jaqueta Jeans Feminina Oversized com Puídos Azul - F+
                      </Title>
                      <Price>
                        Preço - R$ 119,99
                      </Price>
                      <SubtitlePrime>7x de R3$ 39,99 sem juros</SubtitlePrime>
                    </RightArea>
                  </LineItem>

                  <LineItem>
                    <LeftArea>
                      <Image source={foto_4} resizeMode="contain" style={{height: '100%', width: '100%'}}/>
                    </LeftArea>
                    <RightArea>
                      <Title>Jaqueta Jeans Feminina Oversized com Puídos Azul - F+
                      </Title>
                      <Price>
                        Preço - R$ 119,99
                      </Price>
                      <SubtitlePrime>7x de R3$ 39,99 sem juros</SubtitlePrime>
                    </RightArea>
                  </LineItem>


                  <LineItem>
                    <LeftArea>
                      <Image source={foto_5} resizeMode="contain" style={{height: '100%', width: '100%'}}/>
                    </LeftArea>
                    <RightArea>
                      <Title>Jaqueta Jeans Feminina Oversized com Puídos Azul - F+
                      </Title>
                      <Price>
                        Preço - R$ 119,99
                      </Price>
                      <SubtitlePrime>7x de R3$ 39,99 sem juros</SubtitlePrime>
                    </RightArea>
                  </LineItem>

                  <Text style={{textAlign: 'center', fontSize: 16, marginBottom: 10}}>
                    Produtos Semelhantes
                  </Text>

                  <LineItem>
                    <LeftArea>
                      <Image source={foto_6} resizeMode="contain" style={{height: '100%', width: '100%'}}/>
                    </LeftArea>
                    <RightArea>
                      <Title>Jaqueta Jeans Feminina Oversized com Puídos Azul - F+
                      </Title>
                      <Price>
                        Preço - R$ 119,99
                      </Price>
                      <SubtitlePrime>7x de R3$ 39,99 sem juros</SubtitlePrime>
                    </RightArea>
                  </LineItem>
              </ScrollView>
            </Container>
        )
    }
}

export default Main;

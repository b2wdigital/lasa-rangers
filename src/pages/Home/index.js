import React, { Component } from 'react';
import { Text, View, Image, Dimensions, Alert } from 'react-native';
import screen_1 from '../../assets/images/Screen_1.png';
import { Container, ButtonSearch, InputSearch } from './styles';

export class Home extends Component {
  state =  {
      showInput: false
  };

  viewInput = () => {
      this.setState({
          showInput: !this.state.showInput
      })
    }

    render() {
        const {showInput} = this.state;
        return (
            <Container>
                <Image source={screen_1}  style={{ height: Dimensions.get('window').height,  width: Dimensions.get('window').width, zIndex: -1}} />
                    <ButtonSearch onPress={this.viewInput}/>
                <InputSearch style={{backgroundColor: showInput ? '#FFF' : 'transparent'}}/>
            </Container>
        )
    }
}

export default Home;

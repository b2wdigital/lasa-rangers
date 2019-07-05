import React, { Component } from 'react';
import { Image, Dimensions, TouchableOpacity } from 'react-native';
import screen_1 from '../../assets/images/Screen_1.png';
import { Container, ButtonSearch, InputSearch, SearchContainer , IconsContainer} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


export class Home extends Component {
  state = {
    showInput: false,
  };

  viewInput = () => {
    const { showInput } = this.state;
      this.setState({
          showInput: !showInput,
      })
    }

  render() {
    const { showInput } = this.state;
    return (
      <Container>
        <Image source={screen_1}  style={{ height: Dimensions.get('window').height,  width: Dimensions.get('window').width, zIndex: -1}} />
        <ButtonSearch onPress={this.viewInput}/>
          <SearchContainer style={{backgroundColor: showInput ? '#FFF' : 'transparent'}}>
            <IconsContainer>
              <Icon name="barcode" size={22} style={{color: showInput ? '#000' : 'transparent'}}/>
              <TouchableOpacity onPress={this.takePicture}>
                <Icon name="camera" size={22} style={{color: showInput ? '#000' : 'transparent'}}/>
              </TouchableOpacity>
            </IconsContainer>
            <InputSearch/>
          </SearchContainer>
      </Container>
    ),
  }
}

export default Home;

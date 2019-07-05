import React, { Component } from 'react';
import { Image, Dimensions, TouchableOpacity, View, Text, ActivityIndicator, Alert } from 'react-native';
import screen_1 from '../../assets/images/Screen_1.png';
import { Container, ButtonSearch, InputSearch, SearchContainer, IconsContainer} from './styles';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
    loading: false,
  },
};

export class Home extends Component {
  state = {
    showInput: false,
    // eslint-disable-next-line react/no-unused-state
    avatarSource: '',
  };

  viewInput = () => {
    const { showInput } = this.state;
      this.setState({
          showInput: !showInput,
      })
    }

    showImage = () => (
      <Image
        source={this.state.avatarSource}
        style={{
          width: 100,
          height: 100,
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      />
    )

    handleImagePicker = async () => {
      // const url = 'http://www.22i.com.br/b2w/index.php';
      try {
        ImagePicker.showImagePicker(options, async (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };

            // You can also display the image using data:
            const sourceBase64 = { uri: `data:image/jpeg;base64,${response.data}` };

            this.setState(
              {
                avatarSource: source,
                avatarSourceBase64: sourceBase64,
              },
              async () => {
                const formData = new FormData();

                formData.append('userId', 'teste123');

                formData.append('teste', {
                  uri: this.state.avatarSourceBase64.uri,
                  name: 'image',
                  type: 'image/jpg',
                });

                // const rawResponse = await fetch(url, {
                //   method: 'POST',
                //   body: formData,
                // });

                // const content = await rawResponse.json();

                // console.log(content);

                setTimeout(() => {
                  const { navigation } = this.props;
                  Alert.alert('Sua foto esta sendo analisada :)');
                  setTimeout(() => {
                    this.setState({
                      limiteTotal: 2000,
                      loading: true,
                    }),
                    navigation.navigate('Main');
                    () => {

                      // Alert.alert('Ja vamos te redirecionar , so mais um pouquinho ...');
                    };
                  }, 2500);
                }, 1600);
              },
            );
          }
        });
      } catch (e) {
        alert(e);
      }
    };

  render() {
    const { showInput, loading } = this.state;
    return (
      <Container>
        <Image source={screen_1}  style={{ height: Dimensions.get('window').height,  width: Dimensions.get('window').width, zIndex: -1}} />
        <ButtonSearch onPress={this.viewInput}/>
        <SearchContainer style={{backgroundColor: showInput ? '#FFF' : 'transparent'}}>
          <IconsContainer>
            <Icon name="barcode" size={22} style={{color: showInput ? '#000' : 'transparent'}} />
            <TouchableOpacity onPress={this.handleImagePicker}>
              <Icon name="camera" size={22} style={{color: showInput ? '#000' : 'transparent'}} />
            </TouchableOpacity>
          </IconsContainer>
          <InputSearch/>
        </SearchContainer>
      </Container>
      )
    }
}

export default Home;

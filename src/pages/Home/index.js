import React, { Component, Fragment } from 'react';
import { Text, View, Image, Dimensions, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import screen_1 from '../../assets/images/Screen_1.png';
import { Container, ButtonSearch, InputSearch, SearchContainer , IconsContainer} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RNCamera } from 'react-native-camera';



export class Home extends Component {
  state =  {
      showInput: false,
      search: ''
  };

  viewInput = () => {
      this.setState({
          showInput: !this.state.showInput
      })
    }

    takePicture = async () => {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options)
        alert(data.uri);
      }
    }

    render() {
        const {showInput} = this.state;
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
                <View style={styles.container}>
                  <RNCamera
                    ref={camera => {
                      this.camera = camera;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    permissionDialogTitle={"Permission to use camera"}
                    permissionDialogMessage={
                      "We need your permission to use your camera phone"
                    }
                  />
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
                      <Text style={styles.buttonText}> SNAP </Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  }
})

export default Home;

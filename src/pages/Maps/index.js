import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export class Maps extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
          <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})

export default Maps;

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
export class Maps extends Component {
  static navigationOptions = {
    title: 'LOJAS PROXIMAS',
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

  render() {
    return (
      <WebView  source={{ uri: 'https://pt.batchgeo.com/map/b0065b7ae0de4804e99bf15ede55e314'}} />
    );
  }
}

export default Maps;

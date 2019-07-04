import React, { Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text>Teste M!</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;

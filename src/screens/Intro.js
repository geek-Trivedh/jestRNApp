import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Profile from '../components/Profile';

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      data: 'text',
    };
  }
  change(x) {
    this.setState({data: x * 10});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          This is a React Native snapshot test.
        </Text>
        <Profile data={'Testing.....'} />
        <TextInput
          testID="username"
          placeholder="Enter user name"
          onChangeText={text => this.change(text)}
        />
        <TextInput
          testID="password"
          placeholder="Enter password"
          secureTextEntry
          onChangeText={text => this.change(text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default Intro;

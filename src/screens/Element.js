import React from 'react';
import {TextInput, View} from 'react-native';

const Element = () => {
  return (
    <View>
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
};
export default Element;

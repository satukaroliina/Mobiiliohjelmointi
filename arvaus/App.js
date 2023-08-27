import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {

  const [arvaus, setText] = useState("");
  var laskuri = 0;

  const buttonPressed = () => {
    var random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if (arvaus < random) {
      laskuri++;
      Alert.alert("Your guess " + arvaus + " is too low.");
    }
    if (arvaus > random) {
      laskuri++;
      Alert.alert("Your guess " + arvaus + " is too high.");
    }
    if (arvaus === random) {
      laskuri++;
      Alert.alert("You guessed the number in " + laskuri + " guesses.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={arvaus}
        keyboardType="numeric"
      />
      <Button onPress={buttonPressed} title="MAKE GUESS" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 100,
    margin: 15,
    borderWidth: 1,
    padding: 5,
  },
});

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';

var random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
var laskuri = 0;

export default function App() {
  const [arvaus, setText] = useState("");
  const [ilmo, setIlmo] = useState("Guess a number between 1-100");

  const buttonPressed = () => {
    console.log(random);
    console.log(arvaus);
    if (arvaus < random) {
      laskuri++;
      setIlmo("Your guess " + arvaus + " is too low.");
    }
    if (arvaus > random) {
      laskuri++;
      setIlmo("Your guess " + arvaus + " is too high.");
    }
    if (arvaus == random) {
      laskuri++;
      setIlmo("You guessed the number in " + laskuri + " guesses.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{ilmo}</Text>
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

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {

  const [eka, setTextEka] = useState("");
  const [toka, setTextToka] = useState("");

  const buttonPressedPlus = () => {
    Alert.alert("Result: " + (parseInt(eka) + parseInt(toka)));
  };

  const buttonPressedMinus = () => {
    Alert.alert("Result: " + (parseInt(eka) - parseInt(toka)));
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={text => setTextEka(text)}
        value={eka}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setTextToka(text)}
        value={toka}
        keyboardType="numeric"
      />
      <View style={styles.buttonStyle}>
      <Button onPress={buttonPressedPlus} title="+" />
      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
      <Button onPress={buttonPressedMinus} title="-" />
      </View>
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
  buttonStyle: {
    flexDirection: 'row',
  }
});

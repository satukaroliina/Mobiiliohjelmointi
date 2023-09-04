import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image, FlatList } from 'react-native';

export default function App() {

  const [eka, setEka] = useState("");
  const [toka, setToka] = useState("");
  const [result, setResult] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const initialFocus = useRef(null);

  const calculate = operator => {
    console.log(eka, toka, operator);
    const [nro1, nro2] = [Number(eka), Number(toka)];
    
    switch (operator) {
      case '+':
        setResult(nro1 + nro2);
        setData([...data, { key: nro1 + ' + ' + nro2 + ' = ' + (nro1+nro2)}]);
        setText("");
        break;
      case '-':
        setResult(nro1 - nro2);
        setData([...data, { key: nro1 + ' - ' + nro2 + ' = ' + (nro1-nro2)}]);
        setText("");
        break;
    }
    setEka('');
    setToka('');
    initialFocus.current.focus();
  }

  return (
    <View style={styles.container}>

      <Text>Result: {result}</Text>

      <TextInput
        style={styles.input}
        ref={initialFocus}
        onChangeText={text => setEka(text)}
        value={eka}
        keyboardType="number-pad"
      />

      <TextInput
        style={styles.input}
        onChangeText={text => setToka(text)}
        value={toka}
        keyboardType="number-pad"
      />

      <View style={styles.buttonStyle}>
        <Button onPress={() => calculate('+')} title="+" />
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
        <Button onPress={() => calculate('-')} title="-" />
      </View>

      <FlatList style={styles.list}
        data={data}
        renderItem={({item}) =>
          <Text>{item.key}</Text>
        }
        keyExtractor={(item, index) => index.toString()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  list: {
    maxHeight: '85%',
    minHeight: '0%',
  }
});
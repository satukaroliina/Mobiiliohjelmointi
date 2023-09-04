import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList, Keyboard } from 'react-native';

export default function App() {

  const [ostos, setOstos] = useState("");
  const [data, setData] = useState([]);
  const initialFocus = useRef(null);

  const addToList = () => {
    setData([...data, { key: ostos}]);
    setOstos('');
    initialFocus.current.focus();
  }

  const clearList = (data) => {
    data.length = 0;
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        ref={initialFocus}
        onChangeText={text => setOstos(text)}
        value={ostos}
      />
      <View style={styles.buttonStyle}>
        <Button onPress={() => addToList()} title="ADD" />
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
        <Button onPress={() => clearList(data)} title="CLEAR" />
      </View>
      <Text style={styles.header}>Shopping List</Text>
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
    width: 150,
    margin: 15,
    borderWidth: 1,
    padding: 5,
  },
  buttonStyle: {
    flexDirection: 'row',
  },
  header: {
    padding: 20,
    fontWeight: 'bold',
    color: '#FC8EAC',
  },
  list: {
    maxHeight: '65%',
    minHeight: '0%',
  }
});
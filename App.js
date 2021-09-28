import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

let rows = []


export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Text style={styles.title}>Welcome to my notes app!</Text>
      <View>
        {rows}
      </View>
      <TextInput
       style={styles.input}
       placeholder="Enter your note here..."
       //onSubmitEditing={_newNote(text)}
       />
      <Button onPress={() => {
        alert('Nice!')
      }}title="Add note"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1
  },
  note: {
    fontSize: 20,
  },
  input: {
    borderWidth: 2,
    padding: 10,
    margin: 20
  }
});

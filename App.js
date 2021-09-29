import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Note from './components/Note';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';

export default function App() {
  const [note, setNote] = useState();
  const [noteItems, setNoteItems] = useState(["Example Note"]);

  const handleAddNote = () => {
    setNoteItems([...noteItems, note])
    setNote(null);
  }

  const handleDeleteNote = (index) => {
    let itemsCopy = [...noteItems];
    itemsCopy.splice(index, 1);
    setNoteItems(itemsCopy);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my notes app!</Text>
      <View>
        {
          noteItems.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => handleDeleteNote(index)}>
                <Note key={index} text={item}/>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <TextInput
       style={styles.input}
       placeholder="Enter your note here..."
       value={note}
       onChangeText={(text) => setNote(text)}
       />
      <Button onPress={() => {
        handleAddNote()
        setNote("")
      }}title="Add note"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
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

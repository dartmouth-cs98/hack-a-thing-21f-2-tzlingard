import React, {useState} from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Note from './components/Note';
import Squid from './components/Squid';
import { LinearGradient } from 'expo-linear-gradient';

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
      <LinearGradient
      colors={['#003300', '#00b300']}
      >
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
       onSubmitEditing={() => {handleAddNote();setNote("")}}
       />
      <Button onPress={() => {
        handleAddNote()
        setNote("")
      }}title="Add note"/>
      </LinearGradient>
      <View><Squid /></View>
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
    color: 'white',
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
    margin: 20,
    color: 'white'
  }
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Note = (props) => {
    return(
        <View style={ styles.item}>
            <Text>{props.text}</Text>
                <FontAwesomeIcon icon = { faTrashAlt } />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#efe', 
        padding: 15, 
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginHorizontal: 20,
    }
});

export default Note;
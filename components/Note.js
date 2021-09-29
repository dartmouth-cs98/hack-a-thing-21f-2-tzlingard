import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Note = (props) => {

    return(
        <View style={ styles.item}>
            <Text>{props.text}</Text>
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
        marginBottom: 20,
}
});

export default Note;
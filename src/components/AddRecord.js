import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddRecord = (props) => {

    return (
        <View>
            <TextInput placeholder="create new timerecord" style={styles.input} />
            <TouchableOpacity style={styles.createButton}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="plus" size={22} color="#d6efbd" style={{marginRight: 16}}/>
                    <Text style={styles.text}>new timerecord</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    createButton: {
        backgroundColor: '#032d15',
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#eee',
        fontSize: 20,
    },
    text: {
        fontSize: 24,
        fontFamily: 'monospace',
        color: '#d6efbd',
    }
});

export default AddRecord;

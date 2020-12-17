import React, { useState } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const TimeRecordCreate = (props) => {
    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
                onChangeText={text => setText(text)}
                value={text}
                placeholder="create new timerecord"
                style={styles.input}
            />
            <TouchableOpacity
                onPress={() => props.createTimeRecord(text)}
                style={styles.createButton}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="add-alarm" size={32} color="#d6efbd" style={{marginRight: 16}}/>
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
        fontSize: 26,
        fontFamily: 'monospace',
        color: '#d6efbd',
    }
});

export default TimeRecordCreate;

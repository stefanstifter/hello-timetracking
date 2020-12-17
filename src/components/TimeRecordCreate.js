import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const TimeRecordCreate = (props) => {
    const [text, setText] = useState('');

    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput
                    onChangeText={text => setText(text)}
                    value={text}
                    placeholder="project"
                    style={{...styles.input, flex: 4}}
                />
                <TextInput
                    onChangeText={text => setText(text)}
                    value={text}
                    placeholder="hours"
                    keyboardType='numeric'
                    style={{...styles.input, flex: 1, marginLeft: 2}}
                />
            </View>
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
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#f8f8f8',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 26,
        fontFamily: 'monospace',
        color: '#d6efbd',
    }
});

export default TimeRecordCreate;

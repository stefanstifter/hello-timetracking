import React, { useState } from 'react';
import Timerecord from '../models/Timerecord';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const TimeRecordCreate = (props) => {
    const [text, setText] = useState('');
    const [hours, setHours] = useState('');

    const handleCreate = () => {
        props.createTimeRecord(new Timerecord({
            project: text,
            hours: hours,
        }));
    };

    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput
                    value={text}
                    onChangeText={text => setText(text)}
                    placeholder="project"
                    style={{...styles.input, flex: 4}}
                />
                <TextInput
                    value={hours}
                    onChangeText={hours => setHours(hours)}
                    placeholder="hours"
                    keyboardType='numeric'
                    style={{...styles.input, flex: 1, marginLeft: 2}}
                />
            </View>
            <TouchableOpacity
                onPress={handleCreate}
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

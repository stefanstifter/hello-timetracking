import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const RecordingItem = ({timerecording}) => {
    return (
        <TouchableOpacity style={styles.recordingItem}>
            <View>
                <Text>{timerecording.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    recordingItem: {
        marginTop: 5,
        padding: 10,
        backgroundColor: '#eee',
    }
})

export default RecordingItem;

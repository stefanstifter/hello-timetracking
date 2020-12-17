import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const RecordingItem = ({record, deleteTimeRecord}) => {
    return (
        <TouchableOpacity style={styles.recordingItem}>
            <View style={styles.recordingItemView}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="rocket" size={20} color="gray" />
                    <Text style={styles.titleText}>{record.text}</Text>
                </View>
                <Icon
                    onPress={() => deleteTimeRecord(record.id)}
                    name="power-off"
                    size={20}
                    color="gray"
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    recordingItem: {
        marginBottom: 5,
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: '#eee',
    },
    recordingItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        marginLeft: 10,
        fontSize: 20,
    }
})

export default RecordingItem;

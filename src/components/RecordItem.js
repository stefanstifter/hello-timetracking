import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const RecordingItem = ({record, deleteTimeRecord}) => {
    return (
        <TouchableOpacity style={styles.recordingItem}>
            <View style={styles.recordingItemView}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="access-alarm" size={30} color="gray" />
                    <Text style={styles.titleText}>{record.text}</Text>
                </View>
                <Icon
                    onPress={() => deleteTimeRecord(record.id)}
                    name="delete-outline"
                    size={24}
                    color="gray"
                    style={{ backgroundColor: '#fff', padding: 8 }}
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

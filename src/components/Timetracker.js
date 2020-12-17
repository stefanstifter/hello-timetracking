import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TimeRecordCreate from './TimeRecordCreate';
import RecordItem from './RecordItem';
import { v4 as uuid } from 'uuid';

const Timetracker = () => {
    const [ records, setRecords ] = useState([
        { id: uuid(), text: 'Project A: 17h' },
        { id: uuid(), text: 'Project B: 23h' },
        { id: uuid(), text: 'Project C: 12h' },
    ]);

    const createRecord = (text) => {
        setRecords(prev => {
            return [ ...prev, {id: uuid(), text} ];
        });
    }

    const deleteRecord = (id) => {
        setRecords(prev => prev.filter(item => item.id !== id));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={records}
                renderItem={({item}) => (
                    <RecordItem record={item} deleteRecord={deleteRecord} />
                )}
            />

            <TimeRecordCreate createRecord={createRecord} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
})

export default Timetracker

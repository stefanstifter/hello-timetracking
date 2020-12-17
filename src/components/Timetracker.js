import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TimeRecordCreate from './TimeRecordCreate';
import RecordItem from './RecordItem';
import { timerecords } from "../initial-timerecords";

const Timetracker = () => {
    const [ records, setRecords ] = useState(timerecords);

    const createTimeRecord = (timerecord) => {
        setRecords(prev => [...prev, timerecord]);
    }

    const deleteTimeRecord = (id) => {
        setRecords(prev => prev.filter(item => item.id !== id));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={records}
                renderItem={({item}) => (
                    <RecordItem
                        record={item}
                        deleteTimeRecord={deleteTimeRecord}
                    />
                )}
            />

            <TimeRecordCreate
                createTimeRecord={createTimeRecord}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
})

export default Timetracker

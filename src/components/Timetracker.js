import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TimerecordCreate from './TimerecordCreate';
import RecordItem from './RecordItem';
import { timerecordsData } from "../initial-timerecords";

const Timetracker = () => {
    const [ timerecords, setTimerecords ] = useState(timerecordsData);

    const createTimerecord = (timerecord) => {
        setTimerecords(prev => [...prev, timerecord]);
    }

    const deleteTimerecord = (id) => {
        setTimerecords(prev => prev.filter(item => item.id !== id));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={timerecords}
                renderItem={({item}) => (
                    <RecordItem
                        timerecord={item}
                        deleteTimerecord={deleteTimerecord}
                    />
                )}
            />

            <TimerecordCreate
                createTimerecord={createTimerecord}
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

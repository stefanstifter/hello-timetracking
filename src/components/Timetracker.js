import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RecordItem from './RecordItem';
import TimerecordCreate from './TimerecordCreate';
import Timerecord from '../models/Timerecord';
import { timerecordsData } from "../initial-timerecords";

const Timetracker = () => {
    const [timerecords, setTimerecords] = useState([]);
    const createTimerecord = (timerecord) => {
        setTimerecords(prev => [...prev, timerecord]);
    }
    const deleteTimerecord = (id) => {
        setTimerecords(prev => prev.filter(item => item.id !== id));
    };
    useEffect(() => {
        setTimerecords(timerecordsData.map(data => new Timerecord({
            project: data.project,
            hours: data.hours,
            date: data.date,
        })));
    }, []);

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

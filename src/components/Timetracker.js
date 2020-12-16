import React, { useState } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import RecordingItem from './RecordingItem';

const Timetracker = () => {
    const [ timeRecords, setTimeRecords ] = useState([
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
    ]);

    return (
        <FlatList style={styles.container}
            data={timeRecords}
            renderItem={({item}) => <RecordingItem timerecording={item} />}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // backgroundColor: 'red',
    },
})

export default Timetracker

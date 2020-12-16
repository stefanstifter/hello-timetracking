import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import RecordItem from './RecordItem';

const Timetracker = () => {
    const [ records, setRecords ] = useState([
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

    const deleteRecord = (id) => {
        setRecords(prev => prev.filter(item => item.id !== id));
    };

    return (
        <FlatList style={styles.container}
            data={records}
            renderItem={({item}) => <RecordItem record={item} deleteRecord={deleteRecord} />}
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

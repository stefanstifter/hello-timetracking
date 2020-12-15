import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import Timetracker from './src/components/Timetracker'

const App = () => {
    return (
        <View style={styles.container}>
            <Header title="sas hello time tracking" />
            <Timetracker />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default App;

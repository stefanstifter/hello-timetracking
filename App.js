import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './src/components/Header'

const App = () => {
    return (
        <View style={styles.container}>
            <Header title="sas hello time tracking" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default App;

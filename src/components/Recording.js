import React from 'react';
import { Text } from 'react-native';

const Recording = ({timerecording}) => {
    return (
        <Text>{timerecording.title}</Text>
    )

}

export default Recording;

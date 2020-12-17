import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

export const timerecords = [
    {
        id: uuid(),
        project: 'My initial project A',
        hours: 17,
        date: '20-11-09',
    },
    {
        id: uuid(),
        project: 'My initial project B',
        hours: 12.5,
        date: '20-11-09',
    },
    {
        id: uuid(),
        project: 'My initial project C',
        hours: 11,
        date: '20-11-09',
    },
];

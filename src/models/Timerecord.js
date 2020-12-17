import { v4 as uuid } from 'uuid';
import moment from 'moment';

class Timerecord {
    constructor(timerecordData) {
        console.log('hey');
        console.log(moment().format());
        this.id = uuid(),
        this.project = timerecordData.project;
        this.hours = timerecordData.hours;
        this.date = Date.now();
    }
}

export default Timerecord;

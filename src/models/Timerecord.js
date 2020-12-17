import { v4 as uuid } from 'uuid';
import moment from 'moment';

class Timerecord {
    constructor(timerecordData) {
        this.id = uuid(),
        this.project = timerecordData.project;
        this.hours = timerecordData.hours;
        this.date = moment().format();
    }
}

export default Timerecord;

import { v4 as uuid } from 'uuid';
import moment from 'moment';

class Timerecord {
    constructor(timerecordData) {
        this.id = uuid(),
        this.project = timerecordData.project;
        this.hours = timerecordData.hours;
        // @ToDo: refactor so that this.date holds the moment object instead of string
        this.date = timerecordData?.date ?? moment().format('YY-MM-DD');
    }
}

export default Timerecord;

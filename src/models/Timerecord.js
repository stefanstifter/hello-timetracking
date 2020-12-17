import { v4 as uuid } from 'uuid';

class Timerecord {
    constructor(timerecordData) {
        this.id = uuid(),
        this.project = timerecordData.project;
        this.hours = timerecordData.hours;
        this.date = Date.now();
    }
}

export default Timerecord;

/** ----------------------------------------
    Utitities
 ---------------------------------------- */

import _isType from '@util/check/_isType';
import _id from '@util/function/_id';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Schedule
 ---------------------------------------- */

const createSchedule = (name = null) => {
    return {
        name: name,
        active: false,
        id: _id(),
        timestamp: _timestamp(),
        times: 0,
    };
};

const assignSchedule = (schedule, events) => {
    return Object.assign(schedule, {
        events
    });
};

const loadSchedule = schedule => {
    const progress = schedule.events.map(event => event.key);
    
    return Object.assign(schedule, {
        progress,
        completed
    });
};

const configureSchedule = schedule => {
    return Object.assign(schedule, {
        delay: null,
        start: null,
        stop: null,
        next: null,
        routine: null,
        interval: null
    });
};

function schedule(name, events) {
    const _events = !events ? name : events;
    const schedule = createSchedule(events && name); 

    assignSchedule(schedule, _events);
    configureSchedule(schedule);
    
    this._schedule = schedule.id; 
    this._models = schedule;

    return this;
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export { loadSchedule };
export default schedule;
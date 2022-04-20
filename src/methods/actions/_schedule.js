/** ----------------------------------------
    Utitities
 ---------------------------------------- */

import _id from '@util/function/_id';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Schema
 ---------------------------------------- */

import schema from '@util/debug/_schema';
 
const validate = schema({
    id: String,
    active: Boolean,
    times: Number
});

/** ----------------------------------------
    Schedule
 ---------------------------------------- */

/**
 * This function will set the schedule 
 * config as a default containing any relevant
 * information. 
 */

const createSchedule = (name = null) => {
    return {
        name: name,
        active: false,
        id: _id(),
        timestamp: _timestamp(),
        times: 0,
    };
};

/**
 * Responsible for assigning the schedule 
 * and it's related events (jobs).
 */

const assignSchedule = (schedule, events) => {
    return Object.assign(schedule, {
        events
    });
};

/**
 * Will add a progression list of events that
 * will be handled during execution of the
 * schedule.
 */

const loadSchedule = schedule => {
    const progress = schedule.events.map(event => event.key);
    
    return Object.assign(schedule, {
        progress,
        completed
    });
};

/**
 * This function will configure the schedule
 * according to a default state. 
 */

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

/**
 * The schedule will contain information 
 * about the execution order and any related
 * logic that is responsible for handeling 
 * the tasks (jobs). 
 */

function schedule(name, events) {
    const _events = !events ? name : events;
    const schedule = createSchedule(events && name); 

    assignSchedule(schedule, _events);
    configureSchedule(schedule);

    if(validate(schedule)) {
        this._schedule = schedule.id; 
        this._models = schedule;
        return this;
    }
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export { loadSchedule };
export default schedule;
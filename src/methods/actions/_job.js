/** ----------------------------------------
    Utitities
 ---------------------------------------- */

import _id from '@util/function/_id';
import _timestamp from '@util/format/_timestamp';
import _toCamel from '@util/format/_toCamel';

/** ----------------------------------------
    Schema
 ---------------------------------------- */

import schema from '@util/debug/_schema';
 
const validate = schema({
    id: String,
    active: Boolean,
    name: String,
    key: String,
    watch: Boolean,
    delay: Number,
    action: Function
});

/** ----------------------------------------
    Defaults
 ---------------------------------------- */

/**
 * This default preset will create some 
 * configuration on the job object that can
 * be overwritten setting the schedule. 
 */ 

const defaults = {
    watch: true,
    delay: 0
};

/** ----------------------------------------
    Job
 ---------------------------------------- */

/**
 * This function will set the job config
 * as a default containing any relevant
 * information. 
 */

const createJob = job => {
    return Object.assign(job, {
        active: true,
        id: _id(),
        key: _toCamel(job.name),
        timestamp: _timestamp()
    });
};

/**
 * This function will assign the job
 * to a given model and schedule.
 */

const assignJob = (job, { id, index }) => {
    return Object.assign(job, {
        parent: {
            id,
            index,
        }
    });
};

/**
 * A job can be described as a single
 * a single process that has to be resolved
 * from the schedule. The jobs are listed 
 * within the schedule method. A job 
 * contains information about execution 
 * a related details for setting watchers
 * and resolving them in sync according
 * to the given configuration.
 */

function job (desc, { id, index }) {
    const obj = { ...defaults, ...desc };

    if(validate(obj)) {
        createJob(obj);

        assignJob(obj, { 
            id, 
            index 
        });

        return obj;
    }
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default job; 
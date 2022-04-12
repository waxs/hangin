/** ----------------------------------------
    Utitities
 ---------------------------------------- */

import _id from '@util/function/_id';
import _watcher from '@util/function/_watcher';
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

const defaults = {
    watch: true,
    delay: 0
};

/** ----------------------------------------
    Job
 ---------------------------------------- */

const createJob = job => {
    return Object.assign(job, {
        active: true,
        id: _id(),
        key: _toCamel(job.name),
        timestamp: _timestamp()
    });
};

const assignJob = (job, { id, index }) => {
    return Object.assign(job, {
        parent: {
            id,
            index,
        }
    });
};

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
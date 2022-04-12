/** ----------------------------------------
    Schema
 ---------------------------------------- */

import schema from '@util/debug/_schema';

const validate = schema({
    state: String,
    progress: Number,
    name: String,
    percentage: Number,
    total: Number
});

/** ----------------------------------------
    Progress
 ---------------------------------------- */

function progress(model) {
    let _progress = {};

    Object.defineProperty(model, 'progress', {
        get: () => {
            return _progress;
        },
        set: info => {
            if(validate(info)) {
                _progress = info;
                model.event.dispatch('progress', info);
            }
        }
    }); 
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default progress;
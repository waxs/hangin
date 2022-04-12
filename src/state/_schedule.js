/** ----------------------------------------
    Schedule
 ---------------------------------------- */

function schedule(model) {
    let _schedule = null;

    Object.defineProperty(model, '_schedule', {
        get: () => {
            return _schedule;
        },
        set: value => { 
            _schedule = value;
        }
    }); 
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default schedule;
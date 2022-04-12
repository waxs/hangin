/** ----------------------------------------
    Apply
 ---------------------------------------- */

/**
 * Using the apply function configurations
 * can be set within the schedule model, these
 * will provide information about the settings
 * to be resolved within different stages of
 * handling the queue. 
 * 
 * @param { object } config - the specified configuration
 */

function apply(config) {
    const keys = Object.keys(config);

    const schedule = this.model(this._schedule);

    keys.forEach(key => { 
        schedule[key] = config[key];
    });
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default apply;
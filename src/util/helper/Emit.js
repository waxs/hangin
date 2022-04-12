/** ----------------------------------------
    Utils
 ---------------------------------------- */

import error from '@util/debug/_error';
import timestamp from '@util/format/_timestamp';
import id from '@util/function/_id';

/** ----------------------------------------
    Validate
 ---------------------------------------- */

const validate = (name, check) => {
    return error(check, `A callback is mandatory for "${ name }", specify the event on('name', () => { ... }).`);
};

/** ----------------------------------------
    Emit
 ---------------------------------------- */

class Emit {

    /** ----------------------------------------
        Constructor
     ---------------------------------------- */

    constructor() {
        this._events = {};
    }

    /** ----------------------------------------
        Emit
     ---------------------------------------- */

    _handle(name) {
        const events = Object.keys(this._events);

        if(!events.includes(name)) {
            this._events[name] = [];
        }
    }

    /** ----------------------------------------
        Dispatch
     ---------------------------------------- */

    dispatch(name, payload) { 
        if(this._events[name]) {
            this._events[name].map(event => {
                event.callback && event.callback(payload);
            });
        }
    }

    /** ----------------------------------------
        On
     ---------------------------------------- */

    on(name, callback) {
        if(!validate(name, !callback)) {
            this._handle(name);

            this._events[name].push({
                id: id(),
                timestamp: timestamp(),
                callback
            });
        }
    }

    /** ----------------------------------------
        Remove
     ---------------------------------------- */

    remove(name) {
        delete this._events[name];
    }

};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default Emit;
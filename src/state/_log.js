/** ----------------------------------------
    Log
 ---------------------------------------- */

function log(model) {
    let _log = false;

    Object.defineProperty(model, 'log', {
        get: () => {
            return _log;
        },
        set: bool => { 
            _log = bool;
        }
    }); 
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default log;
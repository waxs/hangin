/** ----------------------------------------
    Active
 ---------------------------------------- */

/**
 * The active state will manage the state
 * of the schedules, it can be controlled
 * using the controller methods. Besides
 * controlling the state, a change will 
 * dispatch the "active" event to the 
 * observer class. 
 *
 * @param { boolean } bool - state
 * @return { boolean } state
 */

function active(model) {
    let _active = true;

    Object.defineProperty(model, 'active', {
        get: () => {
            return _active;
        },
        set: bool => { 
            _active = bool;
            model.event.dispatch('active', bool);
        }
    }); 
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default active;
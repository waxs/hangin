/** ----------------------------------------
    Loading
 ---------------------------------------- */

/**
 * Declares a loading state and will dispatch
 * the loading event once the state is changed,
 * this state is only used within the codebase
 * and can be exposed using the loading event. 
 */

function loading(model) {
    let _loading = false;

    Object.defineProperty(model, 'loading', {
        get: () => {
            return _loading;
        },
        set: bool => { 
            if(bool !== _loading) {
                _loading = bool;
                model.event.dispatch('loading', bool);
            }
        }
    }); 
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default loading;
/** ----------------------------------------
    Planned
 ---------------------------------------- */

import _id from '@util/function/_id';
import _remainder from '@util/format/_remainder';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Planned
 ---------------------------------------- */

/**
 * Implements a array of planned schedules
 * and will automatically clear planned
 * schedules once the schedule is looping.
 */

function planned(model) {
    let _planned = [];

    Object.defineProperty(model, 'planned', {
        get: () => {
            return _planned.map(model => {
                return Object.assign(model, {
                    await: _remainder(model.next)
                });
            });
        },
        set: ({ id, next }) => { 
            const now = _timestamp();

            const index = _planned.filter(item => item.model === id);

            if(index) _planned.splice(index, 1);

            _planned.push({
                active: true, 
                id: _id(),
                model: id,
                next: new Date(now.unix + next),
            });
        }
    }); 
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default planned;
/** ----------------------------------------
    Utils
---------------------------------------- */

import _timestamp from '@util/format/_timestamp';
import _timeout from '@util/function/_timeout';

/** ----------------------------------------
    Start
---------------------------------------- */

function start() {
    const schedule = this.model(this._schedule);

    this.active = true;

    this.apply({ 
        start: !schedule.start && _timestamp()
    });

    setTimeout(() => {
        this.plan();

        this.event.dispatch('play', {
            remainer: schedule.next,
            next: schedule.next && new Date(schedule.planned)
        });
    }, schedule.delay || 0);
}

/** ----------------------------------------
    Exports
---------------------------------------- */

export default start;
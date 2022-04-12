/** ----------------------------------------
    Utils
---------------------------------------- */

import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Start
---------------------------------------- */

function start() {
    const schedule = this.model(this._schedule);

    this.active = true;

    this.plan();

    this.event.dispatch('play', {
        remainer: schedule.next,
        next: schedule.next && new Date(schedule.planned)
    });
}

/** ----------------------------------------
    Exports
---------------------------------------- */

export default start;
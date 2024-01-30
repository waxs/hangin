/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _remainder from '@util/format/_remainder';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Begin
 ---------------------------------------- */

function begin(date, time) {
    const schedule = this.model(this._schedule);

    const stamp = _timestamp(date, time);

    this.apply({
        begin: stamp,
        delay: !schedule.unix && _remainder(stamp.unix)
    });

    return this;
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default begin;
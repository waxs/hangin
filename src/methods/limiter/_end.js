/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    End
 ---------------------------------------- */

function end(date, time) {
    this.apply({
        end: _timestamp(date, time)
    });

    return this;
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default end;
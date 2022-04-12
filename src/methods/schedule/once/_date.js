/** ----------------------------------------
    Utilties
---------------------------------------- */

import _date from '@util/format/_date';
import _remainder from '@util/format/_remainder';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Date
---------------------------------------- */

function date(date) {
    const split = _date(date);
    const stamp = _timestamp(split);
    const unix = _remainder(stamp.unix);

    this.apply({
        active: true,
        routine: 'once',
        unix: unix,
        time: '0:00'
    });
 
    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default date;
/** ----------------------------------------
    Utilties
---------------------------------------- */

import _cron from '@util/format/_cron';
import _date from '@util/format/_date';
import _remainder from '@util/format/_remainder';
import _time from '@util/format/_time';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Once
---------------------------------------- */

function once(date, time = '0:00:00') {
    const formatDate = _date(date);
    const formatTime = _time(time);

    const stamp = _timestamp(formatDate, formatTime);
    const unix = _remainder(stamp.unix);

    this.apply({
        active: true,
        routine: 'once',
        unix: unix
    });
    
    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default once;
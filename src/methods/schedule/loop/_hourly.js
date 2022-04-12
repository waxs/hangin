/** ----------------------------------------
    Utilties
---------------------------------------- */

import _cron from '@util/format/_cron';
import _time from '@util/format/_time';

/** ----------------------------------------
    Hourly
---------------------------------------- */

function hourly(minute = 0) {
    const cron = `${ minute } * * * *`;

    this.apply({
        active: true,
        routine: 'loop',
        cron: cron
    });
    
    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default hourly;
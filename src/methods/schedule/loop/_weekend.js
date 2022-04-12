/** ----------------------------------------
    Utilties
---------------------------------------- */

import _remainder from '@util/format/_remainder';
import _time from '@util/format/_time';

/** ----------------------------------------
    Weekend
---------------------------------------- */

/**
 * The weekend method will only execute
 * on saterday and sunday, and be called
 * on a specific given time.
 *
 * @param { string } time - HH:MM format
 * @return { this } extend instance
 */

function weekend(time = '0:00') {
    const [hour, minute] = _time(time);

    const cron = `${ minute } ${ hour } * * 0,6`;

    this.apply({
        active: true,
        routine: 'loop',
        cron: cron,
        time: time
    });
 
    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default weekend; 